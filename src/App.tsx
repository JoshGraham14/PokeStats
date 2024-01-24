import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'

function App() {
	const queryClient = new QueryClient()

	return (
		<QueryClientProvider client={queryClient}>
			<h1>PokeStats</h1>
		</QueryClientProvider>
	)
}

export default App
