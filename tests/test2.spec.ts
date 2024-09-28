import {test} from 'playwright/test';

test('add product', async({page}) =>
{
    await page.goto('https://material.playwrightvn.com/02-xpath-product-page.html');

    await page.locator("//button[@data-product-id='1']").click({clickCount: 2});
    await page.locator("//button[@data-product-id='2']").click({clickCount: 1});
    await page.locator("//button[@data-product-id='3']").click({clickCount: 3});
}
)