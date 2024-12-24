"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HomeIcon, MenuIcon, UserIcon } from "./common";
import { MessageSquare, PackageIcon } from "lucide-react";
import { signIn, useSession, getProviders } from "next-auth/react";
import { LoadingDots } from "@components/shared/icons";
import { useRouter } from "next/navigation";

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function Footer() {
	const [signInClicked, setSignInClicked] = useState(false);
	const [providers, setProviders] = useState<any>(null);
	const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
	const { data: session } = useSession();
	const router = useRouter();

	useEffect(() => {
		(async () => {
			const res = await getProviders();
			setProviders(res);
		})();
	}, []);

	const handleNavigation = (path: string) => {
		if (!session?.user) {
			setIsLoginModalOpen(true);
		} else {
			router.push(path);
		}
	};

	return (
		<div>
			<nav className="bg-background border-t flex justify-between py-2 fixed bottom-0 w-full px-6">
				<Link
					href="/"
					className="flex flex-col justify-center items-center gap-1 text-muted-foreground hover:text-foreground"
					prefetch={false}>
					<HomeIcon className="w-6 h-6" />
					<span className="text-xs">Home</span>
				</Link>

				<button
					onClick={() => handleNavigation("/messagesPage")}
					className="flex flex-col justify-center items-center gap-1 text-muted-foreground hover:text-foreground">
					<MessageSquare className="w-6 h-6" />
					<span className="text-xs">Messages</span>
				</button>

				<button
					onClick={() => handleNavigation("/post")}
					className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground">
					<MenuIcon className="w-6 h-6" />
					<span className="text-xs">Post</span>
				</button>

				<button
					onClick={() => handleNavigation("/myProducts")}
					className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground">
					<PackageIcon className="w-6 h-6" />
					<span className="text-xs">My Products</span>
				</button>

				<Link
					href="/profile"
					className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground">
					<UserIcon className="w-6 h-6" />
					<span className="text-xs">Account</span>
				</Link>
			</nav>

			{/* Log In Modal*/}
			<Dialog open={isLoginModalOpen} onOpenChange={setIsLoginModalOpen}>
				<DialogContent className="sm:max-w-[420px]">
					<DialogHeader>
						<DialogTitle>Log In</DialogTitle>
						<DialogDescription>
							Please log in to access your account.
						</DialogDescription>
					</DialogHeader>
					<div className="mt-6">
						{providers &&
							Object.values(providers)
								.filter((provider: any) => provider.id === "google")
								.map((provider: any) => (
									<Button
										key={provider.name}
										onClick={() => {
											signIn(provider.id);
											setSignInClicked(true);
										}}
										className="w-full bg-white hover:bg-gray-100 text-gray-900 border border-gray-300 transition duration-150 ease-in-out h-10 text-base"
										disabled={signInClicked}>
										{signInClicked ? (
											<LoadingDots color="#1e3a8a" />
										) : (
											<span className="flex items-center justify-center">
												<svg className="w-6 h-6 mr-2" viewBox="0 0 24 24">
													<path
														fill="#4285F4"
														d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
													/>
													<path
														fill="#34A853"
														d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
													/>
													<path
														fill="#FBBC05"
														d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
													/>
													<path
														fill="#EA4335"
														d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
													/>
													<path fill="none" d="M1 1h22v22H1z" />
												</svg>
												Continue with Google
											</span>
										)}
									</Button>
								))}
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
}
