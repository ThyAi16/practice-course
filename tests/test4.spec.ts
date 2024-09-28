//a. Thêm mới 10 note có nội dung là tiêu đề và một phần ngắn (khoảng 3 dòng) tại báo
// https://vnexpress.net/khoa-hoc,
// b. Thực hiện search theo tiêu đề bài báo bất kì
import {test} from 'playwright/test';

test('add note', async({page}) =>
{
    const notes = [
    {a1: "Trang trại thẳng đứng trong nhà đầu tiên trồng dâu tây", b1: "Mỹ Plenty Richmond, trang trại thẳng đứng đầu tiên trên thế giới trồng dâu tây trong nhà với quy mô lớn, mở cửa hôm 24/9 tại Richmond, Virginia."},
    {a1: "Cá sấu già nhất thế giới", b1: "Cá sấu Henry ở Trung tâm Bảo tồn Crocworld sẽ tròn 124 tuổi cuối năm nay và là cha của hơn 10.000 con non trong vài thập kỷ qua. " },
    {a1: "Phô mai cổ nhất thế giới trên xác ướp Tân Cương", b1: "Kiểm tra ADN hé lộ người dân thời Đồ đồng ở vùng viễn tây Trung Quốc cách đây 3.500 năm sản xuất phô mai kefir, thách thức hiểu biết hiện nay về chế độ ăn cổ đại. "},   
    ];
    
    await test.step('Vao Playwright', async() =>
    {
        await page.goto('https://material.playwrightvn.com/');
        await page.locator("[//a[@href='04-xpath-personal-notes.html']").click();
        //await page.goto('https://material.playwrightvn.com/04-xpath-personal-notes.html');
    }
    )

    await test.step('Nhap title and content', async() =>
    {
        for (const note of notes)
            {
                await page.locator("//input[@type ='text' and @id='note-title']").fill(note.a1);
                await page.locator("//textarea[@id='note-content']").fill(note.b1);
                await page.locator("//button[@id='add-note']").click();
            }
    }
    )
    

    await test.step("Search", async() =>
    {
        await page.locator("//input[@type='text' and @id ='search']").fill("nay");
    }
    )
}
)