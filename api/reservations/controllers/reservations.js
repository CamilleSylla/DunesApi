'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    book: async ctx => {

        if (ctx.request && ctx.request.header && ctx.request.header.authorization) {
            try {
                const { body } = ctx.request
                const { verifyBook } = strapi.services.reservations;
    
                const auth = await strapi.plugins[
                    'users-permissions'
                  ].services.jwt.getToken(ctx);
        
                if (!auth) {
                    throw new Error('Validation Error: User should be authenticated')
                }
                
                if (body.user_id === null) {
                    throw new Error('Validation Error: User ID should not be null')
                }
        
                if (body.traning_day === null) {
                    throw new Error('Validation Error: booking date should not be null')
                }
                if (body.traning_start === null) {
                    throw new Error('Validation Error: traning start should not be null')
                }
                
                const verifyResult = await verifyBook(body)

                if ( verifyResult.name === "Error") {
                    throw new Error(verifyResult.message)
                }
                return verifyResult
            } catch (err) {
                const { statusCode, message } = err;
                console.log(statusCode, message);
                return ctx.send({message : message}, 500)
            }
            
        }
        
    }
};
