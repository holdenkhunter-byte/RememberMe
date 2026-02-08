// RememberMe Extension Configuration

const config = {
    apiEndpoints: {
        getUserData: "https://api.example.com/user",
        saveUserData: "https://api.example.com/user/save",
        deleteUserData: "https://api.example.com/user/delete"
    },
    chatGPTDOMSelectors: {
        inputSelector: "#chat-input",
        submitButtonSelector: "#send-button",
        messageContainer: ".message-container"
    },
    defaultSettings: {
        theme: "light",
        notifications: true,
        autoSave: true
    },
    lastUpdated: "2026-02-08 19:52:24",
    createdBy: "holdenkhunter-byte"
};

export default config;