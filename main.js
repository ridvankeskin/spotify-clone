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
ui.form.addEventListener("submit", (event) => {
  event.preventDefault();

  // 1) aratılan kelimeye erişmek
  const query = event.target.searchInput.value;
  // 2) eğer boşsa uyarı gönder
  if (!query.trim()) return alert("Lütfen aratılacak kelimeyi giriniz.");
  console.log("geçti");
  // 3) ekrana yükleniyor bas

  // 4) başlığı güncelle

  // 5) api'dan şarkıları alacağım

  // 6) api'den şarkıları aldıktan sonra şarkıları ekrana basacağım
  console.log("merhaba");
});
