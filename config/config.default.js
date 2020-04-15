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
  config.alinode = {
		server: 'wss://agentserver.node.aliyun.com:8080',
		appid: '84430',
		secret: 'aca31c5d3bbc4956a2249c7c71e761c7671b4768',
	};
  return config;
};
