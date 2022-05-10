import logo from "./logo.svg";
import "./App.css";
import CounterClick from "./CounterClick";
import CounterHover from "./CounterHover";
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      {/* <CounterClick /> */}
      {/* <CounterHover /> */}
      <Counter
        render={(counter, plusHandler, minusHandler) => (
          <CounterClick
            counter={counter}
            plusHandler={plusHandler}
            minusHandler={minusHandler}
          />
        )}
      />
      <Counter
        render={(counter, plusHandler, minusHandler) => (
          <CounterHover
            counter={counter}
            plusHandler={plusHandler}
            minusHandler={minusHandler}
          />
        )}
      />
    </div>
  );
}

export default App;
