require('dotenv').config();
const fs = require('fs');
const chalk = require('chalk');

// Contact details
global.sessionid = process.env.SESSION_ID || '{"noiseKey":{"private":{"type":"Buffer","data":"CCts4EodjRhO3YCD/6grb4nkdb5d/XUYRSBDvfnfgVQ="},"public":{"type":"Buffer","data":"oQtIDeuPfYTawFDsRYWcZpfjLtFbW1icIlA2tqCOtE8="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"sF0m2Qp3mHWj3eLcG7SBhLMv62wmZQiQhfZsIHtB7Eg="},"public":{"type":"Buffer","data":"wXGoQxxC7cceW5R9uG0qbtdjNBzvvQWqo4AaCThLUhg="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"sCS8Ii/L6s+IeGQaiwS2Wu/3QAzpvaH8zEZSqGtMZ1M="},"public":{"type":"Buffer","data":"HgSlPZnImlKr8LdFmHbaHLlCU/kr0uBOy3c+rvH36i0="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"eGfEt/yZtj7/XCeIH10E/VnZyl88vYpXJTCr97198G4="},"public":{"type":"Buffer","data":"Flt0JZbmGPutCD7fvXK6pWsxFvenlpdNiWyz62ocOyA="}},"signature":{"type":"Buffer","data":"O/4MF6CZ2ddC+EdUYQV3Io26vKJHgKtyrtq78F8ar4wi3ov708WQQg3Js0SnTaScbMQz1SS/aTXeXPpSFMX3jw=="},"keyId":1},"registrationId":179,"advSecretKey":"SM+8/aA86fvv6O+Nth9HGgL8Y62XX4e/iCn1gfbipHM=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"M5H7MTGZ","me":{"id":"255686621811:1@s.whatsapp.net","name":"CEOARENA","lid":"49465692028948:1@lid"},"account":{"details":"CPib5OcFEJ+/2MMGGAEgACgA","accountSignatureKey":"FFH16L8FCRKCTW7zBOhrUbSH8gHk0orylG7lGV1SWCg=","accountSignature":"vRnCrCRrmNXnkaUXitOFKf6MkFzw19SrrPLHD0Y7Qc38FC6kXs+kXnke0X5HySb3U4WEiZ5LQrNKVDAHJG9ZCA==","deviceSignature":"38pexszZ8mHYPwLaO4SVYARXK35Wja+PUX9zlHjrCzYHyCM4O9z7T74F+EGTGuro15uO5FS7HUJZNlgQeVL9hg=="},"signalIdentities":[{"identifier":{"name":"255686621811:1@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BRRR9ei/BQkSgk1u8wToa1G0h/IB5NKK8pRu5RldUlgo"}}],"platform":"smba","routingInfo":{"type":"Buffer","data":"CAUIAg=="},"lastAccountSyncTimestamp":1752571809,"lastPropHash":"nm3Bb","myAppStateKeyId":"AAAAAPzf"}';
global.ytname = process.env.YT_NAME || "YT: @EliteProTech";
global.socialm = process.env.SOCIAL_M || "GitHub: EliteProTech";
global.location = process.env.LOCATION || "Nigeria, Port Harcourt";

// Creator details
global.ownernumber = process.env.OWNER_NUMBER || '255686621811';
global.ownername = process.env.OWNER_NAME || 'ElitePro';
global.botname = process.env.BOT_NAME || 'ELITE-PRO-V1';

// Default settings 
global.prefix = process.env.PREFIX || '.';
// Settings: true=enable false=disable
global.autoRecording = process.env.AUTO_RECORDING === 'false';
global.autoTyping = process.env.AUTO_TYPING === 'false';
global.autorecordtype = process.env.AUTO_RECORD_TYPE === 'false';
global.autoread = process.env.AUTO_READ === 'false';
global.autobio = process.env.AUTO_BIO !== 'false'; // default true
global.anti92 = process.env.ANTI_92 === 'true';
global.autoswview = process.env.AUTO_SW_VIEW !== 'true'; // default true
global.welcome = process.env.WELCOME !== 'false'; // default true
global.autoreact = process.env.AUTO_REACT === 'false';
global.autolikestatus = process.env.AUTO_LIKE_STATUS === 'true';

// Thumbnail profile picture
global.elitepropp = process.env.ELITE_PRO_PP || 'https://i.ibb.co/jk0ynvbn/7a8c4b5b617fa11a1e9a61190f427546.jpg';
// Default emoji
global.themeemoji = process.env.THEME_EMOJI || '👨‍💻';


// Sticker details
global.packname = process.env.PACKNAME || 'Sticker By';
global.author = process.env.AUTHOR || 'ELITEPRO\n\nContact: +2348109263390';
// Default settings 2
global.typemenu = process.env.TYPE_MENU || 'v2';
global.wm = process.env.WM || "Youtube @EliteProTech";
global.link = process.env.LINK || 'https://whatsapp.com/channel/0029VaXaqHII1rcmdDBBsd3g';

// Text bug
global.xbugtex = {
    xtxt: '👨‍💻ELITE-PRO👨‍💻',
};

// Reply messages
global.mess = {
    done: '*⿻ DONE: Task completed ✔️*',
    prem: '*⦿ This command is made for premium users.⁉️*',
    admin: '*⦿ This command is made for group admins.‼️*',
    botAdmin: '*⦿  Make bot admin to access commands⿻*',
    owner: '*⦿This commands is made for bot owner.*',
    group: '*⦿ This command is made for group chat❕*',
    private: '*⦿ This command is made for private chat ⭕*',
    wait: '*_⚙️PROCESSING DATA......_*',
    error: '*‼️AN ERROR OCCUR‼️*',
};

global.thumb = fs.readFileSync('./EliteProMedia/thumb.jpg');

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Update'${__filename}'`));
    delete require.cache[file];
    require(file);
});
