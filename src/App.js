import MyBalance from "./components/MyBalance";
import Last7Days from "./components/Last7Days";
import TotalThisMonth from "./components/TotalThisMonth";
import DetailsContainer from "./components/DetailsContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyBalance />
        <DetailsContainer>
          <Last7Days />
          <TotalThisMonth />
        </DetailsContainer>
      </header>
    </div>
  );
}

export default App;
