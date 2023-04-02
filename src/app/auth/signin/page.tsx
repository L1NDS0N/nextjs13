import Link from 'next/link';

export default function Auth() {
	return (
		<>
			<h1>SignIn</h1>
			<Link href={'/app'}> Dashboard</Link>
		</>
	);
}
