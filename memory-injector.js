// memory-injector.js

// Function to fetch summarized memory from the storage
async function fetchSummarizedMemory() {
    // This is a placeholder for actual memory fetching logic
    return "[Summarized Memory]";
}

// Function to inject summarized memory into the input field
async function injectMemoryIntoInput() {
    const memory = await fetchSummarizedMemory();
    const inputField = document.querySelector('#chatgpt-input'); // Selector for the ChatGPT input field

    if (inputField) {
        inputField.value = `${memory}\n${inputField.value}`; // Prepend the memory to the input
    }
}

// Listening for the input event to trigger memory injection
document.addEventListener('input', injectMemoryIntoInput);

// Note: Ensure the script runs after the DOM is fully loaded to access the input field correctly.