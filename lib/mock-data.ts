type Member = {
	id: number;
	fullName: string;
	gender: string;
	currentSalary: number;
	dateAndMonth: string;
	joinedDate: string;
	employId: string;
	phone: string;
	memberType: string;
};

export const mockMembersData: { [key: string]: Member[] } = {
	"2024-04": [
		{
			id: 1,
			fullName: "Abebe Bekele",
			gender: "Male",
			currentSalary: 5000,
			dateAndMonth: "2024-04-15",
			joinedDate: "2022-01-10",
			employId: "EMP001",
			phone: "+251911234567",
			memberType: "Mandatory Saving",
		},
		{
			id: 2,
			fullName: "Tigist Mengistu",
			gender: "Female",
			currentSalary: 4500,
			dateAndMonth: "2024-04-20",
			joinedDate: "2021-11-05",
			employId: "EMP002",
			phone: "+251922345678",
			memberType: "Willing Saving",
		},
	],
	"2024-05": [
		{
			id: 3,
			fullName: "Dawit Tadesse",
			gender: "Male",
			currentSalary: 6000,
			dateAndMonth: "2024-05-10",
			joinedDate: "2022-03-20",
			employId: "EMP003",
			phone: "+251933456789",
			memberType: "Mandatory Non-Interest Saving",
		},
		{
			id: 4,
			fullName: "Hiwot Gebremariam",
			gender: "Female",
			currentSalary: 5500,
			dateAndMonth: "2024-05-25",
			joinedDate: "2021-09-15",
			employId: "EMP004",
			phone: "+251944567890",
			memberType: "Willing Non-Interest Saving",
		},
	],
	"2024-06": [
		{
			id: 5,
			fullName: "Yohannes Alemu",
			gender: "Male",
			currentSalary: 4800,
			dateAndMonth: "2024-06-05",
			joinedDate: "2022-02-28",
			employId: "EMP005",
			phone: "+251955678901",
			memberType: "Mandatory Saving",
		},
		{
			id: 6,
			fullName: "Meron Haile",
			gender: "Female",
			currentSalary: 5200,
			dateAndMonth: "2024-06-12",
			joinedDate: "2024-01-15",
			employId: "EMP006",
			phone: "+251966789012",
			memberType: "Willing Saving",
		},
	],
};

export const mockMemberSavings = [
	{
		id: 1,
		memberId: "EMP001",
		memberName: "Abebe Bekele",
		savingType: "Regular",
		amount: 1000,
		date: "2024-06-15",
		balance: 5000,
		interestRate: 2.5,
	},
	{
		id: 2,
		memberId: "EMP002",
		memberName: "Tigist Mengistu",
		savingType: "Fixed Deposit",
		amount: 5000,
		date: "2024-05-20",
		balance: 15000,
		interestRate: 4.0,
	},
	{
		id: 3,
		memberId: "EMP003",
		memberName: "Dawit Tadesse",
		savingType: "Regular",
		amount: 800,
		date: "2024-06-10",
		balance: 3500,
		interestRate: 2.5,
	},
	{
		id: 4,
		memberId: "EMP004",
		memberName: "Hiwot Gebremariam",
		savingType: "Fixed Deposit",
		amount: 10000,
		date: "2024-04-05",
		balance: 30000,
		interestRate: 4.5,
	},
	{
		id: 5,
		memberId: "EMP005",
		memberName: "Yohannes Alemu",
		savingType: "Regular",
		amount: 1200,
		date: "2024-06-18",
		balance: 6000,
		interestRate: 2.5,
	},
];

export const mockMemberLoans = [
	{
		id: 1,
		memberId: "EMP001",
		memberName: "Abebe Bekele",
		loanType: "Personal",
		amount: 10000,
		dateIssued: "2024-03-10",
		dueDate: "2024-03-10",
		interestRate: 8,
		status: "Active",
	},
	{
		id: 2,
		memberId: "EMP003",
		memberName: "Dawit Tadesse",
		loanType: "Business",
		amount: 50000,
		dateIssued: "2024-01-15",
		dueDate: "2025-01-15",
		interestRate: 10,
		status: "Active",
	},
	{
		id: 3,
		memberId: "EMP005",
		memberName: "Yohannes Alemu",
		loanType: "Education",
		amount: 15000,
		dateIssued: "2024-05-20",
		dueDate: "2024-05-20",
		interestRate: 6,
		status: "Active",
	},
	{
		id: 4,
		memberId: "EMP002",
		memberName: "Tigist Mengistu",
		loanType: "Personal",
		amount: 5000,
		dateIssued: "2022-11-01",
		dueDate: "2024-11-01",
		interestRate: 8,
		status: "Paid",
	},
	{
		id: 5,
		memberId: "EMP004",
		memberName: "Hiwot Gebremariam",
		loanType: "Business",
		amount: 30000,
		dateIssued: "2024-02-28",
		dueDate: "2024-02-28",
		interestRate: 10,
		status: "Active",
	},
];

export type SavingType = {
	id: number;
	name: string;
	contributionPercentage: number;
	contributionCycle: "Daily" | "Monthly" | "Yearly";
};

export const mockSavingTypes: SavingType[] = [
	{
		id: 1,
		name: "Mandatory Saving",
		contributionPercentage: 14.9,
		contributionCycle: "Monthly",
	},
	{
		id: 2,
		name: "Willing Saving",
		contributionPercentage: 3,
		contributionCycle: "Monthly",
	},
	{
		id: 3,
		name: "Mandatory Non-Interest Saving",
		contributionPercentage: 0,
		contributionCycle: "Monthly",
	},
	{
		id: 4,
		name: "Willing Non-Interest Saving",
		contributionPercentage: 0,
		contributionCycle: "Monthly",
	},
];

export type MemberSaving = {
	id: number;
	memberId: string;
	memberName: string;
	savingType: string;
	amount: number;
	willingSaving: number;
	date: string;
	balance: number;
	interestRate: number;
	currentSalary: number;
};

export const mockMemberSavingsData: { [key: string]: MemberSaving[] } = {
	"2024-04": [
		{
			id: 1,
			memberId: "EMP001",
			memberName: "Abebe Bekele",
			savingType: "Mandatory Saving",
			amount: 250,
			willingSaving: 0,
			date: "2024-04-15",
			balance: 5000,
			interestRate: 2.5,
			currentSalary: 5000,
		},
		{
			id: 2,
			memberId: "EMP002",
			memberName: "Tigist Mengistu",
			savingType: "Willing Saving",
			amount: 135,
			willingSaving: 0,
			date: "2024-04-20",
			balance: 15000,
			interestRate: 4.0,
			currentSalary: 4500,
		},
	],
	"2024-05": [
		{
			id: 3,
			memberId: "EMP003",
			memberName: "Dawit Tadesse",
			savingType: "Mandatory Non-Interest Saving",
			amount: 120,
			willingSaving: 0,
			date: "2024-05-10",
			balance: 3500,
			interestRate: 0,
			currentSalary: 6000,
		},
		{
			id: 4,
			memberId: "EMP004",
			memberName: "Hiwot Gebremariam",
			savingType: "Willing Non-Interest Saving",
			amount: 55,
			willingSaving: 0,
			date: "2024-05-25",
			balance: 30000,
			interestRate: 0,
			currentSalary: 5500,
		},
	],
	"2024-06": [
		{
			id: 5,
			memberId: "EMP005",
			memberName: "Yohannes Alemu",
			savingType: "Mandatory Saving",
			amount: 240,
			willingSaving: 0,
			date: "2024-06-05",
			balance: 6000,
			interestRate: 2.5,
			currentSalary: 4800,
		},
		{
			id: 6,
			memberId: "EMP006",
			memberName: "Meron Haile",
			savingType: "Willing Saving",
			amount: 156,
			willingSaving: 0,
			date: "2024-06-12",
			balance: 8000,
			interestRate: 4.0,
			currentSalary: 5200,
		},
	],
};

export const accountingData = {
	totalLoans: 1250000,
	totalTransactions: 3567,
	totalSavings: 890000,
	balance: 450000,
	expenses: 75000,
	deposits: [
		{ date: "2024-01-01", amount: 50000 },
		{ date: "2024-02-01", amount: 75000 },
		{ date: "2024-03-01", amount: 60000 },
		{ date: "2024-04-01", amount: 80000 },
		{ date: "2024-05-01", amount: 70000 },
		{ date: "2024-06-01", amount: 90000 },
	],
	transactions: [
		{
			id: 1,
			date: "2024-06-15",
			type: "Loan Disbursement",
			amount: 50000,
			description: "Loan to John Doe",
		},
		{
			id: 2,
			date: "2024-06-14",
			type: "Deposit",
			amount: 10000,
			description: "Savings deposit from Jane Smith",
		},
		{
			id: 3,
			date: "2024-06-13",
			type: "Repayment",
			amount: 5000,
			description: "Loan repayment from Alice Johnson",
		},
		{
			id: 4,
			date: "2024-06-12",
			type: "Expense",
			amount: 2000,
			description: "Office supplies",
		},
		{
			id: 5,
			date: "2024-06-11",
			type: "Deposit",
			amount: 15000,
			description: "Savings deposit from Bob Williams",
		},
	],
};
