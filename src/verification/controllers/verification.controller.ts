import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { SERVICES } from 'src/utils/constants';
import { CompleteVerificationDto } from 'src/utils/dtos';
import { IVerificationService } from '../interfaces/verification.interface';

@Controller('verify')
export class VerificationController {
     constructor(@Inject(SERVICES.VERIFICATION_SERVICE) private readonly verifyService: IVerificationService) {}

     @Get(':id')
     async getVerificationRecord(@Param('id') id: number) {
          const user = await this.verifyService.getVerificationRecord(id);

          if (!user) return { success: false, message: 'No User Found' };

          return user;
     }

     @Post('complete')
     verifyUser(@Body() { id, username, code }: CompleteVerificationDto) {
          return this.verifyService.verifyUser(id, code, username);
     }
}
