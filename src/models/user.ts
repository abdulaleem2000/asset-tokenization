import mongoose, { Schema, Model } from "mongoose";
import bcrypt from "bcrypt";
import { UserDocument, UserModel } from "@/types/models/user.interface";

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "Please provide a username"],
    unique: true,
  },
  name: String,
  surname: String,
  email: String,
  password: String,
  rol: String,
  created_date: Date,
  image: String,
  nationality: String,
  phone_number: Number,
  id: String,
  address: String,
  city: String,
  region: String,
  postal_code: Number,
  country: String,
  representing_company: Boolean,
  company_name: String,
  company_tax_id: Number,
  company_address: String,
  company_city: String,
  company_region: String,
  company_postal_code: String,
  company_country: String,
  company_greater_percetage: Boolean,
  legal_documents_sent: Boolean,
  legal_documents_verified: Boolean,
  completed_account: Boolean,
  is_admin: {
    type: Boolean,
    default: false,
  },
  is_verified: {
    type: Boolean,
    default: false,
  },
  forgot_password_token: String,
  forgot_password_token_expiry: Date,
  verify_token: String,
  verify_token_expiry: Date,
  // CHATS //
  conversation_ids: [Schema.Types.ObjectId],
  seen_message_ids: [Schema.Types.ObjectId],
});

UserSchema.pre("save", function (next) {
  const user = this;

  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(10, function (saltError, salt) {
      if (saltError) return next(saltError);

      bcrypt.hash(user.password!, salt, function (hashError, hash) {
        if (hashError) return next(hashError);

        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

UserSchema.methods.comparePassword = function (
  password: string,
  callback: Function
) {
  bcrypt.compare(password, this.password, function (error, isMatch) {
    if (error) return callback(error);

    callback(null, isMatch);
  });
};

UserSchema.statics.findExistingUser = async function (
  username: string,
  email: string
) {
  return await this.findOne({
    $or: [{ username }, { email }],
  });
};

UserSchema.statics.findUser = async function (usernameOrEmail: string) {
  return await this.findOne({
    $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
  });
};

export default mongoose.models.User ?? mongoose.model("User", UserSchema);
