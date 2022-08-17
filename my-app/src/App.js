import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SpacesList from "./features/spaces/SpacesList";

function App() {
  return (
    <div className="App">
      <Header />
      <SpacesList />
      <Footer />
    </div>
  );
}

export default App;
