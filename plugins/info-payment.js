let handler = async (m, { conn }) => {
let info = `
*${htki} PAYMENT ${htka}*

©2022 Sycoryz
`
const sections = [
   {
	title: `✃ sᴇᴡᴀ`,
	rows: [
	    {title: "💳Dana", rowId: '.dana', description: 'Bayar melalui Dana' },
	{title: "💵 Pulsa Telkomsel", rowId: '.pulsasmartfren', description: 'Bayar melalui pulsa' },
	{title: "💵 Pulsa Telkomsel", rowId: '.pulsastri', description: 'Bayar melalui pulsa' },
	]
    }, 

]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "C E K",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['pay', 'payment']
handler.tags = ['info']
handler.command = /^(pay(ment)?|payment)$/i
handler.private = true

export default handler
