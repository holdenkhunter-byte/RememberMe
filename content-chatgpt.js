// content-chatgpt.js

// Function to capture user messages and AI responses
const captureChatMessages = () => {
    const chatContainer = document.querySelector('.chat-container'); // Adjust selector based on actual structure
    const userMessageSelector = '.user-message'; // Adjust according to the actual selector for user messages
    const aiMessageSelector = '.ai-message'; // Adjust according to the actual selector for AI responses

    const chatObserver = new MutationObserver(() => {
        const userMessages = chatContainer.querySelectorAll(userMessageSelector);
        const aiMessages = chatContainer.querySelectorAll(aiMessageSelector);

        userMessages.forEach((msg, index) => {
            const messageText = msg.innerText;
            console.log(`User: ${messageText}`); // Replace with actual logging or storage mechanism
        });

        aiMessages.forEach((msg, index) => {
            const messageText = msg.innerText;
            console.log(`AI: ${messageText}`); // Replace with actual logging or storage mechanism
        });
    });

    chatObserver.observe(chatContainer, { childList: true, subtree: true });
};

// Initialization
captureChatMessages();
