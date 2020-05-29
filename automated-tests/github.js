const { Builder, Key, By, until} = require('selenium-webdriver')

const github = async function () {

  let driver = await new Builder().forBrowser('chrome').build()
  driver.get('https://github.com/')

  const user = {
    email: 'email@email.com',
    password: 'password'
  }

  if (!driver) {
    console.log('unable to load site')
  } else {
    const signInButton = driver.wait(until.elementLocated(By.linkText('Sign in')))
    signInButton.click()

    const userName = driver.wait(until.elementLocated(By.id('login_field')))
    userName.click()
    userName.clear()
    userName.sendKeys(user.email)

    const password = driver.wait(until.elementLocated(By.id('password')))
    password.click()
    password.clear()
    password.sendKeys(user.password)

    const submit = driver.wait(until.elementLocated(By.name('commit')))
    submit.click()
  }
}

github()
  .catch(err => {
    console.log(err)
  })
