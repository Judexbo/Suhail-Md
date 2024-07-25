const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_13_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTcyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTk4LFxuICAgICAgICAyMSxcbiAgICAgICAgMjIyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI3LFxuICAgICAgICAxODEsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MixcbiAgICAgICAgNDAsXG4gICAgICAgIDYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjUyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDksXG4gICAgICAgIDIwNixcbiAgICAgICAgNTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjI1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDMxLFxuICAgICAgICA0LFxuICAgICAgICAxMjksXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDU2LFxuICAgICAgICA2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDksXG4gICAgICAgIDQxLFxuICAgICAgICA4MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDU4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDY2LFxuICAgICAgICA2MyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxODMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTgwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODYsXG4gICAgICAgIDM1LFxuICAgICAgICA0NCxcbiAgICAgICAgNTksXG4gICAgICAgIDExNixcbiAgICAgICAgODAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA1LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDY1LFxuICAgICAgICA5NixcbiAgICAgICAgNjcsXG4gICAgICAgIDYwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjU0LFxuICAgICAgICA5NixcbiAgICAgICAgNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQ3LFxuICAgICAgICA4NCxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTUsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjIzLFxuICAgICAgICA4MCxcbiAgICAgICAgOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDc0LFxuICAgICAgICAxODMsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjExLFxuICAgICAgICA5OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDY0LFxuICAgICAgICA0LFxuICAgICAgICA0NSxcbiAgICAgICAgODUsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDUsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI4LFxuICAgICAgICA0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDksXG4gICAgICAgIDU2LFxuICAgICAgICA5MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTUwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDk2LFxuICBcImFkdlNlY3JldEtleVwiOiBcImZVN25FMnNpT2UzUmVPeVlnVDB5YlI2anEwVzI2NUI0bTVFOXpXeWtGYTg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInMxNTdod2xMUi1hRy1pNkFqTWFjcFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOWM0ZWEwNzEtMDI0Mi00NTdjLWFmZWItYThmZjJiMTc0ZGY2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3LFxuICAgICAgMTk2LFxuICAgICAgMjE0LFxuICAgICAgMjA4LFxuICAgICAgOTEsXG4gICAgICAxMDIsXG4gICAgICAxNDksXG4gICAgICAyMDUsXG4gICAgICA3MixcbiAgICAgIDIzMixcbiAgICAgIDgxLFxuICAgICAgMzMsXG4gICAgICAyNSxcbiAgICAgIDM0LFxuICAgICAgNixcbiAgICAgIDM1LFxuICAgICAgODcsXG4gICAgICA3NixcbiAgICAgIDIzNCxcbiAgICAgIDI0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjYsXG4gICAgICAxMCxcbiAgICAgIDQ2LFxuICAgICAgMTg1LFxuICAgICAgMTY1LFxuICAgICAgMTIxLFxuICAgICAgMjUsXG4gICAgICAxOTgsXG4gICAgICAyMzksXG4gICAgICA1MyxcbiAgICAgIDEzMyxcbiAgICAgIDE4NixcbiAgICAgIDUxLFxuICAgICAgNjgsXG4gICAgICAxMzEsXG4gICAgICA5MixcbiAgICAgIDEyMCxcbiAgICAgIDI1NSxcbiAgICAgIDgwLFxuICAgICAgOTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWE1DTjZYMldcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNjM2MjI4Njk6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE5NzIyNzU4MjcxMTYzOjIyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0l6T2p6SVExWWlGdFFZWUN5QUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQlRhZkw3QjhRU2RuQ09XZ0RpZFJCVjc0OW01MkNXVUh3QURwTUtqM3Izdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJYUUhHdjcwYTAraDV3UWM1ZnZIeTU1algvblE2ano3ZWxQQmdVczMwSVpSM2JaS21yNThmVkNmMHNraGtmTjBHYVZpUzdBTXlMZ0xFb1JBYkcrZExEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJPSWVvak1CUVd6d1Qvb1pTSnY2T0ovNWVNVExQdmhLR01QTTJEZVZ0eTRMVnZOeXlrT2RlMndpZ1pYUXMyZjlINDcvcTFlN1BaYUQ3RTNTeWptOUdoZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDYzNjIyODY5OjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxODQ0ODI0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQVYvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBVi8uanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
