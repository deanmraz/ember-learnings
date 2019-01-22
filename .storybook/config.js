import { configure } from '@storybook/ember';

function loadStories() {
  require('../stories/index.stories.js');
  require('../stories/blog-post.stories.js');
}

configure(loadStories, module);
