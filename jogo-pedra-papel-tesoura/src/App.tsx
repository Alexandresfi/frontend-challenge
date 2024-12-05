import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(12);
  const [play01, setPlay01] = useState("");
  const [play02, setPlay02] = useState("");

  const optionPlay = ["p", "pa", "t"];

  const handleClick = (choosePlay: string) => {
    console.log("resultado do click: ", choosePlay);
    randomChoice();
  };

  const randomChoice = () => {
    const playChoice = Math.floor(Math.random() * 3);
    console.log("jogada escolhida", optionPlay[playChoice]);
  };

  // const winner = () => {

  // }

  return (
    <div className="container-jogo">
      <header>
        <div>
          <span className="score">Score</span>
          <span className="ponts">14</span>
        </div>
      </header>

      <div>
        <div>
          <div className="item item-01" onClick={() => handleClick("p")}>
            {" "}
            Pedra
          </div>
          <div className="item item-02" onClick={() => handleClick("pa")}>
            Papel{" "}
          </div>
          <div className="item item-03" onClick={() => handleClick("t")}>
            {" "}
            Tesoura{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
