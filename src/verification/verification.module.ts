import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SERVICES } from 'src/utils/constants';
import { User, UserSchema } from 'src/utils/database/user.schema';
import { Verify, VerifySchema } from 'src/utils/database/verify.schema';
import { WebSocketModule } from 'src/websocket/websocket.module';
import { VerificationController } from './controllers/verification.controller';
import { VerificationService } from './services/verification.service';

@Module({
     imports: [
          MongooseModule.forFeature([ { name: Verify.name, schema: VerifySchema }, { name: User.name, schema: UserSchema } ]),
          WebSocketModule
     ],
     controllers: [VerificationController],
     providers: [
          { provide: SERVICES.VERIFICATION_SERVICE, useClass: VerificationService }
     ]
})
export class VerificationModule {}
