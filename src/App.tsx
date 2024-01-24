import { QueryClient, QueryClientProvider } from 'react-query'
import { SearchBar } from './components/SearchBar/SearchBar'
import './App.css'

function App() {
	const queryClient = new QueryClient()

	return (
		<QueryClientProvider client={queryClient}>
			<h1>PokeStats</h1>
			<SearchBar />
		</QueryClientProvider>
	)
}

export default App
