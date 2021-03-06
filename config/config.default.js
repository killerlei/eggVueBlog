'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1524373604018_3412';

  // add your config here
  config.middleware = [];

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.ejs': 'ejs',
    },
  };

  return config;
};
