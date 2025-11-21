const { test, expect } = require('@playwright/test');

test.describe('Сторінка каталогу товарів', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:3000/products.html');
    });

    test('Має відображатися рівно 3 товари', async ({ page }) => {
        const products = await page.locator('.product-card');
        await expect(products).toHaveCount(3);
    });

    test('Ціна першого товару має бути коректною', async ({ page }) => {
        const firstPrice = page.locator('.product-price').first();
        await expect(firstPrice).toContainText('25 000 грн');
    });

    test('Кнопка змінює стан після кліку (Інтерактивність)', async ({ page }) => {
        const firstBtn = page.locator('.buy-btn').first();
        await expect(firstBtn).toHaveText('Купити');
        await firstBtn.click();
        await expect(firstBtn).toHaveText('В кошику');
        await expect(firstBtn).toHaveClass(/added/);
    });
});