import  {test} from 'playwright/test';

test ('create register', async ({page}) => 
{
    await page.goto('https://material.playwrightvn.com/01-xpath-register-page.html');

    await page.locator("//input[@id='username']").fill("ThyAi");
    await page.locator("//input[@id='email']").fill("thyai1604@gmail.com");
    await page.locator("//input[@id='female']").click();
    await page.locator("//input[@id='traveling']").check();
    await page.locator("//select[@id='interests']").selectOption(["art", "music"]);
    await page.locator("//select[@id='country']").selectOption("Canada");
    await page.locator("//input[@id='dob']").fill("20024-12-03");
    await page.locator("//input[@id='profile']").setInputFiles("tests/b.txt");
    await page.locator("//textarea[@id='bio']").fill("Register form");
    await page.locator("//input[@id='rating']").fill("1");
    await page.locator("//input[@id='favcolor']").fill("#1c1e21");
    await page.locator("//input[@id='newsletter']").check();
    await page.locator("//span[@class='slider round']").click();
    await page.locator("//button[@type='submit']").click();
}
)
