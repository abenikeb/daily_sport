"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	ChevronDown,
	LayoutDashboard,
	Users,
	PiggyBank,
	ArrowDownCircle,
	Banknote,
	Calculator,
	FileText,
	RefreshCcw,
	UserCog,
	ChevronLeftCircle,
	ChevronRightCircle,
	Menu,
} from "lucide-react";

import { cn } from "@/lib/utils";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
	useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";

const menuItems = [
	{
		title: "Dashboard",
		icon: LayoutDashboard,
		href: "/admin",
		submenu: [
			{ title: "Overview", href: "/admin" },
			{ title: "Analytics", href: "/admin/analytics" },
			{ title: "Reports", href: "/admin/reports" },
		],
	},
	{
		title: "Customer",
		icon: Users,
		href: "/admin/customer",
		submenu: [
			{ title: "Members", href: "/admin/customer/members" },
			{ title: "Add Member", href: "/admin/customer/add-member" },
		],
	},
	{
		title: "Saving",
		icon: PiggyBank,
		href: "/admin/saving",
		submenu: [
			{ title: "Saving Types", href: "/admin/saving/type" },
			{ title: "Member Saving", href: "/admin/saving/member" },
		],
	},
	{
		title: "Withdraw",
		icon: ArrowDownCircle,
		href: "/admin/withdraw",
		submenu: [{ title: "Member Withdraw", href: "/admin/withdraw/member" }],
	},
	{
		title: "Loan",
		icon: Banknote,
		href: "/admin/loan",
		submenu: [
			{ title: "Loan Type", href: "/admin/loan/type" },
			{ title: "Member Loan", href: "/admin/loan/member" },
			{ title: "Loan Agreement Form", href: "/admin/loan/agreement" },
		],
	},
	{
		title: "Accounting",
		icon: Calculator,
		href: "/admin/accounting/main",
		submenu: [
			{ title: "Accounting", href: "/admin/accounting/main" },
			{ title: "Transaction", href: "/admin/accounting/transaction" },
		],
	},
	{
		title: "Expense",
		icon: FileText,
		href: "/admin/expense",
		submenu: [{ title: "Expense List", href: "/admin/expense/list" }],
	},
	{
		title: "Repayment",
		icon: RefreshCcw,
		href: "/admin/repayment",
		submenu: [
			{ title: "Repayment Schedule", href: "/admin/repayment/schedule" },
		],
	},
	{
		title: "User Role",
		icon: UserCog,
		href: "/admin/user-role",
		submenu: [{ title: "Manage Roles", href: "/admin/user-role/manage" }],
	},
];

export function AdminSidebar() {
	const pathname = usePathname();
	const { toggleSidebar, open } = useSidebar();
	const [activeMenu, setActiveMenu] = React.useState<string | null>(null);

	return (
		<Sidebar className="border-r bg-gradient-to-b from-orange-100 to-orange-50 transition-all duration-300 ease-in-out">
			<SidebarHeader className="flex flex-col items-center justify-between p-4">
				<Link
					href="/admin"
					className={cn(
						"flex items-center space-x-2 mb-4",
						open ? "" : "justify-center"
					)}>
					<div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
						<span className="text-2xl font-bold text-white">MF</span>
					</div>
					<span
						className={cn(
							"text-2xl font-bold text-orange-600 transition-all",
							open ? "" : "scale-0 w-0"
						)}>
						MicroFin
					</span>
				</Link>
				<Button
					variant="ghost"
					size="icon"
					className="text-orange-600 hover:bg-orange-200 transition-colors duration-200"
					onClick={toggleSidebar}>
					{open ? (
						<ChevronLeftCircle className="h-6 w-6" />
					) : (
						<ChevronRightCircle className="h-6 w-6" />
					)}
				</Button>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu>
							{menuItems.map((item) => (
								<SidebarMenuItem key={item.title}>
									<Collapsible>
										<CollapsibleTrigger asChild>
											<SidebarMenuButton
												className={cn(
													"w-full justify-between text-orange-800 hover:bg-orange-200 hover:text-orange-600 transition-colors duration-200",
													pathname.startsWith(item.href) &&
														"bg-orange-200 text-orange-600 font-semibold"
												)}>
												<div className="flex items-center">
													<item.icon className="mr-2 h-5 w-5" />
													<span
														className={cn(
															"transition-all duration-200",
															open ? "" : "w-0 scale-0"
														)}>
														{item.title}
													</span>
												</div>
												<ChevronDown
													className={cn(
														"h-4 w-4 transition-transform duration-200",
														activeMenu === item.title ? "rotate-180" : ""
													)}
												/>
											</SidebarMenuButton>
										</CollapsibleTrigger>
										<CollapsibleContent>
											<SidebarMenuSub>
												{item.submenu.map((subItem) => (
													<SidebarMenuSubItem key={subItem.title}>
														<SidebarMenuSubButton
															asChild
															isActive={pathname === subItem.href}
															className={cn(
																"pl-10 text-orange-700 hover:bg-orange-200 hover:text-orange-600 transition-colors duration-200",
																pathname === subItem.href &&
																	"bg-orange-200 text-orange-600 font-semibold"
															)}>
															<Link href={subItem.href}>
																<span
																	className={cn(
																		"transition-all duration-200",
																		open ? "" : "w-0 scale-0"
																	)}>
																	{subItem.title}
																</span>
															</Link>
														</SidebarMenuSubButton>
													</SidebarMenuSubItem>
												))}
											</SidebarMenuSub>
										</CollapsibleContent>
									</Collapsible>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
