import { User } from "./database/user.schema";

export type VerificationStatus = {
     success: boolean;
     message: string;
     user?: User
}