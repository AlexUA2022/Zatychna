import { expect } from "@playwright/test";
import { PRODUCT_NAME_TEXT, PRODUCT_PRICE_TEXT, PRODUCT_DESCRIPTION_TEXT, COLOR_SELECTION_BLOCK_HEADER_TEXT, SIZE_SELECTION_BLOCK_HEADER_TEXT, DIMANTION_GRID_LINK_TEXT } from "../../helpers/testDataProductPage.js";
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

	test('ТС 03.01.4 Verify that the product card contains a color selection block', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await expect(productPage.locators.getColorSelectionBlock()).toBeVisible();

	});

	test('ТС 03.01.5 Verify that the color selection block contains a header', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await expect(productPage.locators.getColorSelectionBlockHeader()).toBeVisible();
		await expect(productPage.locators.getColorSelectionBlockHeader()).toHaveText(COLOR_SELECTION_BLOCK_HEADER_TEXT);

	});

	test('ТС 03.01.6 Verify that the color selection block contains buttons for different colors', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await expect(productPage.locators.getColorSelectionBtns()).toBeVisible();

	});

	test('ТС 03.01.7 Verify that the color button has a pointer cursor', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await expect(productPage.locators.getColorSelectionBtn()).toBeVisible();
		await expect(productPage.locators.getColorSelectionBtn()).toHaveCSS('cursor', 'pointer');
		await expect(productPage.locators.getColorSelectionBtn()).toHaveCSS('background', 'rgb(255, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box');

	});

	test('ТС 03.01.8 Verify that the product card contains a size selection block', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await expect(productPage.locators.getSizeSelectionBlock()).toBeVisible();

	});

	test('ТС 03.01.9 Verify that the size selection block contains a header', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await expect(productPage.locators.getSizeSelectionBlockHeader()).toBeVisible();
		await expect(productPage.locators.getSizeSelectionBlockHeader()).toHaveText(SIZE_SELECTION_BLOCK_HEADER_TEXT);

	});

	test('ТС 03.01.10 Verify that the size selection block contains buttons for different sizes', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await expect(productPage.locators.getSizeSelectionBlockBtns()).toBeVisible();

	});

	test('ТС 03.01.11 Verify that the size button has a pointer cursor', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await expect(productPage.locators.getSizeSelectionBlockBtn()).toBeVisible();
		await expect(productPage.locators.getSizeSelectionBlockBtn()).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.01.12 Verify that the size selection block contains the "Розмiрна сiтка" link', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await expect(productPage.locators.getDimensionalGridLink()).toBeVisible();
		await expect(productPage.locators.getDimensionalGridLink()).toHaveText(DIMANTION_GRID_LINK_TEXT);

	});

})