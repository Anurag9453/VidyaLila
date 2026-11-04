import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    const host = req.headers.get("host") || "";
    const pathname = req.nextUrl.pathname;

    // Route subdomain requests (admin.vidyalila.com or admin.localhost:3000) directly to /admin
    if (
        (host.startsWith("admin.vidyalila.com") || host.startsWith("admin.localhost")) &&
        pathname === "/"
    ) {
        const url = req.nextUrl.clone();
        url.pathname = "/admin";
        return NextResponse.rewrite(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/", "/admin/:path*", "/admin.vidyalila.com/:path*"],
};
