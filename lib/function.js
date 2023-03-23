const moment = require('moment-timezone')
const jimp = require('jimp')
const PhoneNumber = require('awesome-phonenumber') 

exports.formatp = sizeFormatter({
    std: 'JEDEC', //'SI' = default | 'IEC' | 'JEDEC'
    decimalPlaces: 2,
    keepTrailingZeroes: false,
    render: (literal, symbol) => `${literal} ${symbol}B`,
})

exports.tanggal = function tanggal(){
myMonths = ["1","2","3","4","5","6","7","8","9","10","11","12"];
myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
var tgl = new Date();
var day = tgl.getDate()
bulan = tgl.getMonth()
var thisDay = tgl.getDay(),
thisDay = myDays[thisDay];
var yy = tgl.getYear()
var year = (yy < 1000) ? yy + 1900 : yy;
const tanggal = `${day}-${myMonths[bulan]}-${year}` 
return tanggal
}

exports.wib = function wib(){
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
return wib
}

exports.wit = function wit(){
const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
return wit
}

exports.wita = function wita(){
const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
return wita
}

exports.ucapan = function ucapan(){
ucapan = "Selamat "+ moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
return ucapan
}

exports.ppwa = async function genProfile(conn, m) { 
   let font = await jimp.loadFont('./name.fnt'), 
     mask = await jimp.read('https://i.imgur.com/552kzaW.png'), 
     welcome = await jimp.read(thumbnailUrl.getRandom()), 
     avatar = await jimp.read(await conn.profilePictureUrl(m.sender, 'image').catch(() => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')), 
     status = (await conn.fetchStatus(m.sender).catch(console.log) || {}).status?.slice(0, 30) || 'Not Detected' 
  
     await avatar.resize(460, 460) 
     await mask.resize(460, 460) 
     await avatar.mask(mask) 
     await welcome.resize(welcome.getWidth(), welcome.getHeight()) 

     await welcome.print(font, 550, 180, 'Name:') 
     await welcome.print(font, 650, 255, pushName.slice(0, 25)) 
     await welcome.print(font, 550, 340, 'About:') 
     await welcome.print(font, 650, 415, status) 
     await welcome.print(font, 550, 500, 'Number:') 
     await welcome.print(font, 650, 575, PhoneNumber('+' + m.sender.split('@')[0]).getNumber('international')) 
     return await welcome.composite(avatar, 50, 170).getBufferAsync('image/png') 
 }

