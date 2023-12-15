import { Document, Model } from "mongoose";

export interface UserDocument extends Document {
  username: string;
  email: string;
  password: string;
  rol: string;
  createdDate: Date;

  comparePassword(
    password: string,
    callback: (error: Error | null, isMatch?: boolean) => void
  ): void;
}

export interface UserModel extends Model<UserDocument> {
  findExistingUser(
    username: string,
    email: string
  ): Promise<UserDocument | null>;
  findUser(usernameOrEmail: string): Promise<UserDocument | null>;
}
