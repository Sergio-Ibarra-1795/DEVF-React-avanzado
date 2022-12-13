describe('Mi primer test', () => {
  it('Lee Hola Mundo en Home /', () => {
    // 01 Setup del estado de la aplicación
    cy.visit('/')

    //02 Ejecutar acciones
    //Obtener un elemento 
    cy.get('h1').should('have.text', 'Home')

    //03Espero un resultado
  })

  //02.1 Ejecutemos otra prueba
  it('Loging funcionando como Customer', ()=> {
    //Establecver el estado de la app 
    //Vamos a interceptar una llamada a una API 
    //cy.intercept('')

    //Visitaremos la página
    cy.visit('/login')

    //Realizamos las acciones
    //Obtendremos los valores del forumario mediante sus ids

    cy.get('#email').type('drstrange@marvel.com')
    cy.get('#password').type('multiverso')
    //Le da click al boton submit
    cy.get('button[type=submit]').click()
    //cy.wait('@loginApi')

    //03 Esperar resultados (Despupes de hacer el login esperamos que nos diriga a Dashboard)
    cy.get('h1').should('have.text', 'Dashboard')
  })
})