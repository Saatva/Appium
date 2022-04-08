const Page = require('./page')

class CartPage extends Page {

    get checkoutButton() {
        return $('div.stickyCartButton > button')
    }

    get addedProductName() {
        return $('div.col.col--xs-12.col--md-8 > ul > li > h5 > a')
    }

    async goToCheckout() {
        await this.checkoutButton.click()
        await browser.pause(5000)
    }

    async getAddedProductName() {
        return await this.addedProductName.getText()
    }

    async open() {
        return await super.open('/cart')
    }
}

module.exports = new CartPage()