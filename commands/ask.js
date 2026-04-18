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

        try {
            const reply = await ollama.chat(MODEL, prompt);
            await interaction.editReply(reply.slice(0, 2000));
        }
        catch (err) {
            console.error('[Ollama] Error:', err.message);
            await interaction.editReply('Alice is broken lol.');
        }
    },
    
    async onMessage(message) {
        if (message.author.bot) return;
        if (!message.content.toLowerCase().includes('alice')) return;

        const replyChannel = message.client.channels.cache.get(REPLY_CHANNEL_ID);
        if (!replyChannel) return;

        try {
            await replyChannel.sendTyping();
            const reply = await ollama.chat(MODEL, message.content);
            await replyChannel.send(reply.slice(0, 2000));
        }
        catch (err) {
            console.error('[Ollama] Error:'. err.message);
            await interaction.editReply('Alice is not able to think right now');
        }
    }
};