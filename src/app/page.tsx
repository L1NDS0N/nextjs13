import Link from 'next/link';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export default function App() {
	const router = useRouter();
	// em páginas cacheadas
	router.refresh();

	function submit() {
		router.push('/');
	}


	return (
		<html>
			<body>
				<h1>Home</h1>
				<Link href={'/dashboard'}> Dashbaord</Link>
			</body>
		</html>
	);
}
