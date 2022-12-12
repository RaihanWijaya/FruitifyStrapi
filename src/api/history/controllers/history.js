'use strict';

/**
 * history controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::history.history', {
    async createHistory(ctx) {
        const { user } = ctx.state;
        console.log(user);

        if (!user) {
            return ctx.unauthorized('You are not logged in');
        }

        const {data} = ctx.request.body;
        
        console.log(data);

        const entry = await strapi.entityService.create('api::history.history', {
          data: {
            fruitName: data.fruitName,
            fruitQuality: data.fruitQuality,
            imageURL: data.imageURL,
            user: user.id,
          },
        });
        
        return entry;
    },

    async getHistory(ctx) {
        const { user } = ctx.state;
        console.log(user);

        if (!user) {
            return ctx.unauthorized('You are not logged in');
        }

        const entries = await strapi.entityService.findMany('api::history.history', {
          user: user.id,
        });
        
        return entries;
    }
});
