class PayrollPage {  constructor(page) {  
    
    this.page = page;    
    this.employeeId = page.getByLabel('Employee ID');    
    this.basicSalary = page.getByLabel('Basic Salary');   
     this.allowance = page.getByLabel('Allowance');    
     this.deduction = page.getByLabel('Deduction');    
     this.overtime = page.getByLabel('Overtime');    
     this.bonus = page.getByLabel('Bonus');    
     this.calculateButton =      page.getByRole('button', { name: 'Calculate' });  
       this.processButton =      page.getByRole('button', { name: 'Process Payroll' });   
        this.netSalary = page.getByTestId('net-salary');   
         this.errorMessage = page.getByRole('alert'); 
        
        }  
         
         async enterPayrollData(data) {    
            await this.employeeId.fill(data.employeeId);   
             await this.basicSalary.fill(String(data.basicSalary));    
             await this.allowance.fill(String(data.allowance));    
             await this.deduction.fill(String(data.deduction));    
             await this.overtime.fill(String(data.overtime));   
              await this.bonus.fill(String(data.bonus));  }  


              async calculate() {   
                 await this.calculateButton.click();  
                }  
                
                async processPayroll() {  
                      await this.processButton.click();  
                    } }
                    module.exports=PayrollPage;