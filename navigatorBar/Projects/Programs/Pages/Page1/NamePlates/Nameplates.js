const nameInput = document.getElementById("nameInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("nameList");
const pagesContainer = document.getElementById("pages");
const printBtn = document.getElementById("printBtn");

let names = [];

addBtn.onclick = () => {
  const value = nameInput.value.trim();
  if (!value) return;
  names.push(value);
  nameInput.value = "";
  render();
};

window.removeName = (i) => {
  names.splice(i, 1);
  render();
};

function render() {
  list.innerHTML = "";
  names.forEach((n, i) => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${n}</span>
      <button onclick="removeName(${i})">✕</button>`;
    list.appendChild(li);
  });

  renderPages();
  printBtn.disabled = names.length === 0;
}

function renderPages() {
  pagesContainer.innerHTML = "";

  for (let i = 0; i < names.length; i += 2) {
    pagesContainer.appendChild(
      createPage(names[i], names[i + 1] || "")
    );
  }
}

function createPage(nameA, nameB) {
  const page = document.createElement("div");
  page.className = "page";

  page.innerHTML = `
    <div class="quarter"></div>

    <div class="quarter">
      ${createCard(nameA)}
    </div>

    <div class="quarter"></div>

    <div class="quarter">
      ${createCard(nameB)}
    </div>
  `;

  return page;
}

function createCard(name) {
  return `
    <div class="name-card">
      <span class="diag d1"></span>
      <span class="diag d2"></span>
      <span class="diag d3"></span>
      <span class="diag d4"></span>

      <div class="inner-frame"></div>
      <div class="fold-guides"></div>

      <div class="name">${name}</div>
    </div>
  `;
}

printBtn.onclick = () => {
  window.print();
};
