'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.render('index.ejs', {name: "leiming"});
    this.ctx.logger.info('some request data: %j', this.ctx.ip);
  }
}

module.exports = HomeController;
