const { EmbedBuilder } = require('discord.js');

module.exports = {
  trigger: 'sudo levelEmbed',
  execute(message) {
    const embed = new EmbedBuilder()
      .setAuthor({
        name: "Leveling & Rewards System",
        iconURL: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/00/Experience_Orb_Value_17-36.png/revision/latest?cb=20200216163127",
      })
      .setDescription("**NOTE: ** You must complete the sync setup to start earning EXP!")
      .addFields(
        {
          name: "💭 How Does It Work?",
          value: "Earn EXP by chatting in-game or on Discord! The more you chat, the more you receive! You can get in-game items, role perks, and even have a flashy role for you to assert your dominance.",
          inline: false
        },
        {
          name: "🎖️Ranks",
          value: "<@&1440739288043098245> ❯ **Lvl 5**\n<@&1440737330796302336> ❯ **Lvl 10**\n<@&1440737138864951296> ❯ **Lvl 15**\n<@&1440733530681507861> ❯ **Lvl 20**\n<@&1440735443330142260> ❯ **Lvl 25**\n<@&1442960130940469258> ❯ **Lvl 30**\n<@&1442963019834589337> ❯ **Lvl 35**\n<@&1442958535699861536> ❯ **Lvl 40**\n<@&1442959338795827291> ❯ **Lvl 45**\n<@&1442960603894251540> ❯ **Lvl 50**\n<@&1440731999563419781> ❯ **Lvl 60**\n<@&1440721475865804801> ❯ **Lvl 70**\n<@&1440720525407162508> ❯ **Lvl 80**\n<@&1440680470944682045> ❯ **Lvl 90**\n<@&1440674579935662151> ❯ **Lvl 100**",
          inline: false
        },
        {
          name: "Creeper",
          value: "- Iron x8 + Bread x32 + 5 exp levels",
          inline: false
        },
        {
          name: "Drowned",
          value: "- Increased Land Claim [100 blocks] + Emeralds x16 + 5 exp levels",
          inline: false
        },
        {
          name: "Phantom",
          value: "- TBD",
          inline: false
        },
        {
          name: "Enderman",
          value: "- Increased Land Claim",
          inline: false
        },
        {
          name: "Breeze",
          value: "- Breeze Rods x4",
          inline: false
        },
        {
          name: "Creaking",
          value: "- Increased Land Claim",
          inline: false
        },
        {
          name: "Blaze",
          value: "- TBD",
          inline: false
        },
        {
          name: "Ghast",
          value: "- Increased Land Claim",
          inline: false
        },
        {
          name: "Wither Skeleton",
          value: "- TBD",
          inline: false
        },
        {
          name: "Evoker",
          value: "- Increased Land Claim + Netherite Ingot x2 + Notch Apple",
          inline: false
        },
        {
          name: "Brute",
          value: "- TBD",
          inline: false
        },
        {
          name: "Elder Guardian",
          value: "- Increased Land Claim + Netherite Ingot x2 + Conduit",
          inline: false
        },
        {
          name: "Warden",
          value: "- Increased Land Claim + Netherite Ingot x2",
          inline: false
        },
        {
          name: "Wither",
          value: "- Increased Land Claim + Netherite Ingot x2 + Conduit",
          inline: false
        },
        {
          name: "Ender Dragon",
          value: "- Elytra + *T̶̡̨̢͙̫̖̳̪̳̮̞̼̟̼̼̻͔̹̺̰̮̩̫̮͓͚̣̲̠͎̪̼̲̘͙̦̞͎͖͚̱͓͈̲͙̺̈́̀̒͜͝h̵̡̢̺̲͖̥̺̖̬̟̝̺̱͕̻̪̜͕͈̱̺͈̖̤̙̿̋́̑̒̐̓̊͋̇̾̀́͑̏̂̄̄͆̈́̒̐̚e̶̮̤̟͔͕̘͕̹̭̠̮͙͚͓̲̦̎̈́̆̔̿̍̈́̀̂ͅ ̵̡̨̛͖̹̯̮̜͎̩̤̗̙͈̍̾͐́̽̿̌̇̄͌̋̊̋̏̉͛̀̀̃̿̅̓͜͠͝͝S̵̢̛̛̠̥̬͙̱̳͇̤̯̜͎̫̳̀̽͗̿͌͋͗͆̎̊̈́́̔̎̕͘̕͝t̵̢̙̬͓͔̟͍͆͗̏͊̋͊̑̽͊̄̿͋̋́͂̋͌̈́̂̇̈́̊͆̓͌͒͛̆̉̍̓̏̚͝͝͝͝i̴̢̧̡̢̻̤̪̠̻̭̞̬̻̖̤͇̮̲̩̓̀͑̈͊̒͊̍̒̆̑͑̌͋̽͛̆̉̄̕̚͠č̷̨̢̢͉̜̻̱͎͍̲̪̝̦̻̱͕̻̱͙̗̺̭̹̼̇̊̅̎̎͒͑́̈́̊̒̈́͆͋̀͐̈̄̄̓͐̓̊̎̿́̾̊̓͋̽͘͘͝͝͠͠k̷̨̡̮͕̖̝̙̥̮̬̫̜̯̟̩͍̰̗̺͍͕̟͖͕̱̩̝̱̞̻̣̩̥̗̮͔͍̠̩̓̄̂̑͑̂̇̀̽̈́̚͘͜͝*",
          inline: false
        },
      )
      .setImage("https://media.discordapp.net/attachments/1415362853791076362/1489615850293039184/discord-minecraft_link.gif?ex=69d1105e&is=69cfbede&hm=6037f2a801dd20c4dcc6a6418f6ad9c875d20e08b3fbc694012f553b27fbdef8&=")
      .setThumbnail("https://media.discordapp.net/attachments/1415013676749946885/1445664289728762011/bob_adventure_11.png?ex=69d0b0c9&is=69cf5f49&hm=285f8d1476d20fef750b4872cecaca0b9f612f9562662a44aba0c177f381ba77&=&format=webp&quality=lossless&width=1353&height=902")
      .setColor("#ffffff")
      .setFooter({
        text: "MMUCraft Discord",
        iconURL: "https://images-ext-1.discordapp.net/external/WtkqHMdnLHEjSElPSXl-ByvwPLrYRMdwh5GPHkUjQvw/%3Fsize%3D96/https/cdn.discordapp.com/emojis/1415316601976393788.webp?format=png",
      })
      .setTimestamp();
        message.channel.send({ embeds : [embed] });
  }
};
