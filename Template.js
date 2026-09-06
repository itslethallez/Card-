const DEFAULTS = {
  name: "CARDHOLDER NAME",
  pan: "0000 0000 0000 0000",
  expiry: "MM/YY",
  cvc: "•••",
  signature: "",
  website: "bank.example",
  placard: "PLACARD 0000 0000000",
  material: "Made with 82% recycled plastic",
  help: "13 0000 or +00 0 0000 0000",
};

const card = document.getElementById("card");
const form = document.getElementById("editor");

function bind(values) {
  card.querySelectorAll("[data-bind]").forEach((node) => {
    node.textContent = values[node.getAttribute("data-bind")] ?? "";
  });
}

form.addEventListener("input", () => bind(Object.fromEntries(new FormData(form).entries())));

document.getElementById("reset").addEventListener("click", () => {
  Object.entries(DEFAULTS).forEach(([key, value]) => { form.elements[key].value = value; });
  bind(DEFAULTS);
});

document.getElementById("print").addEventListener("click", () => window.print());
bind(Object.fromEntries(new FormData(form).entries()));
