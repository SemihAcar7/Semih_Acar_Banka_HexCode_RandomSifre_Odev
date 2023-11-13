// HEX CODE


// let karakterler = ["A","B","C","D","E","F",0,1,2,3,4,5,6,7,8,9]
// let Array = []
// let karakter_sayisi = 6


// for(let i = 0; i < karakter_sayisi; i++ ){
//     let random = Math.floor(Math.random() * karakterler.length - 1 ) + 1
//     Array.push(karakterler[random])
// }
// console.log(`#${Array[0]}${Array[1]}${Array[2]}${Array[3]}${Array[4]}${Array[5]}`)


// ******************************************************************************************************************************************


// BANKA UYGULAMASI

// let islem = Number(prompt("Bankamıza hoş geldiniz\nLütfen bir işlem seçiniz\n 1-Bakiye sorgulama\n 2-Para çekme\n 3-Para yatırma\n 4-Çıkış"))
// bakiye = 1000


//     if(islem == 1){
//         console.log(`Bakiyeniz:${bakiye}₺`)
    
//     }
//     else if(islem == 2){
//         let Cekme_degeri = Number(prompt("Ne kadar para çekmek istiyorsunuz?"))
//         bakiye -= Cekme_degeri
//         yeni_bakiye = bakiye
//         console.log(`Para çekme işlemi başarıyla yapılmıştır. Lütfen paranızı alınız. Yeni bakiyeniz:${yeni_bakiye}₺`)
    
//     }
//     else if(islem == 3){
//         let Yatırma_degeri = Number(prompt("Ne kadar para yatırmak istiyorsunuz?"))
//         bakiye += Yatırma_degeri
//         yeni_bakiye2 = bakiye
//         console.log(`Para yatırma işlemi başarıyla yapılmıştır. Yeni bakiyeniz:${yeni_bakiye2}₺`)
//     }
//     else if(islem == 4){
//         console.log("Programdan başarıyla çıkış yapıldı")
        
//     }
//     else{
//         console.log("Geçersiz işlem")
//     }


// ******************************************************************************************************************************************


// RANDOM ŞİFRE

// let karakterler  = [    "a",    "b",    "c",    "ç",    "d",    "e",    "f",    "g",    "ğ",    "h",    "ı",    "i",    "j",    "k",    "l",    "m",    "n",    "o",    "ö",    "p",    "r",    "s",    "ş",    "t",    "u",    "ü",    "v",    "y",    "z",    "q",    "w",    "x",    "A",    "B",    "C",    "Ç",    "D",    "E",    "F",    "G",    "Ğ",    "H",    "I",    "I",    "J",    "K",    "L",    "M",    "N",    "O",    "Ö",    "P",    "R",    "Ş",    "T",    "U",    "Ü",    "V",    "Y",    "Z",    "Q",    "W",    "X",    0,    1,    2,    3,    4,    5,    6,    7,    8,    9,    10,    "!",    "'",    "^",    "+",    "%",    "&",    "/",    "(",    ")",    "=",    "?",    "-", "_",    "*",    ",",    ";",    "`","{",    "}",    "[",    "]",    "@",    "|",    "<",    ">",    ".",    ":",    "é",    "$","#","£","€", "₺"]


// let sifre_uzunlugu = Number(prompt("Şifre uzunluğu giriniz."))
// let sifre = []

// for(let i = 0; i < sifre_uzunlugu; i++){
//     let random_sifre = Math.floor(Math.random() * karakterler.length - 1) + 1
//         if(sifre.includes(karakterler[random_sifre]) == false){
//             sifre.push(karakterler[random_sifre])
//         }
       
        
// }
// console.log(sifre.join(""))








