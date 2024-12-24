import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Nav() {
	return (
		<nav className="flex justify-between items-center p-4 bg-background">
			<Link href="/" className="text-2xl font-bold">
				MicroFin
			</Link>
			<div>
				<Button asChild variant="ghost" className="mr-2">
					<Link href="/dashboard">Dashboard</Link>
				</Button>
				<Button asChild variant="ghost" className="mr-2">
					<Link href="/loans">Loans</Link>
				</Button>
				<Button asChild variant="ghost">
					<Link href="/savings">Savings</Link>
				</Button>
			</div>
		</nav>
	);
}
