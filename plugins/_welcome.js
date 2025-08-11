import { WAMessageStubType } from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return true
  
  const fkontak = { 
    "key": { 
      "participants": "0@s.whatsapp.net", 
      "remoteJid": "status@broadcast", 
      "fromMe": false, 
      "id": "Halo" 
    }, 
    "message": { 
      "contactMessage": { 
        "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` 
      }
    }, 
    "participant": "0@s.whatsapp.net"
  }  

  // Configuración inicial
  let ppBienvenida = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'https://files.catbox.moe/ryyt2j.jpg') // Imagen de bienvenida (predeterminada o perfil)
  let ppDespedida = 'https://files.catbox.moe/ryyt2j.jpg' // Imagen personalizada para despedida (enlace alternativo)
  
  let imgBienvenida = await (await fetch(ppBienvenida)).buffer()
  let imgDespedida = await (await fetch(ppDespedida)).buffer() // Buffer de la imagen de despedida
  
  let chat = global.db.data.chats[m.chat]
  let groupSize = participants.length

  // Ajustar tamaño del grupo
  m.messageStubType == 27 ? groupSize++ : 
  (m.messageStubType == 28 || m.messageStubType == 32) && groupSize--

  // Mensaje de BIENVENIDA (imagen de perfil o predeterminada)
  if (chat.welcome && m.messageStubType == 27) {
    const mention = m.messageStubParameters[0].split('@')[0]
    const bienvenida = `*${global.welcom1}`.trim()
    
    await conn.sendMini(
      m.chat, 
      'Ｇｘ Ｓｔｏｒｅ Ｂｏｔ',
      dev, 
      bienvenida, 
      imgBienvenida, 
      imgBienvenida, 
      redes, 
      fkontak
    )
  }

  // Mensaje de DESPEDIDA (imagen personalizada)
  if (chat.welcome && (m.messageStubType == 28 || m.messageStubType == 32)) {
    const mention = m.messageStubParameters[0].split('@')[0]
    const bye = `${global.welcom2}`.trim()
    
    await conn.sendMini(
      m.chat, 
      'Ｇｘ Ｓｔｏｒｅ Ｂｏｔ',
      dev, 
      bye, 
      imgDespedida, // Imagen diferente para despedida
      imgDespedida, 
      redes, 
      fkontak
    )
  }
}
