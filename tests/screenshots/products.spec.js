const { test, expect } = require('@playwright/test');

test('Скріншот сітки товарів', async ({ page }) => {
    await page.goto('http://localhost:3000/products.html');
    const grid = await page.locator('#grid');
    expect(await grid.screenshot()).toMatchSnapshot('products-grid.png');
});

test('Скріншот картки товару у стані "В кошику"', async ({ page }) => {
    await page.goto('http://localhost:3000/products.html');
    const card = await page.locator('.product-card').first();
    const btn = card.locator('button');
    await btn.click();
    expect(await card.screenshot()).toMatchSnapshot('product-card-added.png');
});