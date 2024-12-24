"use server";
import axios from "axios";
import { BASE_URL } from "./config/constants";

export async function authenticateUser(phone: any) {
	try {
		const { data: user } = await axios.post(
			`${BASE_URL}/social-login`,
			{
				phone: phone,
				name: "User",
				image: "image",
				type: "credential",
			},
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		// Check if the user data exists and has a valid code
		if (user && user.original) {
			return {
				id: user.original.id || 2,
				code: user.original.code,
				name: user.original.user_name,
				phone: user.original.phone,
			};
		}
	} catch (error) {
		console.error("Error during user authentication:", error);
	}

	return null;
}

export async function checkUser(phone: any) {
	try {
		const { data: user } = await axios.post(
			`${BASE_URL}/social-login`,
			{
				phone: phone,
				name: "User",
				image: "image",
				type: "credential",
			},
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		if (user && user.original) {
			return {
				id: user.original.id || 2,
				code: user.original.code,
				name: user.original.user_name,
				phone: user.original.phone,
			};
		}
	} catch (error) {
		console.error("Error during user authentication:", error);
	}

	return null;
}
