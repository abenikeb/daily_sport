"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BottomNavigation } from "@/components/BottomNavigation";
import { useLanguage } from "@/contexts/LanguageContext";

const mainCategories = [
	"all",
	"national",
	"international",
	"sportHistory",
	"ethiopianAthletics",
];

export default function HomePage() {
	const { t } = useLanguage();

	return (
		<div className="flex-grow flex flex-col bg-gray-50">
			{/* Header */}
			{/* <header className="bg-white p-4 flex justify-between items-center shadow-sm">
				<div className="w-8 h-8 bg-primary rounded-full"></div>
				<Button variant="ghost" size="icon">
					<Search className="w-6 h-6 text-gray-500" />
					<span className="sr-only">{t("search")}</span>
				</Button>
			</header> */}

			{/* Featured Article */}
			<div className="bg-gray-50 p-4 mb-4">
				<Link
					href="/article/1"
					className="block relative h-48 rounded-lg overflow-hidden">
					<img
						src="/assets/images/fb1.png?height=192&width=384"
						alt="Featured Article"
						className="w-full h-full object-cover"
					/>
					<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
						<div className="bg-primary text-white text-xs font-bold px-2 py-1 rounded mb-2 w-16">
							{t("featured")}
						</div>
						<h2 className="text-white text-lg font-bold">{t("majorUpset")}</h2>
					</div>
				</Link>
			</div>

			{/* Main Categories */}
			<div className="flex overflow-x-auto p-4 space-x-4 bg-white mb-4">
				{mainCategories.map((category) => (
					<Link
						key={category}
						href={`/category/${category}`}
						className="flex-shrink-0 px-4 py-2 bg-gray-100 rounded-full text-sm hover:bg-primary hover:text-white transition-colors">
						{t(category)}
					</Link>
				))}
			</div>

			{/* Latest News */}
			<div className="flex-grow p-4 space-y-4 overflow-y-auto">
				<h3 className="font-bold text-lg text-gray-800">{t("latestNews")}</h3>
				{[1, 2, 3].map((item) => (
					<Link key={item} href={`/article/${item}`} className="block">
						<div className="bg-white p-4 rounded-lg flex space-x-4 shadow-sm hover:shadow-md transition-shadow">
							{/* <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0"></div> */}

							<img
								src="/assets/images/fb2.png?height=192&width=384"
								alt="Featured Article"
								className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0"
							/>

							<div className="flex-grow">
								<h4 className="font-bold mb-1 text-gray-800">
									{t("latestNews")} {item}
								</h4>
								<p className="text-sm text-gray-600">{t("shortDescription")}</p>
							</div>
						</div>
					</Link>
				))}
			</div>

			<BottomNavigation active="home" />
		</div>
	);
}
