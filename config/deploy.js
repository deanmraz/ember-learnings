/* jshint node: true */
const HOST = 'ember-learnings-fastboot.runtrizdev.com';
const AWS = {
  accessKeyId: process.env.RT_DEV_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.RT_DEV_AWS_SECRET_ACCESS_KEY,
  region: 'us-west-2',
  bucket: `${HOST}`,
};

module.exports = function(deployTarget) {
  var ENV = {
    build: {},
    // include other plugin configuration that applies to all deploy targets here
    "revision-data": {
      type: 'file-hash',
      scm: null
    }
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';

    ENV.s3 = {
      ...AWS,
      prefix: 'demo-fastboot',
    };

    ENV['s3-index'] = {
      ...AWS,
      allowOverwrite: true,
    };

    ENV['fastboot-app-server-aws'] = {
      ...AWS,
      awsPrefix: 'fastboots',
    };

    ENV.pipeline = {
      activateOnDeploy: true,
    };

  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
