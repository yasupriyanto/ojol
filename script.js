// REGISTER USER
function register() {
  let user = {
    nama: document.getElementById("nama").value,
    alamat: document.getElementById("alamat").value,
    hp: document.getElementById("hp").value,
    email: document.getElementById("email").value
  };

  localStorage.setItem("user", JSON.stringify(user));
  alert("Pendaftaran berhasil!");
}

// JUALAN
function addProduk() {
  let produk = document.getElementById("produk").value;
  let harga = document.getElementById("harga").value;

  let data = JSON.parse(localStorage.getItem("produkList")) || [];
  data.push({ produk, harga });

  localStorage.setItem("produkList", JSON.stringify(data));
  renderProduk();
}

function renderProduk() {
  let data = JSON.parse(localStorage.getItem("produkList")) || [];
  let html = "";

  data.forEach((item) => {
    html += `<div class="item">🛍️ ${item.produk} - Rp ${item.harga}</div>`;
  });

  document.getElementById("listProduk").innerHTML = html;
}

// CERITA
function addCerita() {
  let cerita = document.getElementById("cerita").value;

  let data = JSON.parse(localStorage.getItem("ceritaList")) || [];
  data.push(cerita);

  localStorage.setItem("ceritaList", JSON.stringify(data));
  renderCerita();
}

function renderCerita() {
  let data = JSON.parse(localStorage.getItem("ceritaList")) || [];
  let html = "";

  data.forEach((c) => {
    html += `<div class="item">📖 ${c}</div>`;
  });

  document.getElementById("listCerita").innerHTML = html;
}

// auto load
renderProduk();
renderCerita();