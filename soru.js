function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function (cevap) {
    return cevap === this.dogruCevap
}

let sorular = [
    new Soru("1-JavaScript değişken adlandırmalarına ilişkşn aşağıdaki ifadelerin hangisi yanlıştır?", { a: "Tamamı küçük harflerden oluşabilir", b: "Sayı ile bitebilir", c: "Boşluk içerebilir", d: "Büyük harfler içerebilir" }, "c"),
    new Soru("2-TCP/IP tabanlı ağ protokolünde aşağıdaki katmanlardan hangisi yer almaz?", { a: "Ağ arayü katmanı", b: "Oturum katmanı", c: "İnternet katmanı", d: "Uygulama katmanı" }, "b"),
    new Soru("3-Aşağıdaki teknolojilerden hangisi arka-yüz web teknolojilerinden değildir?", { a: "PHP", b: "Ruby", c: "Java", d: "Bootstrap" }, "d"),
    new Soru("4-Aşağıdakilerden hangisi web uygulama mimarisi içinde yer alan katmanlardan biri değilir?", { a: "Veritabanı katmanı", b: "Web katmanı", c: "İş katmanı", d: "Ağ katmanı" }, "d"),
    new Soru("5-Aşağıdakilerden hangisinde HTML sayfalarını temelde oluşturan iki bölüm birlikte ve doğru olarak verilmiştir?", { a: "HEAD ve BODY", b: "HEAD ve FORM", c: "FORM ve BODY", d: "META ve TITLE" }, "a")
];