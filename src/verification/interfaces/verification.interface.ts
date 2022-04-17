import { Verify } from "src/utils/database/verify.schema";
import { VerificationStatus } from "src/utils/types";

export interface IVerificationService {
     getVerificationRecord(id: number): Promise<Verify>;
     verifyUser(id: number, code: number, username: string): Promise<VerificationStatus>;
}