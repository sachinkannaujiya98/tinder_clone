import "./App.css";
import Header from "./Header";
import SwipeButton from "./SwipeButton";
import TinderCards from "./TinderCards";

function App() {
  return (
    <div className="App">
      {/* header */}
      <Header />
      <TinderCards />
      <SwipeButton />
    </div>
  );
}

export default App;
