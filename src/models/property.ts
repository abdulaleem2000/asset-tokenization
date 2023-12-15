import mongoose, { Schema, Model } from "mongoose";
import bcrypt from "bcrypt";
import { UserDocument, UserModel } from "@/types/models/user.interface";

// const detailsSchema = new mongoose.Schema({
//   neighbourhood: String,
//   yoc: Date, //yearofconstruction
//   elevator: String,
//   builded_surface: String,
//   bedrooms: Number,
//   bathrooms: String,
//   is_rented: {
//     type: Boolean,
//     default: false,
//   },
// });

// const blockchainSchema = new mongoose.Schema({
//   tokenName: String,
// });

const PropertySchema = new Schema({
  name: String,
  directions: String,
  amount: String,
  annualInterest: String,
  grossAnnualInterest: String,
  grossAnnualRent: Number,
  interestPayment: Number,
  numberOfTokens: Number,
  tokenPrice: Number,
  minInvestment: Number,
  homeInterest: Number,
  deadline: Date,
  secMarket: String,
  currency: String,
  neighbourhood: String,
  yoc: Date, //yearofconstruction
  elevator: String,
  buildeDsurface: String,
  bedrooms: Number,
  bathrooms: String,
  isRented: String,
  tokenName: String,
  description: String,
});

// PropertySchema.pre("save", function (next) {
//   const user = this;

//   if (this.isModified("password") || this.isNew) {
//     bcrypt.genSalt(10, function (saltError, salt) {
//       if (saltError) return next(saltError);

//       bcrypt.hash(user.password!, salt, function (hashError, hash) {
//         if (hashError) return next(hashError);

//         user.password = hash;
//         next();
//       });
//     });
//   } else {
//     return next();
//   }
// });

// PropertySchema.methods.comparePassword = function (
//   password: string,
//   callback: Function
// ) {
//   bcrypt.compare(password, this.password, function (error, isMatch) {
//     if (error) return callback(error);

//     callback(null, isMatch);
//   });
// };

PropertySchema.statics.findExistingUser = async function (
  username: string,
  email: string
) {
  return await this.findOne({
    $or: [{ username }, { email }],
  });
};

PropertySchema.statics.findUser = async function (usernameOrEmail: string) {
  return await this.findOne({
    $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
  });
};

export default mongoose.models.Property ??
  mongoose.model("Property", PropertySchema);
