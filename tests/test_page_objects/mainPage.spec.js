import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import { GOLOVNA_BUTTON_TEXT, CATALOG_BUTTON_TEXT, ABOUT_US_BUTTON_TEXT, CONTACTS_BUTTON_TEXT, CART_BUTTON_TEXT, NOVELTIES_SECTION_HEADER_TEXT } from "../../helpers/testDataMainPage.js";

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

	test('ТС.01.01.8 Verify that the site header contains the "Про нас" button', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getAboutUsBtn()).toBeVisible();
		await expect(homePage.locators.getAboutUsBtn()).toHaveText(ABOUT_US_BUTTON_TEXT);

	});

	test('ТС.01.01.9 Verify that the "Про нас" button has a pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getAboutUsBtn()).toBeVisible();
		await expect(homePage.locators.getAboutUsBtn()).toHaveCSS('cursor', 'pointer');

	});

	test('ТС.01.01.10 Verify that the site header contains the "Контакти" button', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getContactsBtn()).toBeVisible();
		await expect(homePage.locators.getContactsBtn()).toHaveText(CONTACTS_BUTTON_TEXT);

	});

	test('ТС.01.01.11 Verify that the "Контакти" button has a pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getContactsBtn()).toBeVisible();
		await expect(homePage.locators.getContactsBtn()).toHaveCSS('cursor', 'pointer');

	});

	test('ТС.01.01.12 Verify that the site header contains the "Кошик" button', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getCartBtn()).toBeVisible();
		await expect(homePage.locators.getCartBtn()).toContainText(CART_BUTTON_TEXT);

	});

	test('ТС.01.01.13 Verify that the "Кошик" button has a pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getCartBtn()).toBeVisible();
		await expect(homePage.locators.getCartBtn()).toHaveCSS('cursor', 'pointer');

	});

	test('ТС.01.01.14 Verify that the "Main" page contains the "Новинки" section', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getNoveltiesSection()).toBeVisible();
		await expect(homePage.locators.getNoveltiesSectionHeader()).toBeVisible();
		await expect(homePage.locators.getNoveltiesSectionHeader()).toHaveText(NOVELTIES_SECTION_HEADER_TEXT);

	});

	test('ТС.01.01.15 Verify that the "Новинки" section contains pagination', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getNoveltiesSectionPagination()).toBeVisible();

	});

	test('ТС.01.01.16 Verify that the pagination contains "Next" (>) button', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getNextBtn()).toBeVisible();

	});

	test('ТС.01.01.17 Verify that the "Next" (>) button has a pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getNextBtn()).toBeVisible();
		await expect(homePage.locators.getNextBtn()).toHaveCSS('cursor', 'pointer');

	});

	test('ТС.01.01.18 Verify that the images of products move forward after clicking on the  "Next" (>) button', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickNextBtn();
		await homePage.clickNextBtn();
		await homePage.clickNextBtn();
		await homePage.clickNextBtn();

		await expect(homePage.locators.getNoveltiesSection()).toBeVisible();

	});

	test('ТС.01.01.19 Verify that the pagination contains "Prev" (<) button', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getPrevBtn()).toBeVisible();

	});

	test('ТС.01.01.20 Verify that the "Prev" (<) button has a auto cursor', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getPrevBtn()).toBeVisible();
		await expect(homePage.locators.getPrevBtn()).toHaveCSS('cursor', 'auto');

	});

	test('ТС.01.01.20.1 Verify that the images of products move back after clicking on the  "Prev" (<) button', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickNextBtn();
		await homePage.clickNextBtn();
		await homePage.clickNextBtn();
		await homePage.clickNextBtn();

		await expect(homePage.locators.getNoveltiesSection()).toBeVisible();

		await homePage.clickPrevBtn();
		await homePage.clickPrevBtn();
		await homePage.clickPrevBtn();
		await homePage.clickPrevBtn();

		await expect(homePage.locators.getNoveltiesSection()).toBeVisible();

	});



	
})

