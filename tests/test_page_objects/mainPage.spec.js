import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import { GOLOVNA_BUTTON_TEXT, CATALOG_BUTTON_TEXT } from "../../helpers/testDataMainPage.js";

test.describe('mainPage.spec', () => {
	test.beforeEach(async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.open();

	});

	test('ТС.01.01.1 Verify that the "Main" page contains the site header', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getHeader()).toBeVisible();

	});

	test('ТС.01.01.2 Verify that the site header contains the logo', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getLogo()).toBeVisible();

	});

	test('ТС.01.01.3 Verify that the logo has a pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getLogo()).toBeVisible();
		await expect(homePage.locators.getLogo()).toHaveCSS('cursor', 'pointer');

	});

	test('ТС.01.01.4 Verify that the site header contains the "Головна" button', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getGolovnaBtn()).toBeVisible();
		await expect(homePage.locators.getGolovnaBtn()).toHaveText(GOLOVNA_BUTTON_TEXT);

	});

	test('ТС.01.01.5 Verify that the "Головна" button has a pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getGolovnaBtn()).toBeVisible();
		await expect(homePage.locators.getGolovnaBtn()).toHaveCSS('cursor', 'pointer');

	});

	test('ТС.01.01.6 Verify that the site header contains the "Каталог" button', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getCatalogBtn()).toBeVisible();
		await expect(homePage.locators.getCatalogBtn()).toHaveText(CATALOG_BUTTON_TEXT);

	});

	test('ТС.01.01.7 Verify that the "Каталог" button has a pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getCatalogBtn()).toBeVisible();
		await expect(homePage.locators.getCatalogBtn()).toHaveCSS('cursor', 'pointer');

	});

	
})

