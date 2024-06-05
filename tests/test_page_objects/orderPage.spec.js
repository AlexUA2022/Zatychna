import { expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import { HEANDING_TEXT, PRODUCT_NAME, COLOR_PRODUCT, PERSON_DATA, MESSAGE_EMAIL, MESSAGE_WARNING } from "../../helpers/testDataOrderPage.js";
import CatalogPage from "../../page_objects/catalogPage.js";
import QuiltedJacketPage from "../../page_objects/guiltedJacket.js";
import PopupShoppingCartWndowPage from "../../page_objects/pop-upShoppingCartWndow.js";
import OrderPage from "../../page_objects/orderPage.js";
import { test, addProductCard } from "../../fixtures/base.js";




test.describe('orderPage.spec', () => {

    test('TC 04.01.1 Verify that the page contains the heading "Ваше замовлення"', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);

        await expect(ogderPage.locators.getHeadingText()).toBeVisible();
        await expect(ogderPage.locators.getHeadingText()).toHaveText(HEANDING_TEXT);

    });

    test('TC 04.01.2 Verify that the page contains a photo of the product', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);

        await expect(ogderPage.locators.getPhotoImages()).toBeVisible();
    });

    test('TC 04.01.3 Verify that the page contains a product name', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);

        await expect(ogderPage.locators.getProductName()).toBeVisible();
        await expect(ogderPage.locators.getProductName()).toHaveText(PRODUCT_NAME);

    });

    test('TC 04.01.4 Verify that the page contains the color of the product', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);

        await expect(ogderPage.locators.getColorProduct()).toBeVisible();
        await expect(ogderPage.locators.getColorProduct()).toHaveText(COLOR_PRODUCT);

    });

    test('TC 04.01.5 Verify that the page contains the color product size', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);

        await expect(ogderPage.locators.getProductSize()).toBeVisible();
        await expect(ogderPage.locators.getProductSize()).toHaveText('S');

    });

    test('TC 04.01.6 Verify that the page contains the quantity of the product', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);

        await expect(ogderPage.locators.getQuantityProduct()).toBeVisible();
        await expect(ogderPage.locators.getQuantityProduct()).toHaveText('x 1');

    });

    test('TC 04.01.7 Verify that the page contains the cost of the product', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);

        await expect(ogderPage.locators.getCostProduct()).toBeVisible();
        await expect(ogderPage.locators.getCostProduct()).toHaveText('3 990 UAH');

    });

    test('TC 04.01.8 Verify that the page contains an information section about the product', async ({ page, addProductCard }) => {
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

    test('TC 04.01.11.1 Verify that the "Особисті дані" section contains the mandatory "Ім’я *"field', async ({ page, addProductCard }) => {
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

    test('TC 04.01.12.1 Verify that the "Особисті дані" section contains the mandatory "Номер телефону  *"field', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);
        await expect(ogderPage.locators.getNumberPhoneField()).toBeVisible();
        await expect(ogderPage.locators.getNumberPhoneField()).toHaveCSS('border', '1px solid rgb(0, 0, 0)');
        await ogderPage.clickOrderButton();
        await expect(ogderPage.locators.getNumberPhoneField()).toHaveCSS('border', '1px solid rgb(255, 0, 0)')

    });

    test('TC 04.01.13 Verify that "Телефон" field contains 9 digits', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);
        await ogderPage.fillNumberPhoneField();
        await expect(ogderPage.locators.getNumberPhoneField()).toBeTruthy();

    });

    test('TC 04.01.14 Verify that the "Особисті дані" section contains the mandatory "Email  *"field', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);
        await expect(ogderPage.locators.getEmailField()).toBeVisible();
        await expect(ogderPage.locators.getEmailField()).toHaveCSS('border', '1px solid rgb(22, 11, 3)');
        await ogderPage.clickOrderButton();
        await expect(ogderPage.locators.getEmailField()).toHaveCSS('border', '1px solid rgb(255, 0, 0)')

    });

    test('TC 04.01.30 Verify that the phone field contains a +38 placeholder', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);
        await expect(ogderPage.locators.getNumberPhoneField()).toHaveAttribute('placeholder', '+38(0__)___-__-__')
    });

    test('TC 04.01.40 Verify that the  the email address details are entered by entering a space after the @ sign, an error message will appear', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);
        await ogderPage.fillSpaceAfterAtEmailField();
        await ogderPage.clickOrderButton();
        await page.waitForTimeout(2000);
        await expect(ogderPage.locators.getMessageEmailField()).toBeTruthy()

    });

    test('TC 04.01.41 Verify that the the email address data is entered by putting a space before the @ sign, an error message will appear', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);
        await ogderPage.fillSpaceBeforeAtEmailField();
        await ogderPage.clickOrderButton();
        await page.waitForTimeout(2000);
        await expect(ogderPage.locators.getMessageEmailField()).toBeTruthy()

    });

    test('TC 04.01.42 Verify that the the email address details are entered by putting enter e-mail without a dot in the domain name, an error message will appear', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);
        await ogderPage.fillWithoutDotDomainEmailField();
        await ogderPage.clickOrderButton();
        await page.waitForTimeout(2000);
        await expect(ogderPage.locators.getMessageEmailField()).toBeTruthy()

    });

    test('TC 04.01.43 Verify that email address details are entered by putting enter e-mail with a dot in the domain name, an error message will appear', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);
        await ogderPage.fillWihtDotDomainNameEmailField();
        await ogderPage.clickOrderButton();
        await page.waitForTimeout(2000);
        await expect(ogderPage.locators.getMessageEmailField()).toBeTruthy()

    });

    test('TC 04.01.44 Verify that the email address details are entered, without the @ sign in the domain name, an error message will appear', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);
        await ogderPage.fillWihtoutAtDotEmailField();
        await ogderPage.clickOrderButton();
        await page.waitForTimeout(2000);
        await expect(ogderPage.locators.getMessageEmailField()).toBeTruthy()

    });

    test('TC 04.01.45 Verify that email address details are entered by entering an email without text before the @ sign, an error message will appear', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);
        await ogderPage.fillWihtoutNameEmailField();
        await ogderPage.clickOrderButton();
        await page.waitForTimeout(2000);
        await expect(ogderPage.locators.getMessageEmailField()).toBeTruthy()

    });

    test('TC 04.01.46 Verify that the email address data is entered by entering special characters before the @ sign, an error message will appear', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);
        await ogderPage.fillSpecialCharactersEmailField();
        await ogderPage.clickOrderButton();
        await page.waitForTimeout(2000);
        await expect(ogderPage.locators.getMessageEmailField()).toBeTruthy()

    });
    test('TC 04.01.47 Verify that the email address details are entered by entering Cyrillic letters before the @sign, an error message will appear', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);
        await ogderPage.fillCyrillicLettersEmailField();
        await ogderPage.clickOrderButton();
        await page.waitForTimeout(2000);
        await expect(ogderPage.locators.getMessageEmailField()).toBeTruthy()

    });


})
