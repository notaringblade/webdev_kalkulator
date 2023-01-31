import "./App.css";
import { useState } from "react";

function App() {

  const [_question, set_question] = useState("");
  const [errorText, setErrorText] = useState("");

  function util(u) {
    console.log(u);
    setErrorText("");
    if (u === "AC") {
      set_question("");
    } else if (u === "=") {
      try {
        set_question(eval(_question));
      } catch (e) {
        setErrorText("error");
      }
    } else if (u === "Del") {
      set_question(_question.substring(0, _question.length - 1));
    }
  }

  function setQuestion(q) {
    set_question(_question + q)
    setErrorText("");
    console.log(q);
  }

  return (
    <div className="App">
      <header className="App-header">
      <h1 >Kalkulator</h1>
        <div className="kalkulator">
          <div className="display">
            <h3 className="error-text">{errorText}</h3>
            <h1 className="main-text">{_question}</h1>
          </div>
          <div className="numbers">
            <div>
              <button onClick={() => util("AC")} className="danger-button">
                AC
              </button>
              <button onClick={() => util("Del")} className="danger-button">
                Del
              </button>
              <button onClick={() => setQuestion("%")} className="opp-button">
                %
              </button>
              <button onClick={() => setQuestion("/")} className="opp-button">
                /
              </button>
            </div>
            <div>
              <button onClick={() => setQuestion("1")} className="top-button">
                1
              </button>
              <button onClick={() => setQuestion("2")} className="top-button">
                2
              </button>
              <button onClick={() => setQuestion("3")} className="top-button">
                3
              </button>
              <button onClick={() => setQuestion("*")} className="opp-button">*</button>
            </div>
            <div>
              <button onClick={() => setQuestion("4")} className="top-button">
                4
              </button>
              <button onClick={() => setQuestion("5")} className="top-button">
                5
              </button>
              <button onClick={() => setQuestion("6")} className="top-button">
                6
              </button>
              <button onClick={() => setQuestion("-")} className="opp-button">-</button>
            </div>
            <div>
              <button onClick={() => setQuestion("7")} className="top-button">
                7
              </button>
              <button onClick={() => setQuestion("8")} className="top-button">
                8
              </button>
              <button onClick={() => setQuestion("9")} className="top-button">
                9
              </button>
              <button onClick={() => setQuestion("+")} className="opp-button">+</button>
            </div>
            <div>
              <button onClick={() => setQuestion("00")} className="top-button">
                00
              </button>
              <button onClick={() => setQuestion("0")} className="top-button">
                0
              </button>
              <button onClick={() => setQuestion(".")} className="top-button">
                .
              </button>
              <button onClick={() => util("=")} className="util-button">=</button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
