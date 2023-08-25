describe("Testing transaction feed for everyone, friends, mine", ()=>{
    it("signs in", ()=>{
        cy.visit("http://localhost:3000/signin")
        cy.get('#username').type("Katharina_Bernier")
        cy.get('#password').type("s3cret")
        cy.get('.MuiButton-label').click()
        cy.location("pathname").should("eq", "/")
            it("Everyone button,date, amount exists", ()=>{
                cy.getBySel("nav-public-tab").should("exist").contains("Everyone")
            })
        })

})
