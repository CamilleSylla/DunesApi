'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
    verifyBook : async (body) => {
        const {user_id, traning_day ,traning_start} = body
        // try {
            const {book_limit} = await strapi
            .query("user", "users-permissions")
            .findOne({ id: user_id });
            const allUserBooked = await strapi.query('reservations').count({user_id : user_id})
            const alreadyBooked = await strapi.query('reservations').findOne({traning_day: traning_day, user_id: user_id, traning_start: traning_start})
            if (!book_limit) {
                throw new Error('Validation Error : User does not exist')
            }
            if (alreadyBooked) {
                throw new Error('Validation Error : User as already booked this training')
            }
            if (book_limit == allUserBooked) {
                throw new Error('Validation Error : User as reach his booking limit')
            }

            const result = await strapi.query('reservations').create(body)
            console.log("Nouvelle reservation", result)
        // }
        // catch (error) {
        //     console.log(error);
        // }
    }
};
