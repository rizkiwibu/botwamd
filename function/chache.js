const fs = require('fs');
const chalk = require('chalk')
const moment = require('moment')
const time = moment(new Date()).format('HH:mm:ss DD/MM/YYYY')

function uncache(module = '.') {
return new Promise((resolve, reject) => {
try {
delete require.cache[require.resolve(module)]
resolve()
} catch (e) {
reject(e)
}
})
}

function nocache(module, cb = () => { }) {
console.log(chalk.greenBright(`Module ${module} Di Pantau Oleh OHLX`))
fs.watchFile(require.resolve(module), async () => {
await uncache(require.resolve(module))
cb(module)
})
}

// Auto Update Server
require('../index')
nocache('../index', module => console.log(chalk.greenBright('[ OHLX BOT ]  ') + time + chalk.cyanBright(` "${module}" Telah diupdate!`)))

module.exports = { nocache, uncache }