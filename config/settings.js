const fs = require('fs')
const chalk = require('chalk')
// EDIT DISINI
global.owner = ['6285878836361','6285878836361'] // no gw ( 5285 ) jan di hapus nyet
global.packname = 'Iky crate panel'
global.author = 'BY IKY BOT'
global.sessionName = 'session' // nama session
global.domain = 'https://panel.arxzydev.xyz' // Isi Domain Lu
global.apikey = 'ptla_YvzLVJChKa9CfcrqyqPbHDBu3TJzzZWDSycKJU9eoQj' // Isi Apikey Plta Lu
global.capikey = 'ptlc_wJO5ofIgkqOjlc3AHpOLGyaERgNUDJyWleYm5o1c61p' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})