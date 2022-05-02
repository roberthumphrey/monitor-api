import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/utils/database/user.schema';
import { Verify, VerifyDocument } from 'src/utils/database/verify.schema';
import { Data, VerificationStatus } from 'src/utils/types';
import { IVerificationService } from '../interfaces/verification.interface';

@Injectable()
export class VerificationService implements IVerificationService {
     constructor(@InjectModel(Verify.name) private readonly verifyModel: Model<VerifyDocument>, @InjectModel(User.name) private readonly userModel: Model<UserDocument>) {}

     async getVerificationRecord(id: number): Promise<Verify> {
          return await this.verifyModel.findOne({ robloxId: id }).exec();
     }

     async verifyUser(id: number, code: number, username: string): Promise<VerificationStatus> {
          const verificationRecord = await this.verifyModel.findOne({ robloxId: id }).exec();

          const userCode = verificationRecord.get('code');
          const discordId = verificationRecord.get('discordId');
          const groups = verificationRecord.get('groups');

          let correctCode = code === userCode ? true : false;
          
          if (!correctCode) return { success: false, message: 'Incorrect verification code provided' };

          const user = await this.userModel.create({ discordId, username, robloxId: id, groups });

          if (!user) return { success: false, message: 'An unknown error occurred in the verification proccess' };

          let data: Data = {
               channelId: verificationRecord.get('channelId'),
               server: '962332707340312596',
               user
          }

          await this.verifyModel.deleteOne({ discordId });

          return { success: true, message: `User ${username} (${id}) has been verified successfully.`, data };
     }
}
