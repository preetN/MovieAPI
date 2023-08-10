import Header from "./components/Header";
import Like from "./components/Like";
import Searchbar from "./components/Searchbar";
import Display from "./components/Display";

function App() {
  return (
    <div className="bg-dark pt-3 min-vh-100">
      <Header />
      <Searchbar />
      <Display />
      <Like />
    </div>
  );
}

export default App;
