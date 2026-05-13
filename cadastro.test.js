const testedocadastro = require('./function.app');
test('teste do cadastro ', () => {
    expect(testedocadastro.testedocadastro('trabalhofinal@gmail.com', '123345')).toBe(true);
});