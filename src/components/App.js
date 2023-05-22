import Homepage from "../pages/Homepage";
import {
  QueryCache,
  QueryClientProvider,
  ReactQueryCacheProvider,
} from "react-query";
import { queryCache, queryClient } from "../query";

function App() {
  return (
    // <ReactQueryCacheProvider queryCache={queryCache}>
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Homepage />
      </div>
    </QueryClientProvider>
  );
}

export default App;
