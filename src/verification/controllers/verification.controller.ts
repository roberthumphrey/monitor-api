import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { HANDLERS, SERVICES } from 'src/utils/constants';
import { CompleteVerificationDto } from 'src/utils/dtos';
import { WebSocketHandler } from 'src/websocket/websocket.gateway';
import { IVerificationService } from '../interfaces/verification.interface';

@Controller('verify')
export class VerificationController {
     constructor(@Inject(SERVICES.VERIFICATION_SERVICE) private readonly verifyService: IVerificationService, @Inject(HANDLERS.WEBSOCKET) private readonly ws: WebSocketHandler) {}

     @Get(':id')
     async getVerificationRecord(@Param('id') id: number) {
          const user = await this.verifyService.getVerificationRecord(id);

          if (!user) return { success: false, message: 'No User Found' };

          return { success: true, user };
     }

     @Post('complete')
     async verifyUser(@Body() { id, username, code }: CompleteVerificationDto) {
          const status = await this.verifyService.verifyUser(id, code, username);

          this.ws.verificationComplete(status.user);

          return status;
     }
}
