// Note: Replace placeholder baseURL and locators with actual values once the test environment is available.
class LoginPage
{

    constructor(page)
    {
        this.page = page;
        this.username = page.getByLabel('Username');    
        this.password = page.getByLabel('Password');    
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }
    
    async goto() {   
         await this.page.goto('/login');  
        }  
        async login(username, password) {  
              await this.username.fill(username);    
              await this.password.fill(password);  
              await this.loginButton.click(); 
             }

}
module.exports=LoginPage;