import { Suspense } from "react";
import { Repo } from "../components/Repo";
import { Todo } from "../components/Todo";
import { User } from "../components/User";

//revalidar a página inteira a cada 30 s
export const revalidate = 30;

export default async function App() {
return (
	<h1>
		<h1>
			Home
		</h1>
		{/* suspense api serve para páginas que demandam mais tempo para carregar, carrega separadamente ela */}
		<Suspense fallback={<p>Carregando todos</p>}>
		{/* @ts-expect-error Async Server Component */}
		<Todo/>
		</Suspense>

		{/* componentes asincronos agora são chamadas simultaneas */}
		{/* @ts-expect-error Async Server Component */}
		<User/>
		{/* @ts-expect-error Async Server Component */}
		<Repo/>

	</h1>
)
}
