const btn = document.getElementById("btnCalcular");

btn.addEventListener("click", () => {
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  result = peso / (altura * altura);
  if (result < 18.5) result += "Se encuentra por debajo del peso";
  if (result >= 18.5 && result <= 24.9) result += "Se encuentra saludabe";
  if (result >= 25.0 && result <= 29.9) result += " Se encuentra con sobrepeso";
  if (result >= 30.0 && result <= 39.9) result += " Se encuentra Con sobrepeso";
  if (result >= 40.0)
    result += " Se encuentra con obesidad extrema o de alto riesgo";

  result = "IMC =" + result;

  document.querySelector(".resultado").innerHTML = result;
});
