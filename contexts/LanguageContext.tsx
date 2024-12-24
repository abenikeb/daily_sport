"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "am" | "om";

type LanguageContextType = {
	language: Language;
	setLanguage: (lang: Language) => void;
	t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined
);

const translations: Record<Language, Record<string, string>> = {
	en: {
		home: "Home",
		categories: "Categories",
		profile: "Profile",
		more: "More",
		latestNews: "Latest News",
		featured: "Featured",
		search: "Search",
		back: "Back",
		share: "Share",
		likes: "Likes",
		comments: "Comments",
		save: "Save",
		relatedArticles: "Related Articles",
		favoriteSports: "Favorite Sports",
		savedArticles: "Saved Articles",
		settings: "Settings",
		sportsEnthusiast: "Sports Enthusiast",
		majorUpset: "Major Upset in Championship Game",
		shortDescription: "Short description of the news item...",
		readMore: "Read More",
		national: "National",
		international: "International",
		sportHistory: "Sport History",
		ethiopianAthletics: "Ethiopian Athletics",
		football: "Football",
		basketball: "Basketball",
		tennis: "Tennis",
		f1: "F1",
		subcategories: "Subcategories",
	},
	am: {
		home: "መነሻ",
		categories: "ምድቦች",
		profile: "መገለጫ",
		more: "ተጨማሪ",
		latestNews: "የቅርብ ጊዜ ዜና",
		featured: "ተለይቶ የቀረበ",
		search: "ፍለガ",
		back: "ተመለስ",
		share: "አጋራ",
		likes: "ወደዱት",
		comments: "አስተያየቶች",
		save: "አስቀምጥ",
		relatedArticles: "ተዛማጅ ጽሑፎች",
		favoriteSports: "የሚወዷቸው ስፖርቶች",
		savedArticles: "የተቀመጡ ጽሑፎች",
		settings: "ቅንብሮች",
		sportsEnthusiast: "የስፖርት ወዳጅ",
		majorUpset: "በሻምፒዮንሺፕ ጨዋታ ላይ ታላቅ ድንገተኛ ሁኔታ",
		shortDescription: "የዜናው አጭር መግለጫ...",
		readMore: "ተጨማሪ ያንብቡ",
		national: "ሀገራዊ",
		international: "ዓለም አቀፍ",
		sportHistory: "የስፖርት ታሪክ",
		ethiopianAthletics: "የኢትዮጵያ አትሌቲክስ",
		football: "እግር ኳስ",
		basketball: "ቅርጫት ኳስ",
		tennis: "ቴኒስ",
		f1: "ፎርሙላ 1",
		subcategories: "ንዑስ ምድቦች",
	},
	om: {
		home: "Mana",
		categories: "Ramaddii",
		profile: "Eenyummeessa",
		more: "Dabalata",
		latestNews: "Oduu Haaraa",
		featured: "Kan Filatame",
		search: "Barbaadi",
		back: "Duubatti",
		share: "Qoodi",
		likes: "Jaallatamaa",
		comments: "Yaada",
		save: "Kuadhu",
		relatedArticles: "Barreeffamoota Walfakkaataa",
		favoriteSports: "Ispoortii Jaallatamaa",
		savedArticles: "Barreeffamoota Kuufame",
		settings: "Qindaaina",
		sportsEnthusiast: "Shaakalaa Ispoortii",
		majorUpset: "Mooii Guddaa Taphoota Injifannoo",
		shortDescription: "Ibsa gabaabaa odeeffannoo...",
		readMore: "Dabalataan Dubbisi",
		national: "Biyya Keessaa",
		international: "Addunyaa",
		sportHistory: "Seenaa Ispoortii",
		ethiopianAthletics: "Atleetiksii Itoophiyaa",
		football: "Kubbaa Miilaa",
		basketball: "Kubbaa Harkaa",
		tennis: "Tenisii",
		f1: "Formula 1",
		subcategories: "Ramaddii Xiqqaa",
	},
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [language, setLanguage] = useState<Language>("en");

	useEffect(() => {
		const savedLanguage = localStorage.getItem("language") as Language;
		if (savedLanguage) {
			setLanguage(savedLanguage);
		}
	}, []);

	const changeLanguage = (lang: Language) => {
		setLanguage(lang);
		localStorage.setItem("language", lang);
	};

	const t = (key: string) => {
		return translations[language][key] || key;
	};

	return (
		<LanguageContext.Provider
			value={{ language, setLanguage: changeLanguage, t }}>
			{children}
		</LanguageContext.Provider>
	);
};

export const useLanguage = () => {
	const context = useContext(LanguageContext);
	if (context === undefined) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}
	return context;
};
