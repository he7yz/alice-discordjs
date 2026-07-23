const { SlashCommandBuilder } = require('discord.js');
const ollama = require('../utilities/OllamaClient.js');

const REPLY_CHANNEL_ID = '1458475370947805285';
const MODEL = 'llama3';

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ask')
        .setDescription('Chat with Alice')
        .addStringOption(option =>
            option
                .setName('prompt')
                .setDescription('What do you want to ask uwu?')
                .setRequired(true)
        ),

    async execute(interaction) {
        const prompt = interaction.options.getString('prompt');
        await interaction.deferReply();

        const typingInterval = setInterval(() => interaction.channel.sendTyping(), 8000);

        try {
            const reply = await ollama.chat(MODEL, prompt);
            clearInterval(typingInterval);
            await interaction.editReply(reply.slice(0, 2000));
        }
        catch (err) {
            clearInterval(typingInterval);
            console.error('[Ollama] Error:', err.message);
            await interaction.editReply('Alice is broken lol.');
        }
    },
    
    async onMessage(message) {
        if (message.author.bot) return;
        if (!message.content.toLowerCase().includes('alice')) return;

        const replyChannel = message.client.channels.cache.get(REPLY_CHANNEL_ID);
        if (!replyChannel) return;

        await replyChannel.sendTyping();
        const typingInterval = setInterval(() => replyChannel.sendTyping(), 8000);
        
        try {
            const reply = await ollama.chat(MODEL, message.content);
            clearInterval(typingInterval);
            await replyChannel.send(reply.slice(0, 2000));
        }
        catch (err) {
            clearInterval(typingInterval);
            console.error('[Ollama] Error:', err.message);
            await replyChannel.send('Alice is not able to think right now');
        }
    }
};