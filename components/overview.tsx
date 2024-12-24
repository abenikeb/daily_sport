"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
	{
		name: "Jan",
		total: 1500000,
	},
	{
		name: "Feb",
		total: 1800000,
	},
	{
		name: "Mar",
		total: 2200000,
	},
	{
		name: "Apr",
		total: 2600000,
	},
	{
		name: "May",
		total: 3100000,
	},
	{
		name: "Jun",
		total: 3500000,
	},
	{
		name: "Jul",
		total: 3800000,
	},
];

export function Overview() {
	return (
		<ResponsiveContainer width="100%" height={350}>
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
				<Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
			</BarChart>
		</ResponsiveContainer>
	);
}
