module.exports = {
    '@tags' : ['facebook'],
    'Facebook Login Automation' :function(browser){
        const facebookUrl = 'https://www.facebook.com/login/';
        const email = 'poornima@gmail.com';
        const password='Poorni@26';
        
        browser
        .url(facebookUrl)
        .waitForElementVisible('body',5000)
        .setValue('#email',email)
        .setValue('#pass',password)
        .waitForElementVisible('[name="login"]', 10000)
        .click('[name="login"]')
        .pause(5000)
        .end()
    }
}