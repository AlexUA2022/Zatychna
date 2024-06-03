import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import {} from "../../helpers/testDataOrderPage.js";
import CatalogPage from "../../page_objects/catalogPage.js";
import QuiltedJacketPage from "../../page_objects/guiltedJacket.js";
import PopupShoppingCartWndowPage from "../../page_objects/pop-upShoppingCartWndow.js";
import OrderPage from "../../page_objects/orderPage.js";



test.describe('orderPage.spec', () => {
	test.beforeEach(async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.open();
        await homePage.clickCatalogBlackBtn();


	});

    test('', async ({ page }) => {

        const catalogPage = new CatalogPage(page);
        await catalogPage.clickJacketProduct();
        await page.waitForTimeout(2000);
        const jacketPage = new QuiltedJacketPage(page);
        await jacketPage.clickSizeButton();
        await jacketPage. clickCartButton();
        const madalWindowPage = new PopupShoppingCartWndowPage(page)
        await madalWindowPage.clickCheckoutButton();
        await page.waitForTimeout(2000);

        const ogderPage = new OrderPage(page);



    });

});