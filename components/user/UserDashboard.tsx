"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function UserDashboard() {
	const [isSubscribed, setIsSubscribed] = useState(false);

	const handleSubscribe = () => {
		// In a real app, this would call an API to subscribe the user
		setIsSubscribed(true);
	};

	return (
		<div className="space-y-4">
			{!isSubscribed ? (
				<div>
					<Input type="email" placeholder="Enter your email" className="mb-2" />
					<Button onClick={handleSubscribe}>Subscribe</Button>
				</div>
			) : (
				<div>
					<p className="text-green-600 mb-2">You are subscribed!</p>
					<Button variant="outline">Browse Music</Button>
				</div>
			)}
		</div>
	);
}
