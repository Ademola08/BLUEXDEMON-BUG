require("./database/module")

global.storename = "𝙱𝙻𝚄𝙴 𝙳𝙴𝙼𝙾𝙽"
global.dana = "2348164503991"
global.qris = "-"
global.owner = "2348164503991"
global.namabot = "𝙱𝙻𝚄𝙴x𝙳𝙴𝙼𝙾𝙽"
global.nomorbot = "2348164503991"
global.namaCreator = "𝙱𝙻𝚄𝙴 𝙳𝙴𝙼𝙾𝙽"
global.linkyt = "https://whatsapp.com/channel/0029Vah3fKtCnA7oMPTPJm1h"
global.autoJoin = false
global.antilink = false
global.versisc = '3.2'
global.delayjpm = 5500
global.codeInvite = ""
global.imageurl = 'https://l.top4top.io/p_32188bbq00.jpg'
global.isLink = 'https://whatsapp.com/channel/0029Vah3fKtCnA7oMPTPJm1h'
global.packname = "𝙱𝙻𝚄𝙴 𝙳𝙴𝙼𝙾𝙽 ™"
global.author = "𝕯𝖊𝖒𝖔𝖓"
global.jumlah = "5"
global.emoji = "💕"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
