const { forwardTo } = require('prisma-binding');

const Query = {
    async items(parent, args, ctx, info) {
        const items = await ctx.db.query.items();
        return items;
    }

    //If you want to forward straight to prisma graphql
    //items: forwardTo('db')
};

module.exports = Query;
