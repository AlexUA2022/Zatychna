import { expect } from "@playwright/test";
import { CART_BREADCRUMBS_TEXT, CART_URL, LIST_HEADERS, PRODUCT_NAME_TEXT, PRODUCT_SIZE_TEXT, PRODUCT_COLOR_TEXT } from "../../helpers/testDataCartPage.js";
import { test, productInTheShoppingCart } from "../../fixtures/base.js";
import CartPage from "../../page_objects/cartPage.js";


test.describe('cartPage.spec', () => {

	test('ТС 05.01.1 Verify that the user is redirected to the cart page after clicking on the "Кошик" button', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		await expect(page).toHaveURL(CART_URL);

		await expect(cartPage.locators.getBreadcrumbsCart()).toBeVisible();
		await expect(cartPage.locators.getBreadcrumbsCart()).toHaveText(CART_BREADCRUMBS_TEXT);

	});

	test('ТС 05.01.2 Verify the cart page shows the selected product block', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		await expect(cartPage.locators.getSelectedProductBlock()).toBeVisible();

	});

	test('ТС 05.01.3 Verify that the cart page contains the "Товар, Кількість, Ціна" headers', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		for (const header of LIST_HEADERS) {
			const headerLocator = cartPage.locators.getHeaders(header);
			
			await expect(headerLocator).toBeVisible();

			await expect(headerLocator).toContainText(header);
		 }

	});

	test('ТС 05.01.4 Verify that the selected product block contains the name of the product', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		await expect(cartPage.locators.getProductName()).toBeVisible();
		
		await expect(cartPage.locators.getProductName()).toHaveText(PRODUCT_NAME_TEXT);

	});

	test('ТС 05.01.5 Verify that the selected product block contains the size of the product', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		await expect(cartPage.locators.getProductSize()).toBeVisible();
		
		await expect(cartPage.locators.getProductSize()).toHaveText(PRODUCT_SIZE_TEXT);

	});

	test('ТС 05.01.6 Verify that the selected product block contains the color of the product', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		await expect(cartPage.locators.getProductColor()).toBeVisible();
		
		await expect(cartPage.locators.getProductColor()).toHaveText(PRODUCT_COLOR_TEXT);

	});

	test('ТС 05.01.7 Verify that the selected product block contains the quantity button', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		await expect(cartPage.locators.getQuantityBtn()).toBeVisible();
		
	});


})