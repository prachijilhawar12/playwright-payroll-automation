const {test,expect} = require('@playwright/test');

test("Verify the Error Message for Invalid User login",async function({page}){
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByPlaceholder("Username").fill("Admin1");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.locator("button[type='submit']").click();    

    await expect(page.getByText("Invalid credentials")).toBeVisible();
})