const{test,expect}=require('@playwright/test');
const loginpage=require("../pages/loginpage"); 

test("Verify the Valid User login",async function({page}){
    await page.goto("/login");
    const login=new loginpage(page);
    await login.login("Admin", "admin123");
    await expect(page).toHaveURL(/dashboard/);
})