import { User } from "./database/user.schema";

export type Data = {
     channelId: string;
     server: string;
     user: User
}

export type VerificationStatus = {
     success: boolean;
     message: string;
     data?: Data
}

export type Ping = {
     time: Date;
}