import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site";

// The contact page prepares a user-reviewed email. Do not acknowledge delivery
// or store personal information on Vercel's ephemeral filesystem.
export async function POST() {
  return NextResponse.json(
    {
      error:
        "Online submission is not configured. Please use the email options on the contact page.",
      email: siteConfig.email,
    },
    { status: 503 },
  );
}
