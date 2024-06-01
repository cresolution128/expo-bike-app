// services/StoryblokService.js

import StoryblokClient from 'storyblok-js-client';

class StoryblokService {
  constructor() {
    this.client = new StoryblokClient({
      accessToken: '2R3lGhfsTgDnatXJN54Wrwtt',
    });
  }

  getStory(slug) {
    return this.client.get(`cdn/stories/${slug}`);
  }

  getStories(params) {
    return this.client.get('cdn/stories', params);
  }
}

const storyblokService = new StoryblokService();
export default storyblokService;
