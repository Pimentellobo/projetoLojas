// Bibliotecas
const { assert } = require("chai");
const { By } = require("selenium-webdriver");
const WebDriver = require("selenium-webdriver");
require("chromedriver");

// Classe ou Descrição
describe("Google", () => {
    let driver;
    // configura
    // Metodo de incialização

    beforeEach(() => {
        driver = new WebDriver.Builder() // instancio o objeto selenium
        .forBrowser("chrome")
        .build()
    })
    // Metodo de Finalização 

    afterEach(() => {
        driver.quit()
    })
    // Metodo de Teste (cada it é um teste)

    it("Consultar Google", async() => {
        // Executa
        await driver.get("https://www.google.com")
        await driver.findElement(By.name("q")).sendkeys("mousse de chocolate" + WebDriver.Key.ENTER)
        await driver.sleep(3000)
        // valida
        assert.equal(await driver.getTitle(), "muosse de chocolate - Pesquisa Google")
    })

})