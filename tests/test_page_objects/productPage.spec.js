import { expect } from "@playwright/test";
import { PRODUCT_NAME_TEXT, PRODUCT_PRICE_TEXT, PRODUCT_DESCRIPTION_TEXT } from "../../helpers/testDataProductPage.js";
import { test, openProductCart } from "../../fixtures/base.js";
import ProductPage from "../../page_objects/productPage.js";


test.describe('productPage.spec.spec', () => {

	test('ТС 03.01.1 Verify that the product name is displayed in the product card', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await expect(productPage.locators.getProductName()).toBeVisible();
		await expect(productPage.locators.getProductName()).toHaveText(PRODUCT_NAME_TEXT);

	});

	test('ТС 03.01.2 Verify that the product card contains the price of product', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await expect(productPage.locators.getProductPrice()).toBeVisible();
		await expect(productPage.locators.getProductPrice()).toHaveText(PRODUCT_PRICE_TEXT);

	});

	test('ТС 03.01.3 Verify that the product card contains the product description text', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await expect(productPage.locators.getProductDescription()).toBeVisible();
		await expect(productPage.locators.getProductDescription()).toHaveText(PRODUCT_DESCRIPTION_TEXT);

	});


})