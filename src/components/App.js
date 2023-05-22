import Homepage from "../pages/Homepage";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../query";

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
