/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    homeDefault: async function (req, res) {
        return res.view("homepage");
    },
};



