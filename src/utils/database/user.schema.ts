import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type UserDocument = User & Document;
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

@Schema({ collection: 'users' })
export class User {
     @Prop({ unique: true })
     discordId: string;

     @Prop()
     username: string;

     @Prop()
     robloxId: number;

     @Prop()
     groups: [GroupDocument]
}

export const UserSchema = SchemaFactory.createForClass(User);