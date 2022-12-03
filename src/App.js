import MyBalance from "./components/MyBalance";
import Last7Days from "./components/Last7Days";
import TotalThisMonth from "./components/TotalThisMonth";
import DetailsContainer from "./components/DetailsContainer";

function App() {
  return (
    <div className="wrapper">
      <div className="vertical-center">
        <div className="App">
          <MyBalance />
          <DetailsContainer>
            <Last7Days />
            <TotalThisMonth />
          </DetailsContainer>
        </div>
      </div>
    </div>
  );
}

export default App;
