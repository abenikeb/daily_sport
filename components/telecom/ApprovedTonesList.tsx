"use client";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Music, User, PlayCircle } from "lucide-react";
import { useState } from "react";

export function ApprovedMusicsList() {
	const [approvedListMusics, setApprovedMusics] = useState<any[]>([
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
			providerName: "ad Co.",
			status: "approved",
			plays: 7500,
		},
	]);

	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead className="w-[300px]">Ad Name</TableHead>
					<TableHead>Provider</TableHead>
					<TableHead>Status</TableHead>
					<TableHead className="text-right">Total Plays</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{approvedListMusics.map((music) => (
					<TableRow key={music.id}>
						<TableCell className="font-medium">
							<div className="flex items-center">
								<Music className="w-4 h-4 mr-2 text-gray-500" />
								{music.name}
							</div>
						</TableCell>
						<TableCell>
							<div className="flex items-center">
								<User className="w-4 h-4 mr-2 text-gray-500" />
								{music.providerName}
							</div>
						</TableCell>
						<TableCell>
							<Badge
								variant="outline"
								className="bg-green-50 text-green-700 border-green-200">
								{music.status}
							</Badge>
						</TableCell>
						<TableCell className="text-right">
							<div className="flex items-center justify-end">
								<PlayCircle className="w-4 h-4 mr-2 text-gray-500" />
								{music.plays.toLocaleString()}
							</div>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
