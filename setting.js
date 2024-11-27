const fs = require('fs')
const { color } = require('./lib/myfunc')

//owner
global.owner = '6285894955362'
global.nomerowner = ["6285894955362"]

//watermark 
global.packname = 'Made Indonesia'
global.author = 'Cpm_Jhon-MD'
global.foter1 = 'Bot By Cpm_Jhon'
global.foter2 = 'Created By Cpm_Jhon'
global.foter3 = 'Cpm_Jhon-MD'
global.foter4 = '© AlwaysJhon - Production'
global.idcennel = 'https://chat.whatsapp.com/GK1QX9s1YK8EmzHC4wEUBJ'
global.thumb = 'https://pomf2.lain.la/f/lez5oxvq.png'
global.url = 'https://chat.whatsapp.com/GK1QX9s1YK8EmzHC4wEUBJ'
//database 
global.urldb = 'mongodb+srv://nawdev01:putu0@botwa.q6bwloy.mongodb.net/?retryWrites=true&w=majority'; // kosongin aja tapi kalo mau pake database mongo db isi url mongo

// APIKEY

global.skizoapi = 'KiiCode'
global.lol = 'GataDios'

//mess
global.mess = {
    success: 'Done Kak <3',
    admin: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !*_',
    botAdmin: '_*❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !*_',
    owner: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !*_',
    group: '_*❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !*_',
    private: '_(❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !*_',
    wait: '_*Wait Tunggu Sebentar*_',
    notregist: '_*Kamu Belum Terdaftar Di Database Bot Silahkan Daftar Terlebih Dahulu_*',
    premium: '_*khusus Premium" Mau Prem? Chat Owner_*',
    endLimit: '_*Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB_*.',
}

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(color(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})