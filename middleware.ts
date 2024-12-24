// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
// 	const path = request.nextUrl.pathname;

// 	// Define public paths
// 	const isPublicPath = path === "/" || path === "/user";

// 	// Check if user is authenticated (this is a simplified check)
// 	const isAuthenticated = request.cookies.has("auth");

// 	if (!isPublicPath && !isAuthenticated) {
// 		return NextResponse.redirect(new URL("/", request.url));
// 	}

// 	// Add role-based access control
// 	if (isAuthenticated) {
// 		const role = request.cookies.get("role")?.value;

// 		if (path.startsWith("/admin") && role !== "admin") {
// 			return NextResponse.redirect(new URL("/", request.url));
// 		}

// 		if (path.startsWith("/provider") && role !== "provider") {
// 			return NextResponse.redirect(new URL("/", request.url));
// 		}

// 		if (path.startsWith("/telecom") && role !== "telecom") {
// 			return NextResponse.redirect(new URL("/", request.url));
// 		}
// 	}

// 	return NextResponse.next();
// }

// export const config = {
// 	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
	// const path = request.nextUrl.pathname;
	// // Define public paths
	// const isPublicPath = path === "/" || path === "/user";
	// // Check if user is authenticated (this is a simplified check)
	// const isAuthenticated = true;
	// if (!isPublicPath && !isAuthenticated) {
	// 	return NextResponse.redirect(new URL("/", request.url));
	// }
	// // Add role-based access control
	// if (isAuthenticated) {
	// 	// const role = request.cookies.get("role")?.value;
	// 	if (path.startsWith("/admin")) {
	// 		return NextResponse.redirect(new URL("/admin", request.url));
	// 	}
	// 	if (path.startsWith("/provider")) {
	// 		return NextResponse.redirect(new URL("/provider", request.url));
	// 	}
	// 	if (path.startsWith("/telecom")) {
	// 		return NextResponse.redirect(new URL("/telecom", request.url));
	// 	}
	// }
	// return NextResponse.next();
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
