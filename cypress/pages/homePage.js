const { Environment } = require('../support/environment')
const url = new Environment().getBaseUrl();

module.exports = {
    domain: url,
    name: 'homePage',
    route: '',
    locator: {
        link: {
            produse: '[class="navbar-aux-content__departments"]',
            laptopCategory: '[href="/laptop-tablete-telefoane/d?ref=hdr_menu_department_1"]',
            laptop: '[href="/laptopuri/c?ref=hp_menu_quick-nav_1_1&type=category"]',
        },
        button: {
            acceptCookie: '.col-sm-5 > .btn-primary'
        }
    },
}

