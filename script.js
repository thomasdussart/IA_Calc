document.getElementById("calculate").addEventListener("click", () => {
  let montant = document.getElementById("montant").value;

  if (montant < 40) {
    alert(
      "Veuillez entrer un nombre supérieur ou égal à 40€ pour bénéficier de la déductibilité fiscale"
    );
    return;
  }

  let deductible = (montant / 100) * 45;
  let total = (montant - deductible).toFixed(2);

  document.getElementById("pay").innerHTML =
    "<span class='text-blue-dark'>" +
    (montant - deductible).toFixed(2) +
    "€</span>";
  document.getElementById("refund").innerHTML =
    "<span class='text-blue-dark'>" + deductible.toFixed(2) + "€</span>";
  document.getElementById("texte").innerHTML =
    "Pour un don de <span class='text-blue-dark'>" +
    montant +
    "€</span>, vous payez <span class='text-blue-dark'>" +
    total +
    "€</span> et vous retouchez <span class='text-blue-dark'>" +
    deductible.toFixed(2) +
    "€</span>";

  document
    .getElementById("texte")
    .setAttribute(
      "class",
      "border-2 border-solid rounded-2xl w-2/3 p-2 text-center bg-gray-300"
    );
});
