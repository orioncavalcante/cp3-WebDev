// ── Estado global ────────────────────────────────────────────────────────────
let midias = ["Radiohead", "Pearl Jam","Evangelion"];

// ── Login ────────────────────────────────────────────────────────────────────
function fazerLogin() {
  const usuario = document.getElementById("username").value.trim();
  const senha   = document.getElementById("password").value.trim();
  const erro    = document.getElementById("login-error");

  if (!usuario || !senha) {
    mostrarErro(erro, "Preencha usuário e senha.");
    return;
  }

  if (usuario !== "aluno" || senha !== "fiap2025") {
    mostrarErro(erro, "Usuário ou senha incorretos.");
    return;
  }

  document.getElementById("login-screen").classList.add("hidden");
  document.getElementById("main-screen").classList.remove("hidden");
  renderizarLista();
}

function fazerLogout() {
  document.getElementById("main-screen").classList.add("hidden");
  document.getElementById("login-screen").classList.remove("hidden");
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  esconderErro(document.getElementById("login-error"));
}

// ── CRUD ─────────────────────────────────────────────────────────────────────
function adicionarFim() {
  const valor = lerInput();
  if (valor === null) return;
  midias.push(valor);
  limparInput();
  renderizarLista();
}

function adicionarInicio() {
  const valor = lerInput();
  if (valor === null) return;
  midias.unshift(valor);
  limparInput();
  renderizarLista();
}

function removerItem(indice) {
  midias.splice(indice, 1);
  renderizarLista();
}

function iniciarEdicao(indice) {
  const li    = document.querySelector(`[data-indice="${indice}"]`);
  const nome  = li.querySelector(".item-nome");
  const input = li.querySelector(".item-edit-input");
  const acoes = li.querySelector(".acoes-normal");
  const conf  = li.querySelector(".acoes-edicao");

  input.value = midias[indice];
  nome.classList.add("hidden");
  input.classList.remove("hidden");
  acoes.classList.add("hidden");
  conf.classList.remove("hidden");
  input.focus();
}

function confirmarEdicao(indice) {
  const li    = document.querySelector(`[data-indice="${indice}"]`);
  const input = li.querySelector(".item-edit-input");
  const valor = input.value.trim();

  if (!valor) {
    mostrarErro(document.getElementById("crud-error"), "O campo não pode ficar vazio.");
    return;
  }

  midias[indice] = valor;
  esconderErro(document.getElementById("crud-error"));
  renderizarLista();
}

function cancelarEdicao(indice) {
  esconderErro(document.getElementById("crud-error"));
  renderizarLista();
}

// ── Renderização ─────────────────────────────────────────────────────────────
function renderizarLista() {
  const ul = document.getElementById("lista-midias");
  ul.innerHTML = "";

  midias.forEach(function(midia, i) {
    const li = document.createElement("li");
    li.dataset.indice = i;
    li.innerHTML = `
      <span class="item-index">${i + 1}</span>
      <span class="item-nome">${escapar(midia)}</span>
      <input class="item-edit-input hidden" type="text" />
      <span class="acoes-normal">
        <button onclick="iniciarEdicao(${i})">Editar</button>
        <button class="btn-danger" onclick="removerItem(${i})">Remover</button>
      </span>
      <span class="acoes-edicao hidden">
        <button class="btn-primary" onclick="confirmarEdicao(${i})">Salvar</button>
        <button onclick="cancelarEdicao(${i})">Cancelar</button>
      </span>
    `;
    ul.appendChild(li);
  });
}

// ── Utilitários ───────────────────────────────────────────────────────────────
function lerInput() {
  const input = document.getElementById("novo-item");
  const valor = input.value.trim();
  const erro  = document.getElementById("crud-error");

  if (!valor) {
    mostrarErro(erro, "Digite o nome da mídia antes de adicionar.");
    return null;
  }

  esconderErro(erro);
  return valor;
}

function limparInput() {
  document.getElementById("novo-item").value = "";
}

function mostrarErro(el, msg) {
  el.textContent = msg;
  el.classList.remove("hidden");
}

function esconderErro(el) {
  el.textContent = "";
  el.classList.add("hidden");
}

function escapar(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// ── Init ──────────────────────────────────────────────────────────────────────
// A lista só é renderizada após login bem-sucedido.

document.getElementById("contador-midias").textContent = midias.length;

// Função utilitária para acionar o login ao apertar Enter
function checarEnter(event) {
    if (event.key === "Enter") {
    fazerLogin();
    }
}

// Adiciona o "ouvinte" aos campos de texto do login
document.getElementById("username").addEventListener("keydown", checarEnter);
document.getElementById("password").addEventListener("keydown", checarEnter);