const{test,expect}=require('@playwright/test');
const loginpage=require("../pages/loginpage"); 
const payroll=require("../pages/payrollpage");

test('NEG_002 - Verify validation when a negative basic salary is entered',async function({page}){
    await page.goto("/login");

    const login=new loginpage(page);
    await login.login("Admin", "admin123");
    await expect(page).toHaveURL(/dashboard/);
    
    const payrollData = {
    employeeId: 'EMP001',
    basicSalary: -50000,
    allowance: 5000,
    deduction: 0,
    overtime: 0,
    bonus: 0
};
    await page.goto('/payroll');
    const payrollPage = new payroll(page);
     await payrollPage.enterPayrollData(payrollData);  
     await payrollPage.calculate(); 
     await expect(payrollPage.errorMessage).toBeVisible();
     await expect(payrollPage.errorMessage).toContainText('Invalid');
     await expect(payrollPage.errorMessage).toHaveText('Basic Salary cannot be negative');
})