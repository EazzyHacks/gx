import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 


global.botNumber = '' //Ejemplo: 123456789

//-----------------------------

global.owner = [

  ['51936994155', 'Gx', true],

  ['222265178386528@lid'],

  ['51936994155'],

  ['51936994155'], 

  ['51936994155']

];

//-----------------------------

global.mods = ['51936994155']
global.suittag = ['51936994155'] 
global.prems = []

//-----------------------------

global.libreria = 'Baileys'
global.baileys = 'V 6.7.16' 
global.vs = '1.0'
global.nameqr = 'Gx Store Bot'
global.namebot = 'Gx Store Bot'
global.sessions = 'Sessions'
global.jadi = 'JadiBots' 


//-----------------------------

global.packname = 'Gx Store Bot'
global.botname = 'Gx Store Bot'
global.wm = '*Ｇｘ Ｓｔｏｒｅ Ｂｏｔ*'
global.author = 'Power By @yallico.xit'
global.dev = '©yallico.xit'
global.textbot = '*Ｇｘ Ｓｔｏｒｅ Ｂｏｔ*'
global.etiqueta = '@yallico.xit'


//-----------------------------

global.moneda = 'Coins'
global.welcom1 = ``

global.welcom2 = ``

global.banner = 'https://raw.githubusercontent.com/EazzyHacks/eazzy/refs/heads/main/eazzy.jpg'
global.avatar = 'https://raw.githubusercontent.com/EazzyHacks/eazzy/refs/heads/main/eazzy.jpg'

//-----------------------------

global.gp1 = 'https://chat.whatsapp.com/I4yJ2vrlhGXH3JRg06mxFZ'
global.comunidad1 = 'https://whatsapp.com/channel/0029Vb5oUp43LdQUVViHwc0m'
global.channel = 'https://whatsapp.com/channel/0029Vb5oUp43LdQUVViHwc0m'
global.channel2 = 'https://whatsapp.com/channel/0029Vb5oUp43LdQUVViHwc0m'
global.md = 'https://github.com/Kone457/Shizuka-AI'
global.correo = 'yallico2024@gmail.com'
global.cn ='https://whatsapp.com/channel/0029Vb5oUp43LdQUVViHwc0m';

//-----------------------------


global.catalogo = fs.readFileSync('./src/catalogo.jpg');
global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: packname, orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}
global.ch = {
ch1: '120363419947391620@newsletter',
}
global.multiplier = 70

//----------------------------

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment   

//----------------------------

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'settings.js'"))
  import(`${file}?update=${Date.now()}`)
})
