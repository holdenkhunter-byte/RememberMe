const axios = require('axios');

class Summarizer {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.apiUrl = 'https://api.openai.com/v1/chat/completions'; // Change URL if using Claude API
    }

    async generateSummary(conversation) {
        const prompt = this.createPrompt(conversation);
        const headers = {
            'Authorization': `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json'
        };

        try {
            const response = await axios.post(this.apiUrl, {
                model: 'gpt-3.5-turbo', // Specify model here
                messages: [{role: 'user', content: prompt}],
            }, {headers});

            return response.data.choices[0].message.content;
        } catch (error) {
            console.error('Error generating summary:', error);
            throw new Error('Summary generation failed.');
        }
    }

    createPrompt(conversation) {
        // Assuming conversation is an array of messages with {role, content}
        return `Summarize the following conversation and extract structured memory:
        ${conversation.map(msg => `${msg.role}: ${msg.content}`).join('\n')}`;
    }
}

module.exports = Summarizer;