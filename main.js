import API from "./scripts/api.js";
import UI from "./scripts/ui.js";
// CALASS'ın bir örneğini oluşturmam lazım
const api = new API();
const ui = new UI();
// sayfanın yüklenme olayını izle

document.addEventListener("DOMContentLoaded", async () => {
  // 1) ekrana yüklenme gifi bas
  ui.renderLoader();

  // 2) api istek at
  await api.getPopular();

  // 3) gelen verileri ekrana bas
  ui.renderCards(api.songs);
});

//formun(arama kısmı) gönderilme olayını izle
// sayfayı yenilemeyi engellemek istiyorsak (event) event.precentyDefault();
ui.form.addEventListener("submit", async (event) => {
  event.preventDefault();

  // 1) aratılan kelimeye erişmek
  const query = event.target.searchInput.value;
  // 2) eğer boşsa uyarı gönder
  if (!query.trim()) return alert("Lütfen aratılacak kelimeyi giriniz.");

  // 3) ekrana yükleniyor bas
  ui.renderLoader();
  // 4) başlığı güncelle
  ui.changeTitle(query + " İçin Sonuçlar");

  // 5) api'dan şarkıları alacağım
  await api.searchMusic(query);
  // 6) api'den şarkıları aldıktan sonra şarkıları ekrana basacağım
  ui.renderCards(api.songs);
});

// kartların alanına tıklanma olayını izlemem lazım
ui.list.addEventListener("click", (e) => {
  // tıklanılan eleman play-Btn ise oynat
  if (e.target.id === "play-btn") {
    //tıklanılan karttaki şarkının bilgilerini al
    const song = e.target.closest(".card").dataset;

    //şarkıyı oynatma kısmını ekrana bas
    ui.renderPlayingInfo(song);
  }
});
// localde mode verisini al
const mode = localStorage.getItem("mode");

document.body.className = mode === "true" ? "dark" : "light";

ui.checkbox.checked = mode === "true";
// checkbox'ın değerinin değişimi izle

ui.checkbox.addEventListener("change", (e) => {
  // false > açık mod

  // true > gece mod

  const isDarkMode = e.target.checked;

  // kullanıcını seçtiği değeri kaybetmemek için localde tutacağız
  localStorage.setItem("mode", isDarkMode);

  document.body.className = isDarkMode ? "dark" : "light";
});
