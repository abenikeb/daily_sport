import axios from "axios";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { authenticateUser } from "@/lib/auth";
import { cookies } from "next/headers";

const handler = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID || "",
			clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
		}),
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				phone: { label: "Phone", type: "text" },
			},
			async authorize(credentials): Promise<any | null> {
				const phone = credentials?.phone;
				if (!phone) {
					return null;
				}

				try {
					const user: any = await authenticateUser(phone);
					if (user && user.code === "2") {
						const cookieStore = cookies();
						cookieStore.set("requiresVerification", "true");
						return {
							id: user.id,
							code: user.code,
							name: user.name,
							phone: user.phone,
							requiresVerification: true,
						};
					}
					if (user && user.code === "0") {
						return {
							id: user.id,
							code: user.code,
							name: user.name,
							phone: user.phone,
							requiresVerification: true,
						};
					}
				} catch (error) {
					console.error("Error during user authentication:", error);
				}
				return null;
			},
		}),
	],

	callbacks: {
		async session({ session, token }: any) {
			console.log({ session, token });
			if (session.user && session.user.email) {
				return session;
				// try {
				// 	const response = await axios.get(
				// 		`${process.env.REMOTE_API_URL}/users?email=${session.user.email}`
				// 	);
				// 	if (response.data) {
				// 		session.user.id = response.data.id;
				// 		session.user.phone = response.data.phone;

				// 		const cookieStore = cookies();
				// 		cookieStore.set("phone", response.data.phone);
				// 		cookieStore.set("name", response.data.user_name);
				// 	}
				// } catch (error) {
				// 	console.error("Error fetching user data:", error);
				// }
			} else {
				try {
					// const { data } = await axios.post(
					// 	`${process.env.REMOTE_API_URL}/social-login`,
					// 	{
					// 		phone: token.phone,
					// 		name: "Benjamin Asefa",
					// 		image: "image",
					// 		type: "credential",
					// 	}
					// );
					// if (data && data.original) {
					// 	session.user.phone = data.original.phone;
					// 	session.user.email = data.original.email;
					// 	session.user.name = data.original.user_name;
					// 	const cookieStore = cookies();
					// 	cookieStore.set("phone", data.original.phone);
					// 	cookieStore.set("name", data.original.user_name);
					// }
				} catch (error) {
					console.error("Error fetching user data:", error);
				}
			}
			return session;
		},

		async signIn({ profile, account, user }: any) {
			console.log({
				profile,
				account,
			});
			if (account.type === "credentials") {
				return true;
			}
			if (account.type === "oauth") {
				console.log("Account");
				try {
					const response = await axios.post(
						`${process.env.REMOTE_API_URL}/social-login`,
						{
							email: profile.email,
							name: profile.name,
							image: profile.picture,
						}
					);
					return true;
				} catch (error) {
					console.error("Error during social sign-in:", error);
					return false;
				}
			}

			console.error("Profile is missing required fields");
			return false;
		},

		async jwt({ token, user }: any) {
			if (user) {
				token.id = user.id;
				token.phone = user.phone;
				if (user.requiresVerification) {
					token.requiresVerification = true;
				}
			}
			return token;
		},

		async redirect({ url, baseUrl }) {
			console.log({ url, baseUrl });
			// Check if the URL is the base URL, then redirect to Home
			return url.startsWith(baseUrl) ? `${baseUrl}/profile` : url;
			// return url === baseUrl ? `${baseUrl}/Home` : url;
		},
	},

	pages: {
		signIn: "/profile",
	},

	session: {
		strategy: "jwt",
	},
});
export const GET = handler;
export const POST = handler;
