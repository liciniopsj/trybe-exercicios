const { bmiCalc } = require("./src/bmi");
const readline = require("readline-sync");
const fs = require("fs").promises;

const bmi = () => {
  const weight = readline.questionInt("What's your weight ? ");
  const height = readline.questionFloat("what's your height ? ");
  const IMC = bmiCalc(weight, height);
  const classification = (IMC) => {
    if (IMC < 18.5) return "Abaixo do peso (magreza)";
    if (IMC >= 18.5 && IMC <= 24.9) return "Peso normal";
    if (IMC >= 25 && IMC <= 29.9) return "Acima do peso (sobrepeso)";
    if (IMC >= 30 && IMC <= 34.9) return "Obesidade grau I";
    if (IMC >= 35 && IMC <= 39.9) return "Obesidade grau II";
    if (IMC > 40) return "Obesidade grau III";
  };

  console.log(
    `Your BMI Value is ${IMC}. Your Body Mass Index is ${classification(IMC)}`
  );
};

const data = async () => {
  const simpJson = await fs.readFile("./data/simpsons.json", "utf-8");
  const simpsons = JSON.parse(simpJson);
  const result = simpsons.map(({ id, name }) => `${id} - ${name}`);
  result.forEach((row) => console.log(row));
};

async function main() {
  const menu = readline.question(
    "simpsons demo or bmi Demo ?, type simpsons or bmi  "
      
  );
  switch (menu) {
    case "simpsons":
      await data();
      break;

    case "bmi":
      bmi();
      break;

    default:
      console.log("wrong !");
      break;
  }
}

main();
