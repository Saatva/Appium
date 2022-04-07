const HomePage = require('../pageobjects/home.page');
const SaatvaClassicPage = require('../pageobjects/saatva_classic.page')
const CartPage = require('../pageobjects/cart.page')

describe('Verify that the user can checkout a product', () => {

    beforeEach(async () => {
        await HomePage.open()
    })

    it('Add Classic Saatva Mattress and go to Checkout', async () => {
        await SaatvaClassicPage.open()
        await SaatvaClassicPage.addToCart()
        await SaatvaClassicPage.viewCart()
        await expect(await browser.getUrl()).toContain('/cart')
        await expect(await CartPage.getAddedProductName()).toEqual('Saatva Classic Mattress')
        await CartPage.goToCheckout()
        await expect(await browser.getUrl()).toContain('checkout/information')
    });
});