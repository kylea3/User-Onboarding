describe("Form App", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    })

    const nameInput = () => cy.get('input[name=fullName]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const nameTerms = () => cy.get('input[type=checkbox]');
    const submitBtn = () => cy.get(`button[id='submitBtn']`);
    const nameError = () => cy.get('div[id=nameError');
    const emailError = () => cy.get('div[id=emailError');
    const passwordError = () => cy.get('div[id=passwordError');
    const tosError = () => cy.get('div[id=tosError');


    describe("check inputs are showing", () => {
        it('check name input', () => {
            nameInput().should('exist')
            emailInput().should('exist')
            passwordInput().should('exist')
            nameTerms().should('exist');
            submitBtn().should('exist');
            nameError().should('exist');
            emailError().should('exist');
            passwordError().should('exist');
            tosError().should('exist');

        })
        
    })

    describe("fill out input fields and and check tos box", () => {
        it('type in input fields', () => {
            nameInput()
            .type('Kyle Andrus')
            .should('have.value', 'Kyle Andrus');

            emailInput()
            .type('kyle@kyle.com')
            .should('have.value', 'kyle@kyle.com');

            passwordInput()
            .type('password')
            .should('have.value', 'password');
        })

        it('check terms of use box', () => {
            nameTerms().click();
        })

    })

    describe('check to see if user can submit form', () => {
        it('submit data form', () => {
            nameInput()
            .type('Kyle Andrus')

            emailInput()
            .type('kyle@kyle.com')

            passwordInput()
            .type('password')

            nameTerms().click();

            submitBtn().click();

        })
    })

    describe('check for form validation', () => {
        it('check for form validation if input left empty', () => {
            nameError().contains('Full Name is required');
            emailError().contains('Must be a valid email address');
            passwordError().contains('Must be 6 chars minimum');
            tosError().contains('This field must be checked');

        })
    })

        

       
        
    









})