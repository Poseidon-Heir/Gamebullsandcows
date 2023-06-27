
import { useState, useEffect } from "react";
import "./gameboard.css";


const Gameboard = () => {
  GenerateSecretNumber();

  const [secretNumber, setSecretNumber] = useState("");
  const [tens, setTens] = useState("");
  const [ones, setOnes] = useState("");
  const [hundreds, setHundreds] = useState("");
  const [thousands, setThousands] = useState("");

  const [result, setResult] = useState("");
  const [attempts, setAttempts] = useState([]);

  const [guess, setGuess] = useState("");
  const [buttonstate, setButtonstate] = useState(false);

  const [count, setCount] = useState(0);

  // console.log(guess);












  function GenerateSecretNumber() {



    const digits = '1234567890';
    let secret = '';

    while (secret.length < 4) {
      const randomIndex = Math.floor(Math.random() * digits.length);
      const digit = digits[randomIndex];

      if (!secret.includes(digit)) {
        secret += digit;
      }
    }

    useEffect(() => {

      setSecretNumber(secret);

      sessionStorage.setItem("computer_number", secret);
    }, [secret]);

    return;

  }

  function handleGuess() {

    const givennumber = (thousands + hundreds + tens + ones);
    //  console.log(givennumber);
    // console.log(guess);
    if (givennumber.length !== 4 || isNaN(Number(givennumber)) || thousands === tens || hundreds === tens || ones === tens || thousands === ones || hundreds === ones || ones === tens || hundreds === thousands) {
      // setResult('Invalid guess! Please enter a 4-digit number.');
      alert('Invalid guess! Please enter a 4-digit number.');
      return;
    }
    //    console.log("guess is");
    //    console.log(givennumber);
    let bulls = 0;
    let cows = 0;
    setCount(count + 1);

    for (let i = 0; i < 4; i++) {
      if (givennumber[i] === secretNumber[i]) {
        bulls++;
      } else if (secretNumber.includes(givennumber[i])) {
        cows++;
      }
    }

    if (bulls === 4) {
      setResult(`Congratulations! You guess the secret number. In ${count} attempts`);
      setAttempts("");
      setButtonstate(true);

    } else {
      const tries = `Bulls: ${bulls}, Cows: ${cows} : ${givennumber} `;
      // setResult(`Bulls: ${bulls}, Cows: ${cows} `);
      setAttempts((t) => [...t, tries]);
      // console.log(`Bulls: ${bulls}, Cows: ${cows}`);
    }
    setGuess(thousands + hundreds + tens + ones);
  }

  return (
    <div className="gamecontainer">
      <div className="gamestation">
        <input
          type="text"
          id="thousands"
          name="thousands"
          onChange={(e) =>  {
            setThousands(e.target.value)
            
            if(e.target.value.length >= 1) {
              document.querySelector("#hundreds").focus();
            }
            if(e.target.value.length === 0)
              document.querySelector("#thousands").focus();
            }
          }
          value={thousands}
        />
        <input
          type="text"
          id="hundreds"
          name="hundreds"
          onChange={(e) =>  {
            setHundreds(e.target.value)
            if(e.target.value.length >= 1) {
              document.querySelector("#tens").focus();
            }
            if(e.target.value.length === 0)
              document.querySelector("#hundreds").focus();
            }
          }
          value={hundreds}
        />
        <input
          type="text"
          id="tens"
          name="tens"
          onChange={(e) => {
            setTens(e.target.value)
            if(e.target.value.length >= 1) {
              document.querySelector("#ones").focus();
            }
            if(e.target.value.length === 0)
              document.querySelector("#tens").focus();
            }
          }
          value={tens}
        />
        <input
          type="text"
          id="ones"
          name="ones"
          onChange={(e) => {
            setOnes(e.target.value);
            if(e.target.value.length >= 1)
              document.querySelector("#check-btn").focus();
            if(e.target.value.length === 0)
              document.querySelector("#ones").focus();
          }}
          value={ones}
        />
        <button onClick={handleGuess} disabled={buttonstate} id="check-btn">Check</button>
      </div>
      <h2>Your Guess: {thousands}{hundreds}{tens}{ones}</h2>
      <div style={{ display: "flex", flexDirection: "column", width: "500px" }}><h3>{result} <p className="attemptdata">{attempts}</p></h3></div>
    </div>
  );

}
export default Gameboard;