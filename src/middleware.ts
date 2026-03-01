import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
    const { nextUrl, auth: session } = req;
    const pathname = nextUrl.pathname;

    const isLoggedIn = !!session;
    const userRole = (session?.user as { role?: string })?.role ?? "CLIENT";

    // Protect /portal/* — requires any logged-in user
    if (pathname.startsWith("/portal")) {
        if (!isLoggedIn) {
            return NextResponse.redirect(new URL("/login", nextUrl));
        }
    }

    // Protect /admin/* — requires ADMIN role
    if (pathname.startsWith("/admin")) {
        if (!isLoggedIn) {
            return NextResponse.redirect(new URL("/login", nextUrl));
        }
        if (userRole !== "ADMIN") {
            return NextResponse.redirect(new URL("/portal", nextUrl));
        }
    }

    return NextResponse.next();
});

export const config = {
    matcher: ["/portal/:path*", "/admin/:path*"],
};
