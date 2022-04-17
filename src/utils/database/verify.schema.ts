import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type VerifyDocument = Verify & Document;
type GroupDocument = Group & Document;

@Schema()
class Group {
     @Prop()
     id: number;

     @Prop()
     points: number;

     @Prop()
     rankType: string;

     @Prop()
     rank: string;
}

@Schema({ collection: 'verify' })
export class Verify {
     @Prop()
     channelId: string;

     @Prop({ unique: true })
     discordId: string;

     @Prop()
     username: string;

     @Prop()
     robloxId: number;

     @Prop()
     groups: [GroupDocument]

     @Prop()
     code: number;
}

export const VerifySchema = SchemaFactory.createForClass(Verify);