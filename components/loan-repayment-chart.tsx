"use client";

import {
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

const data = [
	{
		month: "Jan",
		repayment: 2500000,
		expected: 3000000,
	},
	{
		month: "Feb",
		repayment: 2800000,
		expected: 3100000,
	},
	{
		month: "Mar",
		repayment: 3200000,
		expected: 3200000,
	},
	{
		month: "Apr",
		repayment: 3500000,
		expected: 3300000,
	},
	{
		month: "May",
		repayment: 3700000,
		expected: 3400000,
	},
	{
		month: "Jun",
		repayment: 3900000,
		expected: 3500000,
	},
];

export function LoanRepaymentChart() {
	return (
		<ResponsiveContainer width="100%" height={350}>
			<LineChart data={data}>
				<XAxis
					dataKey="month"
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
				<Line
					type="monotone"
					dataKey="repayment"
					stroke="#8884d8"
					activeDot={{ r: 8 }}
				/>
				<Line type="monotone" dataKey="expected" stroke="#82ca9d" />
			</LineChart>
		</ResponsiveContainer>
	);
}
