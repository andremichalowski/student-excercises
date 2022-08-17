import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CampsitesList from "./features/campsites/CampsitesList";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <CampsitesList />
      <h1> Test </h1>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
