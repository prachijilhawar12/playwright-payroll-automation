const {test,expect} = require('@playwright/test')

test ("My first test",async function({page}){
expect(1).toBe(1);
});

test.skip ("My second test",async function({page}){
expect(100).toBe(100);
})
test("My third test",async function({page}){
    expect("Prachi J").toContain("Sushant");
})
test("My fourth test",async function({page}){
    expect("Prachi J".includes("J")).toBeTruthy();
});