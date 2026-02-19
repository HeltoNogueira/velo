import { test, expect } from '@playwright/test';


/// AAA - Arrange, Act, Assert

test('Deve consultar Pedidos Aprovados', async ({ page }) => {
  
// Arrange
 await page.goto('http://localhost:5173/');
  // Checkpoint: Verifica se o título da página é "Velô Sprint"
  await expect(page.getByTestId('hero-section').getByRole('heading')).toContainText('Velô Sprint');

  await page.getByRole('link', { name: 'Consultar Pedido' }).click();
  await expect(page.getByRole('heading')).toContainText('Consultar Pedido');
 
  // Act
  await page.getByRole('textbox', { name: 'Número do Pedido' }).fill('VLO-7LDWFT');
  //await page.getByTestId('search-order-button').click()
  await page.getByRole('button', { name: 'Buscar Pedido' }).click();

  //busca pelo id do pedido
  //await page.locator('input[name="order-id"]').fill('VLO-7LDWFT');
  //await page.locator('input[placeholder="Ex: VLO-ABC123"]').fill('VLO-7LDWFT');
  //await page.locator('//label[text()="Número do Pedido"]/..//input').fill('VLO-7LDWFT');
  //await page.getByRole('textbox', { name: 'Número do Pedido' }).fill('VLO-7LDWFT');
  //await page.getByLabel('Número do Pedido').fill('VLO-7LDWFT');
  //await page.getByPlaceholder('Ex: VLO-ABC123').fill('VLO-7LDWFT');
  //await page.getByTestId('search-order-button').click();

  // Assert
  const orderCode = page.locator('//p[text()="Pedido"]/..//p[text()="VLO-7LDWFT"]')
  await expect(orderCode).toBeVisible({timeout: 10000})

  await expect(page.getByText('APROVADO')).toBeVisible();

});