import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MusicProvider } from "./AdminDashboard";
import {
	User,
	Mail,
	Music,
	CheckCircle,
	AlertTriangle,
	XCircle,
} from "lucide-react";

interface MusicProviderAccountsProps {
	providers: MusicProvider[];
}

export function MusicProviderAccounts({
	providers,
}: MusicProviderAccountsProps) {
	const handleStatusChange = (
		providerId: number,
		newStatus: "active" | "suspended"
	) => {
		// In a real application, you would update the provider's status in the backend
		console.log(`Changing status of provider ${providerId} to ${newStatus}`);
	};

	const getStatusBadge = (status: string) => {
		switch (status) {
			case "active":
				return (
					<Badge
						variant="outline"
						className="bg-green-50 text-green-700 border-green-200">
						<CheckCircle className="w-3 h-3 mr-1" />
						Active
					</Badge>
				);
			case "suspended":
				return (
					<Badge
						variant="outline"
						className="bg-red-50 text-red-700 border-red-200">
						<XCircle className="w-3 h-3 mr-1" />
						Suspended
					</Badge>
				);
			default:
				return (
					<Badge
						variant="outline"
						className="bg-yellow-50 text-yellow-700 border-yellow-200">
						<AlertTriangle className="w-3 h-3 mr-1" />
						Pending
					</Badge>
				);
		}
	};

	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead className="w-[200px]">Name</TableHead>
					<TableHead>Email</TableHead>
					<TableHead>Status</TableHead>
					<TableHead className="text-center">Total ads</TableHead>
					<TableHead className="text-center">Approved ads</TableHead>
					<TableHead className="text-right">Actions</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{providers.map((provider) => (
					<TableRow key={provider.id}>
						<TableCell className="font-medium">
							<div className="flex items-center">
								<User className="w-4 h-4 mr-2 text-gray-500" />
								{provider.name}
							</div>
						</TableCell>
						<TableCell>
							<div className="flex items-center">
								<Mail className="w-4 h-4 mr-2 text-gray-500" />
								{provider.email}
							</div>
						</TableCell>
						<TableCell>{getStatusBadge(provider.status)}</TableCell>
						<TableCell className="text-center">
							<div className="flex items-center justify-center">
								<Music className="w-4 h-4 mr-2 text-gray-500" />
								{provider.totalMusics}
							</div>
						</TableCell>
						<TableCell className="text-center">
							<div className="flex items-center justify-center">
								<CheckCircle className="w-4 h-4 mr-2 text-gray-500" />
								{provider.approvedMusics}
							</div>
						</TableCell>
						<TableCell className="text-right">
							{provider.status === "active" ? (
								<Button
									variant="destructive"
									size="sm"
									onClick={() => handleStatusChange(provider.id, "suspended")}>
									<XCircle className="w-4 h-4 mr-2" />
									Suspend
								</Button>
							) : provider.status === "suspended" ? (
								<Button
									variant="outline"
									size="sm"
									onClick={() => handleStatusChange(provider.id, "active")}>
									<CheckCircle className="w-4 h-4 mr-2" />
									Activate
								</Button>
							) : (
								<Button
									variant="outline"
									size="sm"
									onClick={() => handleStatusChange(provider.id, "active")}>
									<CheckCircle className="w-4 h-4 mr-2" />
									Approve
								</Button>
							)}
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
