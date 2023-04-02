interface AppLayoutProps {
    children: React.ReactNode;
}
export default function AppLayout({children}: AppLayoutProps) {
	return (
		<>
			<h1>App</h1>
            {children}
		</>
	);
}
