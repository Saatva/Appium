const Page = require('./page')

class SaatvaClassicPage extends Page {

    get addToCartButton() {
        return $('.productPanel__addToCart')
    }

    get viewCartButton() {
        return $('div.container.core-navigation-module__container-993 > ul > li:nth-child(4) > a')
    }

    async addToCart() {
        await this.addToCartButton.click()
        await browser.pause(5000)
    }

    async viewCart() {
        await this.viewCartButton.click()
        await browser.pause(5000)
    }

    async open() {
        return await super.open('mattresses/saatva-classic/?PD-11779=control')
    }
}

module.exports = new SaatvaClassicPage()