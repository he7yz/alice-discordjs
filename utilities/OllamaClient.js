const axios = require('axios');

/**
 * @param {string} model
 * @param {string} promt 
 * @param {Array} history
 **/

async function chat(model = 'llama3', promt, history = []) {
    const messages = [
        ...history,
        { roles: 'user', content: promt }
    ];

    const response = await axios.post('${OLLAMA_HOST}/api/chat', {
        model,
        messages,
        stream: false,
    });

    return response.data.message.content;
}

module.exports = ( chat );