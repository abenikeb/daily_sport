"use client";

import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BottomNavigation } from "@/components/BottomNavigation";
import { useLanguage } from "@/contexts/LanguageContext";

const subcategories = ["football", "basketball", "tennis", "f1"];

export default function CategoryPage({ params }: { params: { name: string } }) {
	const { t } = useLanguage();

	return (
		<div className="max-w-md mx-auto bg-gray-50 min-h-screen flex flex-col">
			{/* Header */}
			<header className="sticky top-0 bg-white p-4 flex justify-between items-center border-b border-gray-200 shadow-sm">
				<Link href="/">
					<Button variant="ghost" size="icon">
						<ArrowLeft className="w-6 h-6 text-gray-700" />
						<span className="sr-only">{t("back")}</span>
					</Button>
				</Link>
				<h1 className="text-xl font-bold capitalize text-gray-800">
					{t(params.name)}
				</h1>
				<Button variant="ghost" size="icon">
					<Search className="w-6 h-6 text-gray-700" />
					<span className="sr-only">{t("search")}</span>
				</Button>
			</header>

			{/* Subcategories */}
			<div className="p-4">
				<h2 className="text-lg font-bold mb-4 text-gray-800">
					{t("subcategories")}
				</h2>
				<div className="grid grid-cols-2 gap-4">
					{subcategories.map((subcategory) => (
						<Link
							key={subcategory}
							href={`/category/${params.name}/${subcategory}`}
							className="block">
							<div className="bg-white p-4 rounded-lg flex flex-col items-center justify-center aspect-square shadow-sm hover:shadow-md transition-shadow">
								<span className="font-medium text-gray-800">
									{t(subcategory)}
								</span>
							</div>
						</Link>
					))}
				</div>
			</div>

			{/* Latest News in Category */}
			<div className="flex-grow p-4 space-y-4">
				<h3 className="font-bold text-lg text-gray-800">{t("latestNews")}</h3>
				{[1, 2, 3].map((item) => (
					<Link key={item} href={`/article/${item}`} className="block">
						<div className="bg-white p-4 rounded-lg flex space-x-4 shadow-sm hover:shadow-md transition-shadow">
							<div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0"></div>
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

			<BottomNavigation active="categories" />
		</div>
	);
}
