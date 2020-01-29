const mutations = {

    async createItem(parent, args, ctx, info) {
        // TODO: Checked if logged in
        const item = await ctx.db.mutation.createItem({
            data: {
                ...args
            }
        }, info);

        return item;
    }
};

module.exports = mutations;
