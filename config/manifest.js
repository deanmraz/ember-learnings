/* eslint-env node */
'use strict';

module.exports = function(/* environment, appConfig */) {
  // See https://github.com/san650/ember-web-app#documentation for a list of
  // supported properties

  return {
    name: "ember-learnings",
    short_name: "ember-learnings",
    description: "",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: 'https://assets.dockyard.com/assets/images/badge144-66ea48f44ac5a248a95eedf5adfb706e.png',
        sizes: "144x144",
        type: "image/png"
      }
    ],
    ms: {
      tileColor: '#fff'
    }
  };
}
