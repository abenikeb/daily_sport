import {
	Tv,
	Cpu,
	Headphones,
	Smartphone,
	Camera,
	Watch,
	Server,
	Grid,
} from "lucide-react";

export const getUserOrder = async () => {
	// Mock data for orders with more details
	const orders = [
		{
			id: "ORD001",
			date: "2024-10-20",
			total: 1299.99,
			status: "Delivered",
			progress: 100,
			items: [
				{
					name: "Wireless Headphones",
					image: "/assets/images/headphones.jpg?height=80&width=80",
					quantity: 1,
					price: 499.99,
				},
				{
					name: "Phone Case",
					image: "/assets/images/phone_case.jpg?height=80&width=80",
					quantity: 2,
					price: 50.0,
				},
			],
		},
		{
			id: "ORD002",
			date: "2024-10-18",
			total: 799.5,
			status: "Shipped",
			progress: 75,
			items: [
				{
					name: "Smart Speaker",
					image: "/assets/images/smart_speaker.jpg?height=80&width=80",
					quantity: 1,
					price: 799.5,
				},
			],
		},
		{
			id: "ORD003",
			date: "2023-10-15",
			total: 1499.99,
			status: "Processing",
			progress: 25,
			items: [
				{
					name: "Smartwatch",
					image: "/assets/images/smartwatch.jpg?height=80&width=80",
					quantity: 1,
					price: 1499.99,
				},
			],
		},
	];

	return orders;
};

export const getUserCart = async () => {
	// Mock data for cart with more details
	const carts = [
		{
			id: 1,
			name: "4K OLED TV",
			price: 2299.99,
			quantity: 1,
			image: "/assets/images/4k_tv.jpg?height=100&width=100",
		},
		{
			id: 2,
			name: "Wireless Keyboard",
			price: 99.99,
			quantity: 1,
			image: "/assets/images/keyboard.jpg?height=100&width=100",
		},
	];

	return carts;
};

export const getAllProducts = async () => {
	// Mock data for electronics products
	const allProducts = [
		{
			id: 1,
			name: "4K OLED TV",
			price: 2299.99,
			image: "/assets/images/4k_tv.jpg?height=200&width=200",
			category: "televisions",
			location: "Nairobi",
			rating: 4.8,
			description:
				"Experience stunning visuals with our latest 4K OLED technology.",
		},
		{
			id: 2,
			name: "Gaming Laptop",
			price: 1599.99,
			image: "/assets/images/gaming_laptop.jpg?height=200&width=200",
			category: "computers",
			location: "Mombasa",
			rating: 4.6,
			description:
				"Powerful performance with high refresh rate display for gaming enthusiasts.",
		},
		{
			id: 3,
			name: "Wireless Headphones",
			price: 299.99,
			image: "/assets/images/headphones.jpg?height=200&width=200",
			category: "audio",
			location: "Kisumu",
			rating: 4.7,
			description:
				"Immerse yourself in high-quality sound with noise-cancellation.",
		},
		{
			id: 4,
			name: "Smartphone",
			price: 999.99,
			image: "/assets/images/smartphone.jpg?height=200&width=200",
			category: "phones",
			location: "Nakuru",
			rating: 4.5,
			description: "Advanced smartphone with excellent camera and performance.",
		},
		{
			id: 5,
			name: "DSLR Camera",
			price: 1299.99,
			image: "/assets/images/camera.jpg?height=200&width=200",
			category: "cameras",
			location: "Eldoret",
			rating: 4.4,
			description:
				"Capture life’s moments with exceptional clarity and detail.",
		},
		{
			id: 6,
			name: "Smartwatch",
			price: 249.99,
			image: "/assets/images/smartwatch.jpg?height=200&width=200",
			category: "wearables",
			location: "Thika",
			rating: 4.3,
			description:
				"Stay connected and track your fitness with our latest smartwatch.",
		},
	];

	return allProducts;
};

export const getCategories = async () => {
	const categories = [
		{
			name: "All",
			value: "all",
			icon: Grid,
		},
		{
			name: "Televisions",
			value: "televisions",
			icon: Tv,
		},
		{
			name: "Computers",
			value: "computers",
			icon: Cpu,
		},
		{
			name: "Audio",
			value: "audio",
			icon: Headphones,
		},
		{
			name: "Phones",
			value: "phones",
			icon: Smartphone,
		},
		{
			name: "Cameras",
			value: "cameras",
			icon: Camera,
		},
		{
			name: "Wearables",
			value: "wearables",
			icon: Watch,
		},
	];

	return categories;
};
