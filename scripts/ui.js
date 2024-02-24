// arayüz DOM işlemleri ui.js te yaparız

export default class UI {
  constructor() {
    this.list = document.querySelector("#list");
    this.form = document.querySelector("#search-form");
    this.title = document.querySelector("#title");
    this.playArea = document.querySelector(".play-area");
    this.checkbox = document.querySelector("#mode_checkbox");
  }

  //liste alanına yükleniyor basar
  renderLoader() {
    this.list.innerHTML = `
<div class="container">
			<div class="loader"></div>
</div>
		`;
  }
  // ekrana kartları bas
  renderCards(songs) {
    //gifi yani loader ı ekrandan kaldır
    this.list.innerHTML = "";

    //dizide ki her bir eleman için aşağıdaki fonksiyonu çalıştıracağız
    songs.forEach((song) => {
      // console.log("şarki", song);
      // 1) elementi oluşturmak
      const div = document.createElement("div");

      // 2) class'ını ekleyeceğiz
      div.className = "card";

      // 3) innetHTML' ini belirlemem gerek
      div.innerHTML = `
			<div>
			<figure>
				<img
					src="${song.images.coverarthq}"
				/>
				<div id="play">
					<i id="play-btn" class="bi bi-play-fill"></i>
				</div>
			</figure>
			<h4>${song.title}</h4>
			<p>${song.subtitle}</p>
		</div>
				
				`;

      // 4) data verileri ekle
      div.dataset.title = song.title;
      div.dataset.photo = song.images.coverarthq;
      div.dataset.url = song.hub?.actions[1].uri;

      // 5) kartı HTML' e göndereceğiz
      this.list.appendChild(div); // createElementle oluşturulan tek elemanın, html'e eleman eklemeye yarayan bir tane metod var oda (appendChild)' dır.
    });
  }

  //başlığı günceller
  changeTitle(text) {
    this.title.innerText = text;
  }

  // müzik oynatma kısmını ekrana bas
  renderPlayingInfo(song) {
    this.playArea.innerHTML = `
		<div>
		<img
			class="animate"
			src="${song.photo}"
		/>
		<div>
			<p>Şuan Oynatılıyor...</p>
			<h3>${song.title}</h3>
		</div>
	</div>

	<audio controls autoplay src="${song.url}"></audio>`;
  }
}
