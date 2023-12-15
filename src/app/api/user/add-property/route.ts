import dbConnect from "@/lib/mongoConnection";
import Property from "@/models/property";
import { sendEmail } from "@/utils/mailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const {
      name,
      direction,
      amount,
      annualInterest,
      grossAnnualRent,
      netAmountRent,
      interestPayment,
      numberOfTokens,
      tokenPrice,
      minInvestment,
      homeInterest,
      deadline,
      secMarket,
      currency,
      neighbourhood,
      yoc,
      elevator,
      builded_surface,
      bedrooms,
      bathrooms,
      isRented,
      tokenName,
      description,
      dateCreated,
    } = await request.json();

    // const existingUser = await Property.findOne({
    //   $or: [{ username }, { email }],
    // });

    const dateCreatedAsDate = new Date(dateCreated * 1000);

    // TODO Do script to look at admin/invertor allowed mails
    // and if so give the rol automatically

    const newProperty = new Property({
      name,
      direction,
      amount,
      annualInterest,

      grossAnnualRent,
      netAmountRent,
      interestPayment,
      numberOfTokens,
      tokenPrice,
      minInvestment,
      homeInterest,
      deadline,
      secMarket,
      currency,
      neighbourhood,
      yoc,
      elevator,
      builded_surface,
      bedrooms,
      bathrooms,
      isRented,
      tokenName,
      description,
      createdDate: dateCreatedAsDate,
    });

    const savedProperty = await newProperty.save();

    return NextResponse.json(
      { message: "Property Saved Successfuly!", savedProperty },
      { status: 200 }
    );
  } catch (err: any) {
    console.log(err);
    return NextResponse.json(
      {
        success: false,
        message: err.message,
      },
      { status: 500 }
    );
  }
}
