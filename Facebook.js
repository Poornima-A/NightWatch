module.exports = {
    "Facebook": function(browser){
        browser.url("https://www.facebook.com/login/")
        .waitForElementVisible('body',5000)
    },
};