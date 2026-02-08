// platforms.js

class PlatformRegistry {
    constructor() {
        this.platforms = {};
    }

    // Register a platform with its specific implementation
    registerPlatform(name, implementation) {
        if (this.platforms[name]) {
            throw new Error(`Platform ${name} is already registered.`);
        }
        this.platforms[name] = implementation;
    }

    // Get a platform implementation
    getPlatform(name) {
        const platform = this.platforms[name];
        if (!platform) {
            throw new Error(`Platform ${name} is not registered.`);
        }
        return platform;
    }

    // List all registered platforms
    listPlatforms() {
        return Object.keys(this.platforms);
    }
}

// Example usage:
// const registry = new PlatformRegistry();
// registry.registerPlatform('OpenAI', new OpenAIImplementation());
// const openAI = registry.getPlatform('OpenAI');

module.exports = PlatformRegistry;