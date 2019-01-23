import { configure, addDecorator } from '@storybook/ember';
import { configureViewport } from '@storybook/addon-viewport';
import { withNotes } from '@storybook/addon-notes';

const req = require.context('../stories', true, /.stories.js$/); // <- import all the stories at once

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(withNotes);
configureViewport();
configure(loadStories, module);
