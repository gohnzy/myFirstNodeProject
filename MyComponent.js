import React from "react";
import ReactDOM from 'react-dom'

export default function MyComponent()  {
    return (<div>
            <form className="thisForm" role="form" id="form">
              <label htmlFor="input" className="label">Input birthyear</label>
              <input id="input" className="firstInput" type="number" role="input"/>
              <button type="submit" id="submit" role="submitBtn">Calcul !</button>
            </form>
          <div role="results" id="results"></div>
        </div>)
}

export function handleFormSubmit(event) {
  event.preventDefault()
  const input = document.getElementById("input")
  const resd = document.getElementById("results")
  myAverAge(resd, input.value);
}

function Result({value, wrongValue}) {
  if(value) {
    return (<p id="yourAge" className="result" role="result">Vous avez {value} ans !</p>)
  } else if(wrongValue) {
    return (<p id="wrongEntry" className="result" role="result">Je ne pense pas que vous ayez {wrongValue} ans..</p>)
  } else if(!value && !wrongValue) {
    return (<p id="noEntry" role="result">Entrez une année pour calculer</p>)
  }
}
   
function myAverAge(resultsDiv, input) {

  if(resultsDiv && input !== "") {
    const birthYear = parseInt(input)

    if(birthYear > 1900 && birthYear < 2024) {
      const count = 2024 - birthYear
      ReactDOM.render(<Result value={count} wrongValue={null} />, resultsDiv)
    } else {
      const count = 2024 - birthYear
      ReactDOM.render(<Result value={null} wrongValue={count} />, resultsDiv)
    }
  } else {
    ReactDOM.render(<Result value={null} wrongValue={null} />, resultsDiv)
  }
}



export async function init() {
  const root = document.createElement("div")
  document.body.appendChild(root)
  ReactDOM.render(<MyComponent />, root)
}

export async function addListener() {
  await init()
  const form = document.getElementById("form")
  form.addEventListener("submit", handleFormSubmit);
}

addListener()
