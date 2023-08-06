const fs = require('fs')
const chalk = require('chalk')
// EDIT DISINI
global.owner = ['6285878836361','6285878836361'] // no gw ( 5285 ) jan di hapus nyet
global.packname = 'Iky crate panel'
global.author = 'BY IKY BOT'
global.sessionName = 'session' // nama session
global.domain = 'https://ikystore.panellku.biz.id' // Isi Domain Lu
global.apikey = 'ptla_zRMPOpIdQMmXOHrVzkAz6kBGUp4XEhXAUkAx0yrycMb' // Isi Apikey Plta Lu
global.capikey = 'ptlc_jUj5DZZRJOuOAbXlZMIUdj2FiHAqFO05Ti3GhBnlGuP' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})
