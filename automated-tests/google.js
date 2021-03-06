const { Builder, By, Key, until } = require("selenium-webdriver")

const goGoogle = async function () {
  let driver = await new Builder().forBrowser('chrome').build()
    if (!driver) {
      console.log('Failed to get to site')
    } else {
      await driver.get('http://google.com')

      const button = driver.findElement(By.className('Fx4vi'))

      button.click()

      const archive = driver.wait(until.elementLocated(By.linkText('Archived versions')))

      archive.click()
    }
}

goGoogle()
  .catch(err => {
    console.log(err)
  })
