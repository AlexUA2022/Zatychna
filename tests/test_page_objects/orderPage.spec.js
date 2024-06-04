import { expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import {HEANDING_TEXT, PRODUCT_NAME, COLOR_PRODUCT} from "../../helpers/testDataOrderPage.js";
import CatalogPage from "../../page_objects/catalogPage.js";
import QuiltedJacketPage from "../../page_objects/guiltedJacket.js";
import PopupShoppingCartWndowPage from "../../page_objects/pop-upShoppingCartWndow.js";
import OrderPage from "../../page_objects/orderPage.js";
import {test, addProductCard} from "../../fixtures/base.js";




test.describe('orderPage.spec', () => {

    test('TC 04.01.1 Verify that the page contains the heading "Ваше замовлення"', async ({ page, addProductCard}) => {
        const ogderPage = new OrderPage(page);

        await expect(ogderPage.locators.getHeadingText()).toBeVisible();
        await expect(ogderPage.locators.getHeadingText()).toHaveText(HEANDING_TEXT);

    });

    test('TC 04.01.2 Verify that the page contains a photo of the product', async ({ page, addProductCard}) => {
        const ogderPage = new OrderPage(page);

        await expect(ogderPage.locators.getPhotoImages()).toBeVisible();
    });

    test('TC 04.01.3 Verify that the page contains a product name', async ({ page, addProductCard}) => {
        const ogderPage = new OrderPage(page);

        await expect(ogderPage.locators.getProductName()).toBeVisible();
        await expect(ogderPage.locators.getProductName()).toHaveText(PRODUCT_NAME);

    });

    test('TC 04.01.4 Verify that the page contains the color of the product', async ({ page, addProductCard}) => {
        const ogderPage = new OrderPage(page);

        await expect(ogderPage.locators.getColorProduct()).toBeVisible();
        await expect(ogderPage.locators.getColorProduct()).toHaveText(COLOR_PRODUCT);

    });

    test('TC 04.01.5 Verify that the page contains the color product size', async ({ page, addProductCard}) => {
        const ogderPage = new OrderPage(page);

        await expect(ogderPage.locators.getProductSize()).toBeVisible();
        await expect(ogderPage.locators.getProductSize()).toHaveText('S');

    });

    test('TC 04.01.6 Verify that the page contains the quantity of the product', async ({ page, addProductCard}) => {
        const ogderPage = new OrderPage(page);

        await expect(ogderPage.locators.getQuantityProduct()).toBeVisible();
        await expect(ogderPage.locators.getQuantityProduct()).toHaveText('x 1');

    });

    test('TC 04.01.7 Verify that the page contains the cost of the product', async ({ page, addProductCard}) => {
        const ogderPage = new OrderPage(page);

        await expect(ogderPage.locators.getCostProduct()).toBeVisible();
        await expect(ogderPage.locators.getCostProduct()).toHaveText('3 990 UAH');

    })

});