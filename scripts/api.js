// api isteği atan fonksiyonlar bu dosyadadır...

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2e3ea4f1c6msh3551d0a7508329bp1672c9jsn0ae102fa9921",
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
}
