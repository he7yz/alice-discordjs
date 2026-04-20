const ollama = require('../utilities/OllamaClient.js');

const PREFIX = 'alice';

module.exports = {
    async onMessage(message) {
        if (!message.content.toLowerCase().startsWith(PREFIX)) return;

        const prompt = message.content.slice(PREFIX.length).trim();
        if (!prompt) return;

        try {
            const typing = message.channel.sendTyping();
            const reply = await ollama.chat('llama3', prompt);
            await typing;
            await message.reply(reply.slice(0, 2000));
        }
        catch (err) {
            console.error('[Ollama] Error:', err.message);
            await message.reply('Alice isnt able to think right now.');
        }
    }
};