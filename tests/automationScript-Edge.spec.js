const{test,expect}=require('@playwright/test');
const loginpage=require("../pages/loginpage"); 
const payroll=require("../pages/payrollpage");

test('EDGE_001 - Verify payroll calculation when all salary components are zero',async function({page}){
    await page.goto("/login");

    const login=new loginpage(page);
    await login.login("Admin", "admin123");
    await expect(page).toHaveURL(/dashboard/);
    
    const payrollData = {
    employeeId: 'EMP001',
    basicSalary: 0,
    allowance: 0,
    deduction: 0,
    overtime: 0,
    bonus: 0
};
    await page.goto('/payroll');
    const payrollPage = new payroll(page);
     await payrollPage.enterPayrollData(payrollData);  
     await payrollPage.calculate(); 
     await expect(payrollPage.netSalary).toBeVisible(); //Verify net salary is displayed 
     await expect(payrollPage.errorMessage).toBeVisible();//... Verify zero is not allowed as per business requirement
     
})