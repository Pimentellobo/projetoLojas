// Configura

// Biblioteca

const { Builder, By } = require("selenium-webdriver")
const { assert } = require("assert")
const chromedriver = require("chromedriver")
// Executa
describe("comprar passagem via programação", () => {
    
    let driver          // a variável/objeto que recebará o selenium 

    // Iniciar
    beforeEach(async function() {
        // instancia o selenium do Webdriver para controlar o Chrome
        driver = await new Builder().forBrowser("chrome").build()
        // configurar o tempo de espera máxima do Selenuim
        await driver.manage().setTimeouts({implicit: 30000})
    })
    // Finalizar
    afterEach(async function() {
        await driver.quit(); // Destruir o objeto Selenium Webdriver
    })
    // Testar
    it("Comprar Passagem WD", async function() {
        // abrir o site do chrome controlado pelo selenium
        await driver.get("https://www.blazedemo.com")
        // clicar no combo origem/embarque
        await driver.findElement(By.name("fromPort")).click()
        // selecinar a origem São Paolo
        {
            const dropdwon = await driver.findElement(By.name("fromPort"))
            await dropdwon.findElement(By.xpath("//option[. = 'São Paolo']")).click()
        }

        // selecinar o Destino
        await driver.findElement(By.name("toPort")).click()
        {
            const dropdwon = await driver.findElement(By.name("toPort"))
            await dropdwon.findElement(By.xpath("//option[. = 'Berlin']")).click()
        }
        // Clicar no botão find flights
        await driver.findElement(By.css(".btn-primary")).click()
        // Valida
        // Validar se foi para a página de reserva
        // driver.sleep(6000)
        assert.equal(await driver.getTitle(), "BlazeDemo - reserve")
    })
            
})
// Valida