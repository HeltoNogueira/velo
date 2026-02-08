import { test, expect } from '@playwright/test';

test('Consultar Pedidos', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  
  // Checkpoint: Verifica se o título da página é "Velô Sprint"
  await expect(page.getByTestId('hero-section').getByRole('heading')).toContainText('Velô Sprint');

  await page.getByRole('link', { name: 'Consultar Pedido' }).click();
  
  // Checkpoint: Verifica se a página de consulta de pedidos é carregada
  await expect(page.getByRole('heading')).toContainText('Consultar Pedido');
 
  await page.getByTestId('search-order-id').fill('VLO-7LDWFT');


  await page.getByTestId('search-order-button').click();

  await expect(page.getByTestId('order-result-id')).toBeVisible();
  await expect(page.getByTestId('order-result-id')).toContainText('VLO-7LDWFT');

  await expect(page.getByTestId('order-result-status')).toBeVisible();
  await expect(page.getByTestId('order-result-status')).toContainText('APROVADO');

});