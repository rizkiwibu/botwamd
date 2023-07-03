const fs = require('fs')

exports.groupResponse_Remove = async (kurrxd, update) => {
try {
ppuser = await kurrxd.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
}
const metadata = await kurrxd.groupMetadata(update.id)
for (let participant of update.participants) {
try{
let metadata = await kurrxd.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'remove'){
var button = [{ buttonId: '!text_grup', buttonText: { displayText: 'Bye👋'}, type: 1 }]
await kurrxd.sendMessage(
update.id, 
{
text: `╭━━━━━━━━━━━━━━━┅•ิ.•ஐ\n│ *📌Leave To ${metadata.subject}* \n└┬────────────┾•ิ.•┽\n┌┤Sayonara👋 @${num.split("@")[0]}\n││ \n└────────────┾•ิ.•┽`,
footer: metadata.subject, 
mentions: [num] })
}
}
} catch (err) {
console.log(err)
}
}   
}
  
exports.groupResponse_Welcome = async (kurrxd, update) => {
try {
ppuser = await kurrxd.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
}
const metadata = await kurrxd.groupMetadata(update.id)   
for (let participant of update.participants) {
try{
let metadata = await kurrxd.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'add') {
var button = [{ buttonId: '!text_grup', buttonText: { displayText: 'Welcome👋'}, type: 1 }]
await kurrxd.sendMessage(
update.id, 
{ 
text: `╭━━━━━━━━━━━━━━━┅•ิ.•ஐ\n│ *📌Welcome To ${metadata.subject}* \n└┬────────────┾•ิ.•┽\n┌┤Haii👋 @${num.split("@")[0]}\n││ \n││——[ *ɪɴᴛʀᴏ* ]——\n││ 📛 : _@${num.split("@")[0]}_\n││ 🔢 : _${num.split("@")[0]}_\n││ 🗿🗿ADMIN: CRAZY HOSTING🌾\n││ *GRUP1:* https://chat.whatsapp.com/EmKgDZQUdWRJr0TGGRdRI2\n││ *GRUP2:* https://chat.whatsapp.com/J3v67zkVmIa65EOHNZ941V\n││ 🏅 : _${metadata.participants.length ? metadata.participants.length : "Undefined"}_\n|| 📄 *Deskripsi :*
${metadata.desc ? metadata.desc : 'Tidak ada deskripsi'} ||└────────────┾•ิ.•┽`,
footer: metadata.subject,
mentions: [num] })
}
}
} catch (err) {
console.log(err)
}
}   
}
  
exports.groupResponse_Promote = async (kurrxd, update) => {  
const metadata = await kurrxd.groupMetadata(update.id)   
for (let participant of update.participants) {
try{
let metadata = await kurrxd.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'promote') {
var button = [{ buttonId: '!text_grup', buttonText: { displayText: 'Selamat🎉'}, type: 1 }]
await kurrxd.sendMessage(
update.id, 
{ 
text: `*@${num.split("@")[0]} Naik jabatan jadi admin grup*`,
footer: metadata.subject,
mentions: [num] })
}
}
} catch (err) {
console.log(err)
}
}   
}
  
exports.groupResponse_Demote = async (kurrxd, update) => {  
const metadata = await kurrxd.groupMetadata(update.id)   
for (let participant of update.participants) {
try{
let metadata = await kurrxd.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'demote') {
var button = [{ buttonId: '!text_grup', buttonText: { displayText: 'Selamat🎉'}, type: 1 }]
await kurrxd.sendMessage(
update.id, 
{ 
text: `*@${num.split("@")[0]} Turun jabatan menjadi member biasa*`,
footer: metadata.subject,
mentions: [num] })
}
}
} catch (err) {
console.log(err)
}
}   
}