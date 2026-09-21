const{test,expect}=require('@playwright/test');
const loginpage=require("../pages/loginpage"); 
const payroll=require("../pages/payrollpage");

test('POS_001 - Verify correct net salary calculation with valid salary components',async function({page}){
    await page.goto("/login");

    const login=new loginpage(page);
    await login.login("Admin", "admin123");
    await expect(page).toHaveURL(/dashboard/);
    
    const payrollData = {
    employeeId: 'EMP001',
    basicSalary: 50000,
    allowance: 5000,
    deduction: 2000,
    overtime: 1000,
    bonus: 3000
};
    await page.goto('/payroll');
    const payrollPage = new payroll(page);
     await payrollPage.enterPayrollData(payrollData);  
     await payrollPage.calculate();  
     await expect(payrollPage.netSalary).toBeVisible();  
     await expect(payrollPage.netSalary).not.toHaveText('');
     await expect(payrollPage.netSalary).toHaveText('57000');
})