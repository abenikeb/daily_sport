"use client";

import { useState } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AdminNotifications } from "./AdminNotifications";
import { MusicApprovalList } from "./ToneApprovalList";
import { ApprovedMusicsList } from "./ApprovedTonesList";
import { SubscriberInteractions } from "./SubscriberInteractions";
import { MusicProviderAccounts } from "./MusicProviderAccounts";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

import { Bell, CheckCircle, Music, Users, Briefcase } from "lucide-react";

export interface Notification {
	id: number;
	providerId: number;
	providerName: string;
	MusicId: number;
	MusicName: string;
	flashMessage: string;
	status: "pending" | "approved" | "rejected";
	timestamp: string;
}

export interface Music {
	id: number;
	name: string;
	providerId: number;
	providerName: string;
	status: "approved" | "rejected";
	plays: number;
}

export interface Subscriber {
	id: number;
	name: string;
	email: string;
	totalListens: number;
	rewards: number;
}

export interface MusicProvider {
	id: number;
	name: string;
	email: string;
	status: "active" | "suspended" | "pending";
	totalMusics: number;
	approvedMusics: number;
}

export function AdminDashboard() {
	const [notifications, setNotifications] = useState<Notification[]>([
		{
			id: 1,
			providerId: 1,
			providerName: "ad Co.",
			MusicId: 1,
			MusicName: "Champaign #1",
			flashMessage: "Feel the heat!",
			status: "pending",
			timestamp: "2024-12-15T10:30:00Z",
		},
		{
			id: 2,
			providerId: 2,
			providerName: "Beats Inc.",
			MusicId: 2,
			MusicName: "Champaign #5",
			flashMessage: "Subscribe the channel",
			status: "pending",
			timestamp: "2024-12-15T11:45:00Z",
		},
		{
			id: 3,
			providerId: 1,
			providerName: "ad Co.",
			MusicId: 3,
			MusicName: "Champaign #8",
			flashMessage: "Get moving!",
			status: "pending",
			timestamp: "2024-12-15T14:20:00Z",
		},
	]);

	const [approvedListMusics, setApprovedMusics] = useState<Music[]>([
		{
			id: 4,
			name: "Champaign #6",
			providerId: 3,
			providerName: "Smooth Sounds",
			status: "approved",
			plays: 5000,
		},
		{
			id: 5,
			name: "Champaign #7",
			providerId: 1,
			providerName: "Ad Co.",
			status: "approved",
			plays: 7500,
		},
	]);

	const [subscribers, setSubscribers] = useState<Subscriber[]>([
		{
			id: 1,
			name: "Abebe Multe",
			email: "abebe@example.com",
			totalListens: 500,
			rewards: 50,
		},
		{
			id: 2,
			name: "Tilahun simon",
			email: "tile@example.com",
			totalListens: 750,
			rewards: 75,
		},
	]);

	const [musicProviders, setMusicProviders] = useState<MusicProvider[]>([
		{
			id: 1,
			name: "ad Co.",
			email: "contact@musicco.com",
			status: "active",
			totalMusics: 10,
			approvedMusics: 8,
		},
		{
			id: 2,
			name: "Beats Inc.",
			email: "info@beatsinc.com",
			status: "active",
			totalMusics: 5,
			approvedMusics: 3,
		},
		{
			id: 3,
			name: "Smooth Sounds",
			email: "hello@smoothsounds.com",
			status: "pending",
			totalMusics: 2,
			approvedMusics: 1,
		},
	]);

	const handleApproval = (notificationId: number, approved: boolean) => {
		setNotifications(
			notifications.map((notif) =>
				notif.id === notificationId
					? { ...notif, status: approved ? "approved" : "rejected" }
					: notif
			)
		);

		if (approved) {
			const approvedNotification = notifications.find(
				(n) => n.id === notificationId
			);
			if (approvedNotification) {
				setApprovedMusics([
					...approvedListMusics,
					{
						id: approvedNotification.MusicId,
						name: approvedNotification.MusicName,
						providerId: approvedNotification.providerId,
						providerName: approvedNotification.providerName,
						status: "approved",
						plays: 0,
					},
				]);
			}
		}
	};

	const router = useRouter();

	return (
		<Tabs defaultValue="notifications" className="space-y-6">
			<TabsList className="grid w-full grid-cols-5 gap-4">
				<TabsTrigger
					value="notifications"
					className="flex items-center justify-center">
					<Bell className="w-4 h-4 mr-2" />
					Notifications
				</TabsTrigger>
				<TabsTrigger
					value="approvals"
					className="flex items-center justify-center">
					<CheckCircle className="w-4 h-4 mr-2" />
					ad Approvals
				</TabsTrigger>
				<TabsTrigger
					value="approved-Musics"
					className="flex items-center justify-center">
					<Music className="w-4 h-4 mr-2" />
					Approved ads
				</TabsTrigger>
				<TabsTrigger
					value="subscribers"
					className="flex items-center justify-center">
					<Users className="w-4 h-4 mr-2" />
					Subscribers
				</TabsTrigger>
				<TabsTrigger
					value="providers"
					className="flex items-center justify-center">
					<Briefcase className="w-4 h-4 mr-2" />
					ad Providers
				</TabsTrigger>
			</TabsList>
			<TabsContent value="notifications">
				<Card>
					<CardHeader>
						<CardTitle className="flex items-center">
							<Bell className="w-6 h-6 mr-2" />
							Telecom Admin Notifications
						</CardTitle>
						<CardDescription>
							Review and manage new ad submissions
						</CardDescription>
					</CardHeader>
					<CardContent>
						<AdminNotifications
							notifications={notifications}
							onApproval={handleApproval}
						/>
					</CardContent>
				</Card>
			</TabsContent>
			<TabsContent value="approvals">
				<Card>
					<CardHeader>
						<CardTitle>ad Approval List</CardTitle>
						<CardDescription>Approve or reject submitted ads</CardDescription>
					</CardHeader>
					<CardContent>
						<MusicApprovalList
							notifications={notifications.filter(
								(n) => n.status === "pending"
							)}
							onApproval={handleApproval}
						/>
					</CardContent>
				</Card>
			</TabsContent>
			<TabsContent value="approved-Musics">
				<Card>
					<CardHeader>
						<CardTitle>Approved ads</CardTitle>
						<CardDescription>
							List of all approved ads and their status
						</CardDescription>
					</CardHeader>
					<CardContent>
						<ApprovedMusicsList />
					</CardContent>
				</Card>
			</TabsContent>
			<TabsContent value="subscribers">
				<Card>
					<CardHeader>
						<CardTitle>Subscriber Interactions</CardTitle>
						<CardDescription>
							Track subscriber activities and rewards
						</CardDescription>
					</CardHeader>
					<CardContent>
						<SubscriberInteractions subscribers={subscribers} />
					</CardContent>
				</Card>
			</TabsContent>
			<TabsContent value="providers">
				<Card>
					<CardHeader>
						<CardTitle>ad Provider Accounts</CardTitle>
						<CardDescription>
							Manage ad provider accounts and their status
						</CardDescription>
					</CardHeader>
					<CardContent>
						<MusicProviderAccounts providers={musicProviders} />
					</CardContent>
				</Card>
			</TabsContent>
		</Tabs>
	);
}
