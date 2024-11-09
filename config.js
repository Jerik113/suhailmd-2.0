const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348065473404";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "null"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_57_11_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzEsXG4gICAgICAgIDEzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODcsXG4gICAgICAgIDQyLFxuICAgICAgICAxODUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTY1LFxuICAgICAgICA2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxODYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTg5LFxuICAgICAgICA5MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDExMixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDY5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjksXG4gICAgICAgIDk0LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTYzLFxuICAgICAgICA5NixcbiAgICAgICAgMTk2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDYsXG4gICAgICAgIDksXG4gICAgICAgIDU1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTU4LFxuICAgICAgICAzMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTUwLFxuICAgICAgICA1NyxcbiAgICAgICAgOSxcbiAgICAgICAgNyxcbiAgICAgICAgMzksXG4gICAgICAgIDE4NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTksXG4gICAgICAgIDYyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgODIsXG4gICAgICAgIDQsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDY3LFxuICAgICAgICA5NixcbiAgICAgICAgMTksXG4gICAgICAgIDYyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOCxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDU1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzksXG4gICAgICAgIDExLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDc4LFxuICAgICAgICAxODgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTAwLFxuICAgICAgICA0NSxcbiAgICAgICAgMjMwLFxuICAgICAgICA1MixcbiAgICAgICAgMTksXG4gICAgICAgIDk5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDY3LFxuICAgICAgICAzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTksXG4gICAgICAgIDU3LFxuICAgICAgICAxODksXG4gICAgICAgIDMzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjIwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDc1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjAyLFxuICAgICAgICA3OSxcbiAgICAgICAgNDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTA4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjksXG4gICAgICAgIDQ5LFxuICAgICAgICAyMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTksXG4gICAgICAgIDYwLFxuICAgICAgICA0NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDksXG4gICAgICAgIDE3NixcbiAgICAgICAgODQsXG4gICAgICAgIDIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1OCxcbiAgICAgICAgMjE2LFxuICAgICAgICA0OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTcyLFxuICAgICAgICAzMCxcbiAgICAgICAgNDksXG4gICAgICAgIDYwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjksXG4gICAgICAgIDU1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDYzLFxuICAgICAgICA4OCxcbiAgICAgICAgMixcbiAgICAgICAgMTI4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTQzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTY1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjIzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjhsRHBGMWJXWERIQUdDL2JzVG40ME9SMmx1NEZSR1llYmFsbWV3THBVcGs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkc5ZWRhUk50VDF5VDFCZ0lFODZXLVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTU3YzE3YmYtOTZlMy00MjdlLWIwMWItYTMyZGNlMGIyNjFmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU3LFxuICAgICAgODIsXG4gICAgICAxMjEsXG4gICAgICAxODQsXG4gICAgICAxNjYsXG4gICAgICAzOSxcbiAgICAgIDU2LFxuICAgICAgODUsXG4gICAgICAxNDAsXG4gICAgICAxNTEsXG4gICAgICA5LFxuICAgICAgMjUwLFxuICAgICAgMyxcbiAgICAgIDMsXG4gICAgICA1MSxcbiAgICAgIDkwLFxuICAgICAgMTIzLFxuICAgICAgNzIsXG4gICAgICAxNjcsXG4gICAgICAyMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDYsXG4gICAgICAxNjgsXG4gICAgICAxOTUsXG4gICAgICAxNixcbiAgICAgIDc3LFxuICAgICAgMTg0LFxuICAgICAgODUsXG4gICAgICAxMTEsXG4gICAgICAyMTcsXG4gICAgICAxNzUsXG4gICAgICAxOTcsXG4gICAgICAxNTcsXG4gICAgICAyMjUsXG4gICAgICA1MyxcbiAgICAgIDE5NCxcbiAgICAgIDI0NixcbiAgICAgIDIyNCxcbiAgICAgIDE5LFxuICAgICAgMjMxLFxuICAgICAgNDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMzU4OFZKMUZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNjU0NzM0MDU6NjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQzNzI3NDY1MzA5NjM6NjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTktWeTc0SEVMblV2YmtHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJuaTRyT2wrK0k3REVJYWVMbTZJb004bTZhNHRXWDFpYmc4bTJwNjBYVVI4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIko0NW04RWUvQ01PdVJSNlBsalF4bnBFM1Z0T1JuaVZEWVpKRk81UmdMdFQ4Z05tejBpNm55UU1RKzI0bUFQOUtpK1dHSEtFcTFYVGRQMzI3NGhDb0F3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm5JbkxESnA3N3VRTDQ1S1pJcGg4cWZNbHNCaXUrMFVuMWRHRGVzemc2SEVXenFDK0xvWUZCWFEyaUhVMG0yZkxlK2NmMmVPSVlMSk9JSnNzbVZSampBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNjU0NzM0MDU6NjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAzMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxMTYwNjM2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRDNWXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEM1YuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJEWjk4MXVmUG45M3dUQzBNWTZ3djI0VTZpRUFBY28yc0M1ZU11SU0zWFpnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwMTAzMDMxODUsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzEwMDAwMTEzMDBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
