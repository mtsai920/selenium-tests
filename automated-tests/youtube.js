const { Builder, By, Key, until } = require("selenium-webdriver")

const youtube = async function () {
  let driver = await new Builder().forBrowser('chrome').build()

  await driver.get('https://www.youtube.com/')

  if (!driver) {
    console.log('unable to load page')
  } else {
    const search = driver.findElement(By.name('search_query'))
    search.sendKeys('medival cats')

    const button = driver.findElement(By.id('search-icon-legacy'))
    button.click()

    const video = 
  }
}

youtube()
 .catch(err => (
   console.log(err)
 ))
