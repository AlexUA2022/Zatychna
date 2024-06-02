import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import {DROPDOWN_SORTING_TEXT} from "../../helpers/testDataCatalogPage.js";
import {CATALOG_URL} from "../../helpers/testDataMainPage.js"
import CatalogPage from "../../page_objects/catalogPage.js";


test.describe('catalogPage.spec', () => {
	test.beforeEach(async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.open();
        await homePage.clickCatalogBlackBtn()

	});

    test('TC 02.01.1Verify that the page contains the dropdown "Сортування за ціною: від вищої до нижчої"', async ({ page }) => {
        const catalogPage = new CatalogPage(page);
        await expect(catalogPage.locators.getDropdownSorting()).toBeVisible();
        await expect(catalogPage.locators.getDropdownSorting()).toHaveText(DROPDOWN_SORTING_TEXT);
        await expect(catalogPage.locators.getDropdownSorting()).toHaveCSS('background', 'rgb(244, 239, 235) none repeat scroll 0% 0% / auto padding-box border-box');
        await expect(page).toHaveURL(CATALOG_URL);
        await expect(catalogPage.locators.getDropdownSorting()).toHaveCSS('cursor', 'pointer');
    });

    test ('TC 02.01.3 Verify that the Successful sorting "Сортування за ціною: від вищої до нижчої"was carried out', async ({ page }) => {
        const catalogPage = new CatalogPage(page);
        const priceElements = await page.$$('.sc-gjLLkZ.hOoNNp');

    for (const priceElement of priceElements) {
        const priceText = await priceElement.textContent();
        console.log(priceText);
    };

});

    test('TC 02.01.4 Verify that the dropdown "Сортування за цiною" contains a selection "від нижчої до вищої"', async ({ page }) => {
        const catalogPage = new CatalogPage(page);
        await catalogPage.clickDropdownSorting();
        await expect(catalogPage.locators.getDropdownSortingDown()).toBeVisible();
        await expect(catalogPage.locators.getDropdownSortingDown()).toHaveCSS('background', 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box');
    });

    test('TC 02.01.5 Verify that the Successful sorting has been carried out "від нижчої до вищої"', async ({ page }) => {
        const catalogPage = new CatalogPage(page);
        await catalogPage.clickDropdownSorting();
        const priceElements = await page.$$('.sc-gjLLkZ.hOoNNp');

    for (const priceElement of priceElements) {
        const priceText = await priceElement.textContent();
        console.log(priceText);
    };
    });

    test('TC 02.01.6 Verify that the  page contains the "Всi" button',async ({ page }) => {
        const catalogPage = new CatalogPage(page);
        await expect(catalogPage.locators.getAllBtn()).toBeVisible();
        await expect(catalogPage.locators.getAllBtn()).toHaveText('Всі');
        await expect(catalogPage.locators.getAllBtn()).toHaveCSS('cursor', 'pointer');
        await expect(catalogPage.locators.getAllBtn()).toHaveCSS('background', 'rgb(22, 11, 3) none repeat scroll 0% 0% / auto padding-box border-box');
    });

    test('TC 02.01.7 Verify that the page contains a "Футболки" button', async ({ page }) => {
        const catalogPage = new CatalogPage(page);
        await expect(catalogPage.locators.getTshirtsBtn()).toBeVisible();
        await expect(catalogPage.locators.getTshirtsBtn()).toHaveText('Футболки');
        await expect(catalogPage.locators.getTshirtsBtn()).toHaveCSS('cursor', 'pointer');
        await expect(catalogPage.locators.getTshirtsBtn()).toHaveCSS('border', '1px solid rgb(22, 11, 3)');

    });

    test('TC 02.01.8 Verify that the page contains a "Костюми" button', async ({ page }) => {
        const catalogPage = new CatalogPage(page);
        await expect(catalogPage.locators.getSuitsBtn()).toBeVisible();
        await expect(catalogPage.locators.getSuitsBtn()).toHaveText('Костюми');
        await expect(catalogPage.locators.getSuitsBtn()).toHaveCSS('cursor', 'pointer');
        await expect(catalogPage.locators.getSuitsBtn()).toHaveCSS('border', '1px solid rgb(22, 11, 3)');
});

test('TC 02.01.8 Verify that the page contains a "Свiтоши" button', async ({ page }) => {
    const catalogPage = new CatalogPage(page);
    await expect(catalogPage.locators.getHoodiesBtn()).toBeVisible();
    await expect(catalogPage.locators.getHoodiesBtn()).toHaveText('Світшоти');
    await expect(catalogPage.locators.getHoodiesBtn()).toHaveCSS('cursor', 'pointer');
    await expect(catalogPage.locators.getHoodiesBtn()).toHaveCSS('border', '1px solid rgb(22, 11, 3)');
});
test('TC 02.01.9 Verify that the page contains a "Худі" button', async ({ page }) => {
    const catalogPage = new CatalogPage(page);
    await expect(catalogPage.locators.getHoodiessBtn()).toBeVisible();
    await expect(catalogPage.locators.getHoodiessBtn()).toHaveText('Худі');
    await expect(catalogPage.locators.getHoodiessBtn()).toHaveCSS('cursor', 'pointer');
    await expect(catalogPage.locators.getHoodiessBtn()).toHaveCSS('border', '1px solid rgb(22, 11, 3)');
});

test('TC 02.01.10 Verify that the page contains a "Штани" button', async ({ page }) => {
    const catalogPage = new CatalogPage(page);
    await expect(catalogPage.locators.getPantsBtn()).toBeVisible();
    await expect(catalogPage.locators.getPantsBtn()).toHaveText('Штани');
    await expect(catalogPage.locators.getPantsBtn()).toHaveCSS('cursor', 'pointer');
    await expect(catalogPage.locators.getPantsBtn()).toHaveCSS('border', '1px solid rgb(22, 11, 3)');
});

test('TC 02.01.11 Verify that the page contains a "Спідниці" button', async ({ page }) => {
    const catalogPage = new CatalogPage(page);
    await expect(catalogPage.locators.getSkirtBtn()).toBeVisible();
    await expect(catalogPage.locators.getSkirtBtn()).toHaveText('Спідниці');
    await expect(catalogPage.locators.getSkirtBtn()).toHaveCSS('cursor', 'pointer');
    await expect(catalogPage.locators.getSkirtBtn()).toHaveCSS('border', '1px solid rgb(22, 11, 3)');
});

test('TC 02.01.11 Verify that the page contains a Сукні" button', async ({ page }) => {
    const catalogPage = new CatalogPage(page);
    await expect(catalogPage.locators.getDressesBtn()).toBeVisible();
    await expect(catalogPage.locators.getDressesBtn()).toHaveText('Сукні');
    await expect(catalogPage.locators.getDressesBtn()).toHaveCSS('cursor', 'pointer');
    await expect(catalogPage.locators.getDressesBtn()).toHaveCSS('border', '1px solid rgb(22, 11, 3)');
});



});
