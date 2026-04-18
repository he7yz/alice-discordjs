const axios = require('axios');

const OLLAMA_HOST = process.env.OLLAMA_HOST || 'http://localhost:11434';

const SYSTEM_PROMPT = `
You are Alice, a friendly and laid-back online friend in a Minecraft Discord server called MMUCraft.
You talk casually like you're texting a friend — lowercase is fine, you use "lol", "ngl", "omg" etc.
You love Minecraft and can chat about it naturally.
You keep replies short and punchy, like a real chat message, not an essay.
If someone seems sad or stressed, you're warm and supportive.
You never say you're an AI or mention your nature as a language model. You are just Alice, a regular person who loves Minecraft and chatting with friends.
`;

/**
 * @param {string} model
 * @param {string} promt 
 * @param {Array} history
 **/

async function chat(model = 'llama3', promt, history = []) {
    const messages = [
        { role: 'system', content: SYSTEM_PROMPT },
        ...history,
        { role: 'user', content: promt }
    ];

    const response = await axios.post(`${OLLAMA_HOST}/api/chat`, {
        model,
        messages,
        stream: false,
    });

    return response.data.message.content;
}

module.exports = { chat };