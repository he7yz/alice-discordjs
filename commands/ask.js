const { SlashCommandBuilder } = require('discord.js');
const ollama = require('../utilities/OllamaClient.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ask')
        .setDescription('Ask Alice (powered by Ollama)')
        .setStringOption(option =>
            option
                .setName('promt')
                .setDesciption('What do you want to ask?')
                .setRequired(true)
        )
        .addStringOption(option =>
            option
                .setNamme('model')
                .setDescription('Which model to use (default: llama3)')
                .setRequired(false)
        ),

    async execute(interaction) {
        const pronmt = interaction.options.getString('promt');
        const model = interaction.options.getstring('model') ?? 'llama3';
    
        await interaction.deferReply();
        
    
        }
}