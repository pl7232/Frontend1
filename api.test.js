const testeAPI = require('./function');

test('Teste do API', () => {
    expect(testeAPI('testefinal@gmail.com', '123')).toBe(true); 
});