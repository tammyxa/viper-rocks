import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";


export default withAuth(function middleware(req) {
        console.log(req.nextUrl.pathname)
        
    // If the user is not an admin, redirect to the Denied page
        if (
        req.nextUrl.pathname.startsWith("/Forbidden") &&
        req.nextauth.token.role != "Admin"
        ) {
            return NextResponse.redirect(new URL("/Denied", req.url));
        }
    },
    {
    
        callbacks: {
            authorized: ({ token }) => !!token,
        },
    }
    );

export const config = { matcher: ["/Forbidden"] };