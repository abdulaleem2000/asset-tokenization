
import { log } from "console";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtDecode } from "jwt-decode";
import { getDataFromToken } from "@/utils/getDataFromToken";
import { TokenData } from "@/types/constants/token-data.interface";

export async function GET(request: NextRequest) {
    
    try{
        const tokenData: TokenData = getDataFromToken(request);

        if (tokenData.role === 'Admin')
            return NextResponse.json({ message: "Fail", success: false }, { status: 401 });
        else if (tokenData.role === 'Client')
            return NextResponse.json({ message: "Success", success: true});
            

    } catch (err: any) {
        console.error("API Error:", err);
        return NextResponse.json({ message: err.message }, { status: 500 });
    }
}