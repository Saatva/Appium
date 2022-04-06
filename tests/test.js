const webdriverio = require('webdriverio');
const assert = require('chai').assert;

const iosOptions = {
    path: '/wd/hub',
    host: 'localhost',
    port: 4723,
    logLevel: 'info',
    capabilities: { 
        platformName: 'iOS',
        automationName: 'XCUITest',
        deviceName: 'iPhone Simulator',
        platformVersion: '15.4',
        browserName: 'Safari'
    }
}


describe('Create Safari session', function () {
  it('should create and destroy IOS Safari session', async function () {
    const client = await webdriverio.remote(iosOptions);
    await client.url('https://www.google.com');
    const title = await client.getTitle();
    assert.equal(title, 'Google');
    // await client.deleteSession();
  });
});
