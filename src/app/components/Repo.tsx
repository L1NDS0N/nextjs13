import Link from "next/link";

export async function Repo(){
    	//server-side first
	// requisição feitas pelo server-side
	//feita em tempo de build
	//static	
	const response = await fetch('https://api.github.com/users/l1nds0n/repos', {
		// 'force-cache' = mesmo cache para todos
		// no-store = não quero armazenar em cache global para todos usuarios, cada um tem seu cache
		cache: 'force-cache',
		// revalida apenas a chamada a cada 30s
		next: {
			revalidate: 30,
		}
	});
	const data = await response.json();

	return (
		<div>
			<h3>Repo component</h3>
			<pre>{JSON.stringify(data, null, 2)}</pre>
			<Link href="/dashboard">Dashboard</Link>
		</div>
	);

}