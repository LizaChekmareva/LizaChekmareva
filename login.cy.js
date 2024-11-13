describe('Тестирование staya', function () {

    it('search something', function () {
       cy.visit('https://login.qa.studio/'); // зашла на сайт
       cy.get('#mail').type('german@dolnikov.ru'); // верный логин
       cy.get('#pass').type('iLoveqastudio1'); // верный пароль
       cy.get('#loginButton').click(); // войти
       cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверка после авторизации
       cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик у п-ля
       })
      
       it('search something', function () {
        cy.visit('https://login.qa.studio/'); // зашла на сайт
        cy.get('#forgotEmailButton').click(); // нажать забыли пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); // верный логин
        cy.get('#restoreEmailButton').click(); // отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверка после восстановление
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик у п-ля
        })
       
       
        it('search something', function () {
            cy.visit('https://login.qa.studio/'); // зашла на сайт
            cy.get('#mail').type('german@dolnikov.ru'); // верный логин
            cy.get('#pass').type('iLoveqastudio11'); // НЕверный пароль
            cy.get('#loginButton').click(); // войти
            cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверка текста
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик у п-ля
        })
        it('search something', function () {
            cy.visit('https://login.qa.studio/'); // зашла на сайт
            cy.get('#mail').type('ggerman@dolnikov.ru'); // НЕверный логин
            cy.get('#pass').type('iLoveqastudio1'); // верный пароль
            cy.get('#loginButton').click(); // войти
            cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверка текста
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик у п-ля
        })

        it('search something', function () {
            cy.visit('https://login.qa.studio/'); // зашла на сайт
            cy.get('#mail').type('germandolnikov.ru'); // НЕверный логин
            cy.get('#pass').type('iLoveqastudio1'); // верный пароль
            cy.get('#loginButton').click(); // войти
            cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверка текста
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик у п-ля
        })


        it('search something', function () {
            cy.visit('https://login.qa.studio/'); // зашла на сайт
            cy.get('#mail').type('GerMan@Dolnikov.ru'); // логин
            cy.get('#pass').type('iLoveqastudio1'); // верный пароль
            cy.get('#loginButton').click(); // войти
            cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверка текста
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик у п-ля
        })
})


 // 