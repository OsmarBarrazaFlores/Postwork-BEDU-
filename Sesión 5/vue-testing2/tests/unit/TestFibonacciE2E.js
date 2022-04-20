//Importar TestCafe
import { watchFile } from 'graceful-fs';
import {Selector} from 'testcafe';

fixture`Getting Started`
    .page`http://localhost:8080/`;

test('Prueba valida 1', async t => {
    await t
        .typeText('input[data-test-id="number-to-calculate-fibonacci"]', '6')
        .click('button[data-test-id="calculate-button"]')

        // Usa las verificaciones pra checar si el valor actual corresponde con el vlaor esperado
        .expect(Selector('span[data-test-id="result"]').innerText).eql('8');
});

test('Prueba valida 2', async t => {
    await t
        .typeText('input[data-test-id="number-to-calculate-fibonacci"]', '7')
        .click('button[data-test-id="calculate-button"]')

        // Usa las verificaciones pra checar si el valor actual corresponde con el vlaor esperado
        .expect(Selector('span[data-test-id="result"]').innerText).eql('13');
});

test('Prueba invalida', async t => {
    await t
        .typeText('input[data-test-id="number-to-calculate-fibonacci"]', '6')
        .click('button[data-test-id="calculate-button"]')

        // Usa las verificaciones pra checar si el valor actual corresponde con el vlaor esperado
        .expect(Selector('span[data-test-id="result"]').innerText).eql('5');
});
test('Prueba invalida 2', async t => {
    await t
        .typeText('input[data-test-id="number-to-calculate-fibonacci"]', '3')
        .click('button[data-test-id="calculate-button"]')

        // Usa las verificaciones pra checar si el valor actual corresponde con el vlaor esperado
        .expect(Selector('span[data-test-id="result"]').innerText).eql('8');
});