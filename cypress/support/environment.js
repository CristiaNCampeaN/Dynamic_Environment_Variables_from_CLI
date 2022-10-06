
export class Environment {
    getBaseUrl() {
        let envi = Cypress.env('ENV');
        if (envi === 'production') {
            return "https://www.emag.ro";
        } else if (envi === 'dev') {
            return "https://www.emag.ro/laptopuri/c?ref=hp_menu_quick-nav_1_1&type=category";
        } else if (envi === 'qa') {
            return "https://www.emag.ro/console-hardware/brand/sony/c?ref=hp_menu_quick-nav_463_1&type=link"
        }
    }
}
