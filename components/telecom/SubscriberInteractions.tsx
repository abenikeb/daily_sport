import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Subscriber } from "./AdminDashboard";
import { User, Mail, PlayCircle, Award } from "lucide-react";

interface SubscriberInteractionsProps {
	subscribers: Subscriber[];
}

export function SubscriberInteractions({
	subscribers,
}: SubscriberInteractionsProps) {
	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead className="w-[200px]">Name</TableHead>
					<TableHead>Email</TableHead>
					<TableHead className="text-center">Total Listens</TableHead>
					<TableHead className="text-center">Rewards</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{subscribers.map((subscriber) => (
					<TableRow key={subscriber.id}>
						<TableCell className="font-medium">
							<div className="flex items-center">
								<User className="w-4 h-4 mr-2 text-gray-500" />
								{subscriber.name}
							</div>
						</TableCell>
						<TableCell>
							<div className="flex items-center">
								<Mail className="w-4 h-4 mr-2 text-gray-500" />
								{subscriber.email}
							</div>
						</TableCell>
						<TableCell className="text-center">
							<div className="flex items-center justify-center">
								<PlayCircle className="w-4 h-4 mr-2 text-gray-500" />
								{subscriber.totalListens.toLocaleString()}
							</div>
						</TableCell>
						<TableCell className="text-center">
							<div className="flex items-center justify-center">
								<Award className="w-4 h-4 mr-2 text-gray-500" />
								{subscriber.rewards}
							</div>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
