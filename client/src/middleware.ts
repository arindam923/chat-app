import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse, type NextRequest } from "next/server";

export default async function middleware(req: NextRequest) {
	const { isAuthenticated } = getKindeServerSession();

	const auth = await isAuthenticated();

	if (!auth) {
		return NextResponse.redirect(new URL("/auth/login", req.url));
	}

	return NextResponse.next();
}

export const matcher = ["/", "/*"];
