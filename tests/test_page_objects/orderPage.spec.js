import { expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import {HEANDING_TEXT, PRODUCT_NAME, COLOR_PRODUCT, PERSON_DATA, NAME_FIELD_TEXT, MESSAGE_WARNING} from "../../helpers/testDataOrderPage.js";
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

    });

    test('TC 04.01.8 Verify that the page contains an information section about the product', async ({ page, addProductCard}) => {
        const ogderPage = new OrderPage(page);

        await expect(ogderPage.locators.getInformationSctionProduct()).toBeVisible();
        await expect(ogderPage.locators.getInformationSctionProduct()).toHaveCSS('background', 'rgb(244, 239, 235) none repeat scroll 0% 0% / auto padding-box border-box');

    });

    test('TC 04.01.10 Verify that the section "Особисті дані".', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);
        await expect(ogderPage.locators.getPersonalDataSection()).toBeVisible;
        await expect(ogderPage.locators.getPersonalDataSection()).toHaveText(PERSON_DATA);
    });

    test('TC 04.01.10.1 Verify that the "Особисті дані" section contains the mandatory "Прізвище *"field', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);
        await expect(ogderPage.locators.getNameField()).toBeVisible();
        await expect(ogderPage.locators.getNameField()).toHaveCSS('border', '1px solid rgb(22, 11, 3)');
        await ogderPage.clickOrderButton();
        await expect(ogderPage.locators.getNameField()).toHaveCSS('border', '2px solid rgb(124, 125, 128)')

    });

    test('TC 04.01.10.1 Verify that the"Прізвище" field contains only letters, a message was received when entering invalid data', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);
        await ogderPage.filldigitNameField();
        await ogderPage.clickOrderButton();
        await expect(ogderPage.locators.getMessageWarnings()).toBeVisible();
        await expect(ogderPage.locators.getMessageWarnings()).toHaveText(MESSAGE_WARNING);

    });

   test('TC 04.01.11.1 Verify that the "Особисті дані" section contains the mandatory "Ім’я *"field', async ({ page, addProductCard}) => {
    const ogderPage = new OrderPage(page);
    await expect(ogderPage.locators.getName2Field()).toBeVisible();
    await expect(ogderPage.locators.getName2Field()).toHaveCSS('border', '1px solid rgb(22, 11, 3)');
        await ogderPage.clickOrderButton();
        await expect(ogderPage.locators.getName2Field()).toHaveCSS('border', '1px solid rgb(255, 0, 0)')

   });

   test('TC 04.01.12 Verify that the"Ім’я" field contains only letters, a message was received when entering invalid data', async ({ page, addProductCard }) => {
    const ogderPage = new OrderPage(page);
    await ogderPage.filldigitName2Field();
    await ogderPage.clickOrderButton();
    await expect(ogderPage.locators.getMessageWarnings()).toBeVisible();
    await expect(ogderPage.locators.getMessageWarnings()).toHaveText(MESSAGE_WARNING);

});


});