import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Notification } from "./AdminDashboard";

interface MusicApprovalListProps {
	notifications: Notification[];
	onApproval: (notificationId: number, approved: boolean) => void;
}

export function MusicApprovalList({
	notifications,
	onApproval,
}: MusicApprovalListProps) {
	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>ad Name</TableHead>
					<TableHead>Provider</TableHead>
					<TableHead>Flash Message</TableHead>
					<TableHead>Submitted</TableHead>
					<TableHead>Actions</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{notifications.map((notification) => (
					<TableRow key={notification.id}>
						<TableCell>{notification.MusicName}</TableCell>
						<TableCell>{notification.providerName}</TableCell>
						<TableCell>{notification.flashMessage}</TableCell>
						<TableCell>
							{new Date(notification.timestamp).toLocaleString()}
						</TableCell>
						<TableCell>
							<div className="flex space-x-2">
								<Button
									variant="outline"
									size="sm"
									onClick={() => onApproval(notification.id, false)}>
									Reject
								</Button>
								<Button
									size="sm"
									onClick={() => onApproval(notification.id, true)}>
									Approve
								</Button>
							</div>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
