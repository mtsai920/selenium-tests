const { Builder, By, Key, until } = require("selenium-webdriver")

const gmail = async function () {
  let driver = await new Builder().forBrowser('chrome').build()
  await driver.get('https://www.google.com/gmail/about/#')

  if (!driver) {
    console.log('failed to load page')
  } else {
    const signIn = driver.wait(until.elementLocated(By.linkText('Sign in')))
    signIn.click()

    const help = driver.wait(until.elementLocated(By.linkText('Help')))
    help.click()
  }
}

gmail()
  .catch(err => {
    console.log(err)
  })
