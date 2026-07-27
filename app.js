// Metas diárias
const meta = {
  kcal: 2200,
  proteina: 190,
  carbo: 200,
  gordura: 60
};

// Valores consumidos
let consumido = {
  kcal: 0,
  proteina: 0,
  carbo: 0,
  gordura: 0
};

// Lista de refeições
let refeicoes = [];

// Atualiza a tela
function atualizarTela() {
  document.getElementById("kcal").textContent =
    consumido.kcal + " / " + meta.kcal + " kcal";

  document.getElementById("proteina").textContent =
    consumido.proteina + " / " + meta.proteina + " g";

  document.getElementById("carbo").textContent =
    consumido.carbo + " / " + meta.carbo + " g";

  document.getElementById("gordura").textContent =
    consumido.gordura + " / " + meta.gordura + " g";
}

// Inicializa a tela
atualizarTela();
