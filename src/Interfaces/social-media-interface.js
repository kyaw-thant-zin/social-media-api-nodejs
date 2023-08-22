// src/interfaces/social-media-interface.js

class SocialMediaInterface {
    constructor(apiKey) {
      this.apiKey = apiKey;
    }
  
    getUserProfile() {
      // To be implemented by subclasses
    }
}
  
module.exports = SocialMediaInterface;