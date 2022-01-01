import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import Example from './components/ReactQueryExample/Example';
import Pagination from './components/ReactQueryExample/Pagination';
import QuickStart from './components/ReactQueryExample/QuickStart';
// import Cache from './components/SWRExample/Cache';
// import Fetcher from './components/SWRExample/Fetcher';
// import Mutate from './components/SWRExample/Mutate';
// import Pagination from './components/SWRExample/Pagination';
// import Profile from './components/SWRExample/Profile';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      {/* <Profile />
      <Cache /> */}
      {/* <Fetcher /> */}
      {/* <Mutate />
      <Pagination /> */}

      <QueryClientProvider client={queryClient}>
        <Example />
        <QuickStart />
        <Pagination />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </div>
  );
}

export default App;
