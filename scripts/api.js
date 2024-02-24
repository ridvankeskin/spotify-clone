// api isteği atan fonksiyonlar bu dosyadadır...

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "405fc73b7emshaf2dbd3ee5ffc59p110b72jsn3a90ac39d11c",
    "X-RapidAPI-Host": "shazam.p.rapidapi.com",
  },
};

// api işlemlerini yönetecek olan class tanımla
export default class API {
  // constructor kurucu method olarak tanımlanır
  constructor() {
    this.songs = [];
  }

  // türkiyedeki popüler müzikleri alır
  async getPopular() {
    // api isteği at
    const res = await fetch(
      "https://shazam.p.rapidapi.com/charts/track?listId=ip-country-chart-TR&locale=tr",
      options
    );

    // gelen veriyi işle
    const data = await res.json();
    // class'ta tanımlanan songs değişkenine aktar
    this.songs = data.tracks;
  }

  //aratılan kelimeye uygun şarkıları al
  async searchMusic(query) {
    //api isteği at
    const res = await fetch(
      `https://shazam.p.rapidapi.com/search?term=${query}&locale=tr`,
      options
    );

    //gelen cevabı işle

    const data = await res.json();

    //gelen cevabın formatını değiştir

    const formatted = data.tracks.hits.map((song) => {
      return song.track;
    });

    //gelen veriyi değişkene aktar
    this.songs = formatted;
  }
}
