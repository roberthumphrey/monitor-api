import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { SERVICES } from 'src/utils/constants';
import { CompleteVerificationDto } from 'src/utils/dtos';
import { IVerificationService } from '../interfaces/verification.interface';

@Controller('verify')
export class VerificationController {
     constructor(@Inject(SERVICES.VERIFICATION_SERVICE) private readonly verifyService: IVerificationService) {}

     @Get(':id')
     getVerificationRecord(@Param('id') id: number) {
          return this.verifyService.getVerificationRecord(id);
     }

     @Post('complete')
     verifyUser(@Body() { id, username, code }: CompleteVerificationDto) {
          return this.verifyService.verifyUser(id, code, username);
     }
}
