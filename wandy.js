require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require("@adiwajshing/baileys");
const fs = require("fs");
const util = require("util");
const fetch = require("node-fetch")
const chalk = require("chalk");
const ffmpeg = require("fluent-ffmpeg")
const axios = require('axios')
const Math_js = require('mathjs')
const FileType = require('file-type')
const jimp = require('jimp')
const os = require('os')
const { exec, spawn, execSync } = require("child_process");
const speed = require('performance-now')
const moment = require('moment-timezone')
const PhoneNumber = require('awesome-phonenumber') 

//━━━━━━━━━━━━━━━[ MODULE ]━━━━━━━━━━━━━━━━━//

const { tanggal, wib, wita, wit, formatp } = require('./lib/function')

//━━━━━━━━━━━━━━━[ CONFIG ]━━━━━━━━━━━━━━━━━//

hit_today = []
global.hit = {}

//━━━━━━━━━━━━━━━[ FUNCTION ]━━━━━━━━━━━━━━━━━//

module.exports = conn = async (conn, m, chatUpdate, store) => {
try {
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.includes(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushName = m.pushName || "NPC";
const nomorBot = await conn.decodeJid(conn.user.id);
const isCreator = [nomorBot, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == nomorBot ? true : false;
const text = q = args.join(" ")
const arg = budy.trim().substring(budy.indexOf(" ") + 1);
const arg1 = arg.trim().substring(arg.indexOf(" ") + 1);
const dari = m.chat;
const from = m.key.remoteJid
const kirim = m.reply;
const sender = m.sender
const mek = chatUpdate.messages[0];
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const argsLog = budy.length > 30 ? `${q.substring(0, 30)}...` : budy;
hit_today.push(command)
const color = (text, color) => {
return !color ? chalk.green(text) : chalk.keyword(color)(text);
};
	
//━━━━━━━━━━━━━━━[ GROUP ]━━━━━━━━━━━━━━━━━//

const isGroup = m.key.remoteJid.endsWith('@g.us')
const groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(nomorBot) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false

//━━━━━━━━━━━━━━━[ TAMBAHAN ]━━━━━━━━━━━━━━━━━//

if (budy.includes('Assalamualaikum')) {  
conn.sendMessage(m.chat, {text: 'Waalaikumsalam Warahmatullahi Wabarakatuh'}, {quoted: m})
}
if (budy.includes('Asalamualaikum')) {  
conn.sendMessage(m.chat, {text: 'Waalaikumsalam Warahmatullahi Wabarakatuh'}, {quoted: m})
}
if (budy.includes('asalamualaikum')) {  
conn.sendMessage(m.chat, {text: 'Waalaikumsalam Warahmatullahi Wabarakatuh'}, {quoted: m})
}
if (budy.includes('Asalammualaikum')) {  
conn.sendMessage(m.chat, {text: 'Waalaikumsalam Warahmatullahi Wabarakatuh'}, {quoted: m})
}

//━━━━━━━━━━━━━━━[ READ CHAT ]━━━━━━━━━━━━━━━━━//

async function read() {
const readnya = {
remoteJid: m.key.remoteJid,
id: m.key.id,
participant: m.key.participant
}
conn.readMessages([readnya])
}
read()

//━━━━━━━━━━━━━━━[ FUNCTION ]━━━━━━━━━━━━━━━━━//

conn.resize = async(buffer, ukur1, ukur2) => {
return new Promise(async(resolve, reject) => {
var baper = await jimp.read(buffer);
var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
resolve(ab)
})
}

jsonformat = (string) => {
return JSON.stringify(string, null, 2)
}

if (isCmd && !m.isGroup) {
console.log(chalk.black(chalk.bgWhite("[ JEJAK ]")), color(argsLog, "turquoise"), chalk.magenta("Dari"), chalk.green(pushName), chalk.yellow(`[ ${sender.replace("@s.whatsapp.net", "")} ]`));
} else if (isCmd && m.isGroup) {
console.log(
chalk.black(chalk.bgWhite("[ JEJAK ]")),
color(argsLog, "turquoise"),
chalk.magenta("Dari"),
chalk.green(pushName),
chalk.yellow(`[ ${sender.replace("@s.whatsapp.net", "")} ]`),
chalk.blueBright("Di Grup"),
chalk.green(groupName)
);
}

let ucapan = "Selamat "+ moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
let jumlahCommand = require('util').inspect(hit.all)
let stamp = speed()
let sped = speed() - stamp
try {
let bio_nya =  await conn.fetchStatus(m.sender)
bio = `${bio_nya.status}`
} catch {
bio = `-`
}
	
function runtime(seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor(seconds % (3600 * 24) / 3600);
var m = Math.floor(seconds % 3600 / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
}

const wibT = wib()
const witaT = wita()
const witT = wit()
const tanggalT = tanggal()

if (isCmd) {
axios.get('https://api.countapi.xyz/hit/StealBotu/visits').then(({data}) => hit.all = data.value)
}

function getRandom(ext){
return `${Math.floor(Math.random() * 10000)}${ext}`
}

function randomkontol(){
gambar = [
{'result': 'https://telegra.ph/file/81260a8b9e8cff26d2b48.jpg'},
{'result': 'https://telegra.ph/file/ac4928f0824a2a0492737.jpg'},
{'result': 'https://telegra.ph/file/6359b013bc7e52c3b346f.jpg'},
{'result': 'https://telegra.ph/file/d43c89a5d2da72875ec05.jpg'},
{'result': 'https://telegra.ph/file/7d6c0e35f9c8f52715541.jpg'},
{'result': 'https://telegra.ph/file/ef4b742d47e6a9115e2ff.jpg'},
{'result': 'https://telegra.ph/file/55e5af5f33fbd57104187.jpg'},
{'result': 'https://telegra.ph/file/af236598456b95884bd15.jpg'},
{'result': 'https://telegra.ph/file/de92ed4a729887ffc974c.jpg'},
{'result': 'https://telegra.ph/file/00ce42a193b1dbbf907d4.jpg'}
]
randomnya = gambar[Math.floor(Math.random() * gambar.length)]
resultnya = randomnya.result
return resultnya
}

function reply(text){
conn.sendMessage(m.chat, { text: text })
}

const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})

let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
const week = d.toLocaleDateString(locale, { weekday: 'long' })

async function ppwa(conn, m) { 
let font = await jimp.loadFont('./name.fnt'), 
mask = await jimp.read('https://i.imgur.com/552kzaW.png'), 
welcome = await jimp.read(randomkontol()),  
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

/*
*${ucapan}, ${pushName}* 👋

──⭓ *BOT INFORMATION*

👑 Creator : WandyGans
🤖 Bot Name : Zero - Bot
📍 Prefix : 「 Multi Prefix 」
🌝 Hit Today : ${hit_today.length}
🌎 Hit All : ${jumlahCommand}
📶 Speed : ${sped.toFixed(4)} _Second_

──⭓ *DATE INFORMATION*

📆 Hari : ${week} ${weton}
📆 Tanggal : ${tanggalT}

──⭓ *TIME INFORMATION*

⏰ Time : ${wibT} *WIB*
⏰ Time : ${witaT} *WITA*
⏰ Time : ${witT} *WIT*

──⭓ *USER INFORMATION*

▢ *Name* : *${pushName}*
▢ *Bio* : *${bio}*
*/
	
anuy = `

</> Main Menu
⭔ ${prefix}menu
⭔ ${prefix}sc
⭔ ${prefix}delete
⭔ ${prefix}donasi
⭔ ${prefix}owner
⭔ ${prefix}fetch
⭔ ${prefix}ping

</> Sticker Menu
⭔ ${prefix}sticker
⭔ ${prefix}toimg

</> Group Menu
⭔ ${prefix}setsubject
⭔ ${prefix}tagall
⭔ ${prefix}hidetag
⭔ ${prefix}add
⭔ ${prefix}kick
⭔ ${prefix}promote
⭔ ${prefix}demote
⭔ ${prefix}tagme
⭔ ${prefix}listadmin
⭔ ${prefix}group
⭔ ${prefix}setdesc
⭔ ${prefix}linkgroup

</> Owner Menu
⭔ ${prefix}nano
⭔ ${prefix}leavegc
⭔ ${prefix}eval
⭔ >
⭔ $

`

//━━━━━━━━━━━━━━━[ COMMAND ]━━━━━━━━━━━━━━━━━//
 
switch (command) {
case 'menu':
reply(anuy)
break
case 'setdesc': case 'setdesk': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) throw `Example: ${prefix + command} Welcome`
await conn.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
}
break
case 'linkgroup': case 'linkgc': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins && !m.key.fromMe) throw mess.botAdmin
let response = await hisoka.groupInviteCode(m.chat)
conn.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'group': case 'grup': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins && !m.key.fromMe) throw mess.botAdmin
if (!isAdmins && !m.key.fromMe) throw mess.admin
if (!text) throw `Masukkan value open/close\nContoh : #grup buka`
if (args[0].toLowerCase() === 'close') {
await conn.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0].toLowerCase() === 'open') {
await conn.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
}
break
case 'tagme':
if (!m.isGroup) throw mess.group
var num = m.sender
conn.sendMessage(m.chat, {text: `@${num.split("@")[0]} Tag!`, contextInfo: { mentionedJid: [num]}}, {quoted: m})
break
case 'listadmins':
case 'listadmin':
case 'admin':
if (!m.isGroup) return m.reply(mess.group)
teks2 = `List admin group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
teks2 += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
conn.sendTextWithMentions(m.chat, teks2, m)
break
case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await conn.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await conn.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
case 'kick':
if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
    var number;
    if (mentioned.length !== 0) {
      number = mentioned[0]
      conn.groupParticipantsUpdate(m.chat, [number], "remove")
      .then( res => reply(jsonformat(res)))
      .catch( err => reply(jsonformat(err)))
    } else if (isQuotedMsg) {
      number = quotedMsg.sender
      conn.groupParticipantsUpdate(m.chat, [number], "remove")
      .then( res => m.reply(jsonformat(res)))
      .catch( err =>m. reply(jsonformat(err)))
    } else {
    m.reply(`Tag atau balas pesan member yang ingin dikeluarkan dari grup`)
    }
    break
case 'add':
if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
    var number;
    if (args[1]) {
      number = mentioned[0]
      var cek = await conn.onWhatsApp(number)
      if (cek.length == 0) return m.reply(`Masukkan nomer yang valid dan terdaftar di WhatsApp`)
      conn.groupParticipantsUpdate(m.chat, [number], "add")
      .then( res => m.reply(jsonformat(res)))
      .catch( err => m.reply(jsonformat(err)))
    } else if (isQuotedMsg) {
      number = quotedMsg.sender
      var cek = await conn.onWhatsApp(number)
      if (cek.length == 0) return m.reply(`Member yang kamu balas pesannya sudah tidak terdaftar di WhatsApp`)
      conn.groupParticipantsUpdate(m.chat, [number], "add")
      .then( res => m.reply(jsonformat(res)))
      .catch( err => m.reply(jsonformat(err)))
    } else {
      m.reply(`Kirim perintah ${command} nomer atau balas pesan orang yang ingin dimasukkan kedalam grup`)
    }
    break
case 'tagall': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
 }
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case 'hidetag':
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
hisoka.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
break
case 'sc':
m.reply('Script : https://github.com/DikaArdnt/Hisoka-Morou')
break
case 'leavegc':
if (!isCreator && !m.key.fromMe) throw mess.owner
conn.groupLeave(from)
break
case 'setname': case 'setsubject': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins && !m.key.fromMe) throw mess.botAdmin
if (!isAdmins && !m.key.fromMe) throw mess.admin
if (!q) throw `Example : ${prefix + command} Wibu`
await conn.groupUpdateSubject(m.chat, text).then((res) => reply('Berhasil mengganti nama group menjadi: ${q}'))).catch((err) => reply(jsonformat(err)))
}
break
case 'nano':
if (!isCreator && !m.key.fromMe) throw mess.owner
if (!q) return reply(`Example : ${prefix + command} index.js`)
anus = fs.readFileSync(`${q}`)
m.reply(String(anus))
break
case 'eval': {
if (!isCreator && !m.key.fromMe) return m.reply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}
break
case 'donasi':
m.reply(`Donasi seiklasnya\nPulsa : 082125039170`)
break
case 'delete': case 'del': case 'd': {
if (!m.quoted) throw false
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
break
case 'get':
case 'fetch':
if (!q) return m.reply(`Example : #fetch https://youtube.com`)
fetch(`${q}`).then(res => res.text())  
.then(bu =>{
m.reply(bu)
})   
break
case 'owner': case 'creator': {
let vcard = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n' 
+ 'N:;Wandy;;;'
+ 'FN:WandyGunawan\n'
+ 'ORG:WandyGans;\n'
+ 'TEL;type=CELL;type=VOICE;waid=6282125039170:+62 821-2503-9170\n' // WhatsApp ID + phone number
+ 'END:VCARD'
conn.sendMessage(m.chat, { contacts: { displayName: 'Owner - Zero-bot', contacts: [{ vcard }] } }, { quoted: m })
}
break
case 'toimage': case 'toimg':
try {
m.reply(mess.wait)
let media = await conn.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
let buffer = fs.readFileSync(ran)
conn.sendMessage(m.chat, { image: buffer }, { quoted: m})
fs.unlinkSync(ran)
})
} catch (e) {
m.reply(String(e))
}
break
case 'ping': case 'botstatus': case 'statusbot': {
let timestamp = speed()
let latensi = speed() - timestamp
let all = require('util').inspect(hit.all)
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n\nRuntime : ${runtime(process.uptime())}
💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
m.reply(respon)
}
break
case 'sticker': case 's': case 'stickergif': case 'sgif': case 'stiker': {
if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
m.reply(mess.wait)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await conn.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
break
		
default:

if (budy.includes('>')) {
if (!isCreator) return 
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}
}

if (budy.includes('$')) {
if (!isCreator) return 
let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)
let o
try {
o = await exec(command.trimStart()  + ' ' + text.trimEnd())
} catch (e) {
o = e
} finally {
let { stdout, stderr } = o
if (stdout.trim()) m.reply(stdout)
if (stderr.trim()) m.reply(stderr)
}
}

}
} catch (err) {
await m.reply(String(err))
}
};		
  
let file = require.resolve(__filename);
fs.watchFile(file, () => {
fs.unwatchFile(file);
console.log(chalk.redBright(`Sip, File Diupdate (Gak Usah Restart) => ${__filename}`));
delete require.cache[file];
require(file);
});
