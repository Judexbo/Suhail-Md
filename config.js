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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_19_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxODAsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDMwLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NyxcbiAgICAgICAgODIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMSxcbiAgICAgICAgNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU0LFxuICAgICAgICA0MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTYwLFxuICAgICAgICA4MixcbiAgICAgICAgNTYsXG4gICAgICAgIDYxLFxuICAgICAgICA3NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjE3LFxuICAgICAgICA3NixcbiAgICAgICAgMTIwLFxuICAgICAgICAyOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDUzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDcyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDkyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjksXG4gICAgICAgIDM5LFxuICAgICAgICAxOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDgwLFxuICAgICAgICAxODMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTksXG4gICAgICAgIDM4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzksXG4gICAgICAgIDMxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMSxcbiAgICAgICAgODIsXG4gICAgICAgIDEyNixcbiAgICAgICAgNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAzMixcbiAgICAgICAgMjQxLFxuICAgICAgICAxODEsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDMyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAzNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQ5LFxuICAgICAgICA1LFxuICAgICAgICA2OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTgzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTU3LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTY4LFxuICAgICAgICA2MixcbiAgICAgICAgMzUsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTksXG4gICAgICAgIDg4LFxuICAgICAgICA1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTIwLFxuICAgICAgICA1NixcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDk5LFxuICAgICAgICA0NyxcbiAgICAgICAgODQsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMixcbiAgICAgICAgMjM2LFxuICAgICAgICA3OSxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA2MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI1LFxuICAgICAgICA5NixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDQ1LFxuICAgICAgICA4MixcbiAgICAgICAgNTQsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjksXG4gICAgICAgIDYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzksXG4gICAgICAgIDg1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMixcbiAgICAgICAgOTMsXG4gICAgICAgIDUyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjA4LFxuICAgICAgICA1OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzksXG4gICAgICAgIDc0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ3dWpzc05rS2NrUENUb0V3ZjZtK29kTGR2N2hHN2tqZVc4L3B3QlN1WVowPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJZekMwTExCSVF1MlpvUk1ZVUNQU2hnXCIsXG4gIFwicGhvbmVJZFwiOiBcImU1ZjI0YmUxLTNmOTAtNDIxYy04YTE1LWEzNTBmODRiNTU4MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNyxcbiAgICAgIDExOCxcbiAgICAgIDE2LFxuICAgICAgMzQsXG4gICAgICAyNDQsXG4gICAgICA4OCxcbiAgICAgIDE1NCxcbiAgICAgIDQ1LFxuICAgICAgMjAwLFxuICAgICAgMTc2LFxuICAgICAgMjEzLFxuICAgICAgMCxcbiAgICAgIDE1NyxcbiAgICAgIDQwLFxuICAgICAgMjM1LFxuICAgICAgMTEsXG4gICAgICAzMixcbiAgICAgIDE3OSxcbiAgICAgIDIwMyxcbiAgICAgIDE0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI3LFxuICAgICAgNDEsXG4gICAgICA3MSxcbiAgICAgIDExLFxuICAgICAgMTQyLFxuICAgICAgMTc2LFxuICAgICAgMTk5LFxuICAgICAgMjUyLFxuICAgICAgMTc4LFxuICAgICAgMjEzLFxuICAgICAgODMsXG4gICAgICAyOSxcbiAgICAgIDk2LFxuICAgICAgNjUsXG4gICAgICAxNTcsXG4gICAgICAxMCxcbiAgICAgIDEyMSxcbiAgICAgIDE4MixcbiAgICAgIDM2LFxuICAgICAgMjAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdCRjdTQ1pEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDYzNjIyODY5OjM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTcyMjc1ODI3MTE2MzozNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJek9qeklReTRHenRRWVlGeUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkJUYWZMN0I4UVNkbkNPV2dEaWRSQlY3NDltNTJDV1VId0FEcE1LajNyM3c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicXJNUWFzMHV6MnRVVVNpQ1ZqM0wxS3REVEx5RGhHMFlaT1hsRmswc0JLT1lZOWVKTTViUyttQmRMMDJpRDNrMkpGQXozZjN5RmtEM2tMNE1ROWhOQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZWxDNmViMmkycXhSTVNrbURYTTBHdGtHWkVVdzdIQXc5R0ZFMEdRYmhaZlRSZVFnaThhaDNndWQzUjd6K09XaVZDenpkb2U0djFWSzl6Z3J0QTdCQkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA2MzYyMjg2OTozNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA4MSxcbiAgI"  // PUT your SESSION_ID 


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
