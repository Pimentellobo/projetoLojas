const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')
const chromedriver = require("chromedriver")

describe('comprar passagem', function() {
  
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    await driver.manage().setTimeouts({implicit: 60000});
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('comprar passagem', async function() {
    await driver.get("https://blazedemo.com/")
    await driver.manage().window().setRect({ width: 1382, height: 744 })
    await driver.findElement(By.name("fromPort")).click()
    {
      const dropdown = await driver.findElement(By.name("fromPort"))
      await dropdown.findElement(By.xpath("//option[. = 'São Paolo']")).click()
    }
    await driver.findElement(By.name("toPort")).click()
    {
      const dropdown = await driver.findElement(By.name("toPort"))
      await dropdown.findElement(By.xpath("//option[. = 'New York']")).click()
    }
    await driver.findElement(By.css(".btn-primary")).click()
    await driver.findElement(By.css("tr:nth-child(1) .btn")).click()
    await driver.findElement(By.id("nameOnCard")).click()
    await driver.findElement(By.id("nameOnCard")).sendKeys("kennedy")
    await driver.findElement(By.id("creditCardYear")).click()
    await driver.findElement(By.id("creditCardYear")).sendKeys("2025")
    await driver.findElement(By.id("rememberMe")).click()
    await driver.findElement(By.id("cardType")).click()
    await driver.findElement(By.css(".btn-primary")).click()
    assert(await driver.findElement(By.css("h1")).getText() == "Thank you for your purchase today!")
    assert(await driver.findElement(By.css("tr:nth-child(3) > td:nth-child(2)")).getText() == "555 USD")
  })
  it('Login', async function() {
    await driver.get("https://blazedemo.com/")
    await driver.manage().window().setRect({ width: 1282, height: 680 })
    await driver.findElement(By.css("html")).click()
    await driver.findElement(By.css("html")).click()
    await driver.findElement(By.css("html")).click()
    await driver.findElement(By.css("html")).click()
    await driver.findElement(By.css("html")).click()
    await driver.findElement(By.css("html")).click()
    await driver.findElement(By.linkText("home")).click()
    await driver.findElement(By.id("email")).click()
    await driver.findElement(By.id("email")).sendKeys("pimentellobo13@gmail.com")
    await driver.findElement(By.css(".form-horizontal")).click()
    await driver.findElement(By.id("password")).click()
    await driver.findElement(By.id("password")).sendKeys("123456")
    await driver.findElement(By.name("remember")).click()
    await driver.findElement(By.css(".btn-primary")).click()
    assert(await driver.findElement(By.css(".message")).getText() == "Page Expired")
  })
})
