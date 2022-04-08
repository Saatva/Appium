const webdriverio = require('webdriverio');
const assert = require('chai').assert;

const iosOptions = {
    path: '/wd/hub',
    host: '0.0.0.0',
    port: 4723,
    logLevel: 'info',
    capabilities: { 
        platformName: 'iOS',
        automationName: 'XCUITest',
        deviceName: 'iPad Simulator',
        platformVersion: '15.4',
        browserName: 'Safari'
    }
}

describe('Create Safari session', function () {
  
  
  it('Go to saatva homepage and check title', async function () { 

    const client = await webdriverio.remote(iosOptions);
    await client.url('https://www.saatva.com');  
    const title = await client.getTitle();
    assert.equal(title, 'Saatva | Shop Mattresses, Bedding, Bed Frames & Bed Bases');
    let screenshot = client.saveScreenshot('./test-test.png')
    
    await client.deleteSession();

  });

});
