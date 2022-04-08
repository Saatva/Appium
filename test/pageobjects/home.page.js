const Page = require('./page')

class HomePage extends Page {

    get popupCloseButton() {
        return $('button#button3.button3')
    }

    async closePopup() {
        await this.popupCloseButton.click()
    }

    async open() {
        return await super.open('')
    }
}

module.exports = new HomePage()