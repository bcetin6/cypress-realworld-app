describe("Sign in", ()=>{
    beforeEach(()=>
    cy.visit("http://localhost:3000/signin"))
    
    context("Filling in sign in fields", ()=>{
        it("fills in the username and password, click submit", ()=>{
            cy.get('#username').type("Katharina_Bernier")
            cy.get('#password').type("s3cret")
            cy.get('.MuiButton-label').should("exist").contains("Sign In").click()
            cy.location("pathname").should("eq", "/")
        })

    })
})