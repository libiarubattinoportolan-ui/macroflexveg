document.addEventListener("DOMContentLoaded", function () {

  const meta = {
    kcal: 2200,
    proteina: 190,
    carbo: 200,
    gordura: 60
  };

  const consumido = {
    kcal: 0,
    proteina: 0,
    carbo: 0,
    gordura: 0
  };

  document.getElementById("kcal").textContent =
    consumido.kcal + " / " + meta.kcal + " kcal";

  document.getElementById("proteina").textContent =
    consumido.proteina + " / " + meta.proteina + " g";

  document.getElementById("carbo").textContent =
    consumido.carbo + " / " + meta.carbo + " g";

  document.getElementById("gordura").textContent =
    consumido.gordura + " / " + meta.gordura + " g";

  document
    .getElementById("novaRefeicao")
    .addEventListener("click", function () {
      alert("Nova Refeição funcionando! 🎉");
    });

});