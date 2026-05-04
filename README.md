<div align="center">
  <img alt="MMUCraft" src="https://cdn.discordapp.com/icons/1415012956038627541/94adaecc79816ea165fc75936c9c5181.webp?size=1024" height ="100" width="100"></img>
  <br />
  <img alt="Bob" src="https://cdn.discordapp.com/avatars/1416043684360622180/4238a5462d6adb241da8cc36d6218fc3.webp?size=1024" height="250" width="250"></img>
  <h2 align="center">Alice</h2>
  <h3 align="center">A discord.js Bot, tailor-made for MMUCraft Discord</h3>
  <img alt="MMUCraft" src="https://cdn.discordapp.com/attachments/1415013676749946885/1493280107446665559/image.png?ex=69de64f9&is=69dd1379&hm=dbefbe642f2325112c3184e96b043e727b178ee97b1af35ce8f096f1e10646b9&" height ="1080" width="1920"></img>
  <br />
</div>

# Features
- Latency Ping
- Welcomer
- Captcha Verification Layer
- Auto Delete
- Auto Thread & React for #Art Channel
- Custom Embed Messages (Hardcoded)
- AI Chatbot (powered by Ollama)

# Installation
Requires `npm` and `node.js` (v22.19.0 LTS) for installation.
```bash
$ npm install
```

Then, download these dependencies.
- `discord.js` (v14.22.1+)
- `discord-api-types` (v0.38.26+)
- `@discordjs/rest` (v2.6.0+)
- `captcha-canvas` (v3.3.4+)
- `dotenv` (v17.2.2+)
- `axios` (v1.13.2+)
- `canvas` (v3.2.0+)
- `gif-encoder-2` (v1.0.5+)
- `gif-frames` (v1.0.1+)
- `image-size` (v2.0.2+)
- `jimp` (v1.6.0+)
```bash
$ npm install discord.js@14.22.1 discord-api-types@0.38.26 @discordjs/rest@2.6.0 captcha-canvas@3.3.4 dotenv@17.2.2 axios@1.13.2 canvas@3.2.0 gif-encoder-2@1.0.5 gif-frames@1.0.1 image-size@2.0.2 jimp@1.6.0
```

Install Ollama
-

For Windows, paste this in PowerShell
```powershell
irm https://ollama.com/install.ps1 | iex
```

For Linux, paste this in your Terminal
```bash
$ curl -fsSL https://ollama.com/install.sh | sh
```

Next, rename `.env_examples` to `.env` and make sure to insert the credentials.
-

Lastly, run Alice!
```bash
$ node .
```
