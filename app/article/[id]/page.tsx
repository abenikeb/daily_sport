"use client";

import Link from "next/link";
import {
	ArrowLeft,
	Share2,
	ThumbsUp,
	MessageSquare,
	Bookmark,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ArticlePage({ params }: { params: { id: string } }) {
	const { t } = useLanguage();

	return (
		<div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">
			{/* Header */}
			<header className="sticky top-0 bg-white p-4 flex justify-between items-center border-b border-gray-200 shadow-sm">
				<Link href="/">
					<Button variant="ghost" size="icon">
						<ArrowLeft className="w-6 h-6 text-gray-700" />
						<span className="sr-only">{t("back")}</span>
					</Button>
				</Link>
				<Button variant="ghost" size="icon">
					<Share2 className="w-6 h-6 text-gray-700" />
					<span className="sr-only">{t("share")}</span>
				</Button>
			</header>

			{/* Article Content */}
			<article className="flex-grow p-4 overflow-y-auto">
				<h1 className="text-2xl font-bold mb-2 text-gray-800">
					{t("majorUpset")}
				</h1>
				<div className="flex items-center text-sm text-gray-500 mb-4">
					<img
						src="/placeholder.svg?height=32&width=32"
						alt="Author"
						className="w-8 h-8 rounded-full mr-2"
					/>
					<span>John Doe • 2 hours ago</span>
				</div>
				<img
					src="/placeholder.svg?height=200&width=375"
					alt="Article hero image"
					className="w-full h-48 object-cover rounded-lg mb-4"
				/>
				<p className="text-gray-800 mb-4">{t("shortDescription")}</p>
				<p className="text-gray-800 mb-4">{t("shortDescription")}</p>
				<p className="text-gray-800 mb-4">{t("shortDescription")}</p>

				{/* Related Articles */}
				<div className="mt-8">
					<h2 className="text-xl font-bold mb-4 text-gray-800">
						{t("relatedArticles")}
					</h2>
					{[1, 2].map((item) => (
						<Link key={item} href={`/article/${item}`} className="block mb-4">
							<div className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
								<h3 className="font-bold mb-1 text-gray-800">
									{t("latestNews")} {item}
								</h3>
								<p className="text-sm text-gray-600">{t("shortDescription")}</p>
							</div>
						</Link>
					))}
				</div>
			</article>

			{/* Interaction Bar */}
			<div className="sticky bottom-0 bg-white border-t border-gray-200 p-4 flex justify-between items-center shadow-sm">
				<div className="flex items-center space-x-4">
					<Button
						variant="ghost"
						size="sm"
						className="flex items-center space-x-1">
						<ThumbsUp className="w-5 h-5 text-primary" />
						<span className="text-gray-700">2.5k</span>
						<span className="sr-only">{t("likes")}</span>
					</Button>
					<Button
						variant="ghost"
						size="sm"
						className="flex items-center space-x-1">
						<MessageSquare className="w-5 h-5 text-primary" />
						<span className="text-gray-700">128</span>
						<span className="sr-only">{t("comments")}</span>
					</Button>
				</div>
				<Button variant="ghost" size="icon">
					<Bookmark className="w-5 h-5 text-primary" />
					<span className="sr-only">{t("save")}</span>
				</Button>
			</div>
		</div>
	);
}
