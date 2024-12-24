"use client";

import {
	Bar,
	BarChart,
	ResponsiveContainer,
	XAxis,
	YAxis,
	Tooltip,
} from "recharts";

const data = [
	{
		name: "Regular",
		amount: 15000000,
	},
	{
		name: "Fixed",
		amount: 25000000,
	},
	{
		name: "Recurring",
		amount: 10000000,
	},
	{
		name: "Group",
		amount: 5000000,
	},
];

export function SavingsOverview() {
	return (
		<ResponsiveContainer width="100%" height={300}>
			<BarChart data={data}>
				<XAxis
					dataKey="name"
					stroke="#888888"
					fontSize={12}
					tickLine={false}
					axisLine={false}
				/>
				<YAxis
					stroke="#888888"
					fontSize={12}
					tickLine={false}
					axisLine={false}
					tickFormatter={(value) => `${value / 1000000}M`}
				/>
				<Tooltip />
				<Bar dataKey="amount" fill="#8884d8" radius={[4, 4, 0, 0]} />
			</BarChart>
		</ResponsiveContainer>
	);
}
