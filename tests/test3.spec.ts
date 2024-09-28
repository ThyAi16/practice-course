// a. Thêm mới 100 todo item có nội dung “Todo <i>”
// b. Xoá các todo có số lẻ

import {test} from 'playwright/test';


        test('add 100 and delete', async({page}) =>
            {
                test.setTimeout(120000);
                await page.goto('https://material.playwrightvn.com/03-xpath-todo-list.html');
            
                for( var i = 1; i <= 100; i++)
                {
                    await page.locator("//input[@id='new-task']").fill(`Todo ${i}`);
                    await page.locator("//button[@id='add-task']").click();               
                    
                }
                
                page.on('dialog', async dialog =>
                {
                    await dialog.accept();
                }
                )
                
                for (let i = 1; i <=100; i++)
                {
                    if(i %2 !== 0  )
                    {
                        await page.locator(`//button[@id='todo-${i}-delete']`).click();
                       
                      
                    }
                }
            
            }
            )




// test('add', async({ page }) => {
//     await page.goto('https://material.playwrightvn.com/03-xpath-todo-list.html');
//     for (var i = 0; i < 100; i++) {
//       await page.locator("//input[@id='new-task']").fill("Todo <i>");
//       await page.locator("//button[@id='add-task']").click();
//     }
//   }, 60000); // Increase timeout to 60 seconds

//   test.describe.parallel('Todo List Tests', () => {
//     test('add task part 1', async ({ page }) => {
//       await page.goto('https://material.playwrightvn.com/03-xpath-todo-list.html');
//       for (var i = 0; i < 50; i++) {
//         await page.locator("//input[@id='new-task']").fill("Todo <i>");
//         await page.locator("//button[@id='add-task']").click();
//       }
//     });
  
//     test('add task part 2', async ({ page }) => {
//       await page.goto('https://material.playwrightvn.com/03-xpath-todo-list.html');
//       for (var i = 50; i < 100; i++) {
//         await page.locator("//input[@id='new-task']").fill("Todo <i>");
//         await page.locator("//button[@id='add-task']").click();
//       }
//     });
//   });