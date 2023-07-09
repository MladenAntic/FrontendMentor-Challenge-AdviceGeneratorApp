const adviceNumber = document.querySelector(".advice-number .number");
const quote = document.querySelector("blockquote q");
const button = document.getElementById("dice-button");

async function getAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const advices = await response.json();

  return advices;
}

function displayAdvice() {
  getAdvice().then((advices) => {
    adviceNumber.innerText = `${advices.slip.id}`;
    quote.innerText = `${advices.slip.advice}`;
  });
}

displayAdvice();

button.addEventListener("click", () => {
  displayAdvice();
});
