"use client";

import Link from "next/link";
import { Home, Trophy, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function BottomNavigation({
	active,
}: {
	active: "home" | "categories" | "profile" | "more";
}) {
	const { t } = useLanguage();

	return (
		<nav className="bg-white border-t border-gray-200 flex justify-around py-2">
			<Link href="/">
				<Button
					variant="ghost"
					size="icon"
					className={active === "home" ? "text-primary" : "text-gray-400"}>
					<Home className="w-6 h-6" />
					<span className="sr-only">{t("home")}</span>
				</Button>
			</Link>
			<Link href="/category/all">
				<Button
					variant="ghost"
					size="icon"
					className={
						active === "categories" ? "text-primary" : "text-gray-400"
					}>
					<Trophy className="w-6 h-6" />
					<span className="sr-only">{t("categories")}</span>
				</Button>
			</Link>
			<Link href="/profile">
				<Button
					variant="ghost"
					size="icon"
					className={active === "profile" ? "text-primary" : "text-gray-400"}>
					<User className="w-6 h-6" />
					<span className="sr-only">{t("profile")}</span>
				</Button>
			</Link>
			<Link href="/more">
				<Button
					variant="ghost"
					size="icon"
					className={active === "more" ? "text-primary" : "text-gray-400"}>
					<Menu className="w-6 h-6" />
					<span className="sr-only">{t("more")}</span>
				</Button>
			</Link>
		</nav>
	);
}
