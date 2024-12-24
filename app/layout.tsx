import type { Metadata } from "next";
import { Raleway as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import Footer from "@components/shared/footer";
import Provider from "@/components/Provider";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { LanguageSelector } from "@/components/LanguageSelector";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

import "./globals.css";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
	weight: ["400", "500", "600", "700"],
});

export const metadata = {
	title: "Daily Sport News App",
	description: "Stay updated with the latest sports news",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Provider session={undefined}>
				<LanguageProvider>
					<body
						className={cn(
							"min-h-screen bg-background font-sans antialiased",
							fontSans.variable
						)}>
						<div className="max-w-md mx-auto bg-gray-100 min-h-screen flex flex-col">
							<header className="bg-white p-4 flex justify-between items-center shadow-lg">
								<div className="w-8 h-8 bg-red-500 rounded-full"></div>
								<div className="flex justify-between items-center">
									<Button variant="ghost" size="icon">
										<Search className="w-7 h-7 text-gray-500" />
										<span className="sr-only">search</span>
									</Button>
									<LanguageSelector />
								</div>
							</header>
							{children}
						</div>
					</body>
				</LanguageProvider>
			</Provider>
		</html>
		// <html lang="en">
		// 	<Provider session={undefined}>
		// 		<body
		// 			className={cn(
		// 				"min-h-screen bg-background font-sans antialiased",
		// 				fontSans.variable
		// 			)}>
		// 			{children}
		// 		</body>
		// 		{/* <Footer /> */}
		// 	</Provider>
		// </html>
	);
}
