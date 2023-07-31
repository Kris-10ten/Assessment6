const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get('http://localhost:8000');
    await driver.wait(until.titleIs("Duel Duo"), 10000);
    await new Promise(resolve => setTimeout(resolve, 3000));
  }) 
  test("clicking the Draw button displays the div with id = 'choices'", async () => {
    await driver.get("http://localhost:8000");
    const drawButton = await driver.findElement(By.id("draw"));
    await drawButton.click();
    const choicesDiv = await driver.findElement(By.id("choices"));
    expect(await choicesDiv.isDisplayed()).toBe(true);
    await new Promise(resolve => setTimeout(resolve, 3000));
  })
  test("clicking 'Add to Duo' button displays the div with id = 'player-duo'", async () => {
    await driver.get("http://localhost:8000");
    const drawButton = await driver.findElement(By.id("draw"));
    await drawButton.click();
    const addButton = await driver.findElement(By.css("#choices .bot-btn"));
    await addButton.click();
    const playerDuoDiv = await driver.findElement(By.id("player-duo"));
    expect(await playerDuoDiv.isDisplayed()).toBe(true);
  })
  test("when a bot is 'Removed from Duo', it goes back to 'choices'", async () => {
    await driver.get("http://localhost:8000");
    const drawButton = await driver.findElement(By.id("draw"));
    await drawButton.click();
    const addButton = await driver.findElement(By.css("#choices .bot-btn"));
    await addButton.click();
    const removeButton = await driver.findElement(By.css("#player-duo .bot-btn"));
    await removeButton.click();
    const choicesDiv = await driver.findElement(By.id("choices"));
    expect(await choicesDiv.isDisplayed()).toBe(true);
    await new Promise(resolve => setTimeout(resolve, 3000));
  })
});