"use client";

import {
	PieChart,
	Pie,
	Cell,
	ResponsiveContainer,
	Legend,
	Tooltip,
} from "recharts";

const data = [
	{ name: "Active Loans", value: 5678 },
	{ name: "Fully Repaid", value: 3456 },
	{ name: "Savings Only", value: 3212 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

export function MemberStats() {
	return (
		<ResponsiveContainer width="100%" height={300}>
			<PieChart>
				<Pie
					data={data}
					cx="50%"
					cy="50%"
					labelLine={false}
					outerRadius={80}
					fill="#8884d8"
					dataKey="value">
					{data.map((entry, index) => (
						<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
					))}
				</Pie>
				<Tooltip />
				<Legend />
			</PieChart>
		</ResponsiveContainer>
	);
}
