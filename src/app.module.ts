import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { VerificationModule } from './verification/verification.module';

@Module({
     imports: [
          ConfigModule.forRoot({
               envFilePath: '.env',
               isGlobal: true
          }),
          MongooseModule.forRoot(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_URI}/${process.env.DB}?retryWrites=true&w=majority`),
          VerificationModule
     ],
     controllers: [],
     providers: [],
})
export class AppModule {}