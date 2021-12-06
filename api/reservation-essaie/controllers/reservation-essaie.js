'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    verify : async ctx => {
        const freeUserExist = await strapi.query('reservation-essaie').findOne({email : ctx.email})
        const userIsMember = await strapi.query('user', 'users-permissions').findOne({email : ctx.email})
        if (freeUserExist) {
            console.log(freeUserExist);
            return "Cette adresse mail a deja été utilisé, pour reserver un nouveau creaneau veuillez souscrire un abonnement en salle"
        }
        if (userIsMember) {
            console.log(userIsMember);
            return "Vous posseder deja un compte membre, veuillez vous connecter pour reserver un spot"
        }

        return (ctx.email)
    }
};
