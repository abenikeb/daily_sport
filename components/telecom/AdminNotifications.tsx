"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Notification } from "./AdminDashboard";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, AlertCircle } from "lucide-react";

interface AdminNotificationsProps {
	notifications: Notification[];
	onApproval: (notificationId: number, approved: boolean) => void;
}

export function AdminNotifications({
	notifications,
	onApproval,
}: AdminNotificationsProps) {
	const [selectedNotification, setSelectedNotification] =
		useState<Notification | null>(null);

	const handleNotificationClick = (notification: Notification) => {
		setSelectedNotification(notification);
	};

	const handleApproval = (approved: boolean) => {
		if (selectedNotification) {
			onApproval(selectedNotification.id, approved);
			setSelectedNotification(null);
		}
	};

	const getStatusColor = (status: string) => {
		switch (status) {
			case "approved":
				return "bg-green-500";
			case "rejected":
				return "bg-red-500";
			default:
				return "bg-yellow-500";
		}
	};

	const getStatusIcon = (status: string) => {
		switch (status) {
			case "approved":
				return <CheckCircle className="w-4 h-4" />;
			case "rejected":
				return <XCircle className="w-4 h-4" />;
			default:
				return <AlertCircle className="w-4 h-4" />;
		}
	};

	return (
		<div>
			<ScrollArea className="h-[400px] rounded-md border p-4">
				{notifications.map((notification) => (
					<div
						key={notification.id}
						className="p-4 border-b last:border-b-0 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
						onClick={() => handleNotificationClick(notification)}>
						<div className="flex justify-between items-center">
							<h3 className="font-semibold text-lg">
								{notification.MusicName}
							</h3>
							<Badge
								className={`${getStatusColor(notification.status)} text-white`}>
								{getStatusIcon(notification.status)}
								<span className="ml-1">{notification.status}</span>
							</Badge>
						</div>
						<p className="text-sm text-gray-600">
							Provider: {notification.providerName}
						</p>
						<p className="text-sm text-gray-500 mt-2">
							{new Date(notification.timestamp).toLocaleString()}
						</p>
					</div>
				))}
			</ScrollArea>
			{selectedNotification && (
				<Dialog
					open={!!selectedNotification}
					onOpenChange={() => setSelectedNotification(null)}>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>{selectedNotification.MusicName}</DialogTitle>
							<DialogDescription>
								Submitted by {selectedNotification.providerName}
							</DialogDescription>
						</DialogHeader>
						<div className="py-4">
							<p className="mb-2">
								<strong>Flash Message:</strong>{" "}
								{selectedNotification.flashMessage}
							</p>
							<p className="mb-2">
								<strong>Submitted:</strong>{" "}
								{new Date(selectedNotification.timestamp).toLocaleString()}
							</p>
							<p>
								<strong>Status:</strong>{" "}
								<Badge
									className={`${getStatusColor(
										selectedNotification.status
									)} text-white`}>
									{getStatusIcon(selectedNotification.status)}
									<span className="ml-1">{selectedNotification.status}</span>
								</Badge>
							</p>
						</div>
						{selectedNotification.status === "pending" && (
							<div className="flex justify-end space-x-2">
								<Button variant="outline" onClick={() => handleApproval(false)}>
									<XCircle className="w-4 h-4 mr-2" />
									Reject
								</Button>
								<Button onClick={() => handleApproval(true)}>
									<CheckCircle className="w-4 h-4 mr-2" />
									Approve
								</Button>
							</div>
						)}
					</DialogContent>
				</Dialog>
			)}
		</div>
	);
}
