import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import { GOLOVNA_BUTTON_TEXT, CATALOG_BUTTON_TEXT, ABOUT_US_BUTTON_TEXT, CONTACTS_BUTTON_TEXT, CART_BUTTON_TEXT, NOVELTIES_SECTION_HEADER_TEXT, LIST_BUTTONS_HEADER, BASE_URL, LIST_BUTTONS_PAGES_URLs_END_POINTS, CONTACTS_URL, CONTACTS_PAGE_HEADER_TEXT, CATALOG_BUTTON_BLACK_TEXT, CATALOG_URL, SEARCH_MESSAGE_TEXT, CATEGORY_SECTION_HEADER_TEXT, expectedCategoryNames, CATALOG_BREADCRUMBS_TEXT, SHOW_MORE_LINK_TEXT, ZATYSHNA_DESCRIPTION_TEXT, ZATYSHNA_ADDITIONAL_TEXT, SUBSCRIPTION_SECTION_BTN_TEXT, SUBSCRIPTION_SECTION_FIELD_MESSAGE_TEXT } from "../../helpers/testDataMainPage.js";


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

	LIST_BUTTONS_HEADER.forEach((namePage, indx) => {
		test(`TC 02.01.21 Verify that the user can navigate to ${namePage} page by clicking on the appropriate button in the of website header`, async ({ page }) => {
			const homePage = new HomePage(page);

			await homePage.clickBtnHeader(namePage);

			await expect(page).toHaveURL(BASE_URL + LIST_BUTTONS_PAGES_URLs_END_POINTS[indx]);
			await expect(page.getByRole('main').getByRole('link', { name: namePage })).toHaveText(namePage);

		})

	});

	test('ТС.01.01.21.1 Verify that the user can navigate to "Головна"  page by clicking on the appropriate button in the of website header', async ({ page }) => {
		const homePage = new HomePage(page);

		const contactsPage = await homePage.clickgetContactsBtn();

		await expect(page).toHaveURL(CONTACTS_URL);
		await expect(contactsPage.locators.getContactsPageHeader()).toBeVisible();
		await expect(contactsPage.locators.getContactsPageHeader()).toHaveText(CONTACTS_PAGE_HEADER_TEXT);

		await contactsPage.clickGolovnaBtn();

		await expect(page).toHaveURL(BASE_URL);

	});

	test('ТС.01.01.22 Verify that the user can navigate to "Головна" page by clicking on the breadcrumbs on the "Контакти" page', async ({ page }) => {
		const homePage = new HomePage(page);

		const contactsPage = await homePage.clickgetContactsBtn();
		await expect(page).toHaveURL(CONTACTS_URL);
		await expect(contactsPage.locators.getContactsPageHeader()).toBeVisible();
		await expect(contactsPage.locators.getContactsPageHeader()).toHaveText(CONTACTS_PAGE_HEADER_TEXT);

		await contactsPage.clickContactsPageBreadcrumbs();

		await expect(page).toHaveURL(BASE_URL);

	});

	test('ТС.01.01.23 Verify that the "Main" page contains the "Каталог" (black) button', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getCatalogBlackBtn()).toBeVisible();
		await expect(homePage.locators.getCatalogBlackBtn()).toHaveText(CATALOG_BUTTON_BLACK_TEXT);

	});

	test('ТС.01.01.24 Verify that the "Каталог" (black) button has a pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getCatalogBlackBtn()).toBeVisible();
		await expect(homePage.locators.getCatalogBlackBtn()).toHaveCSS('cursor', 'pointer');

	});

	test('ТС.01.01.25 Verify that the "Каталог" page opens after clicking on the "Каталог" (black) button', async ({ page }) => {
		const homePage = new HomePage(page);

		const catalogPage = await homePage.clickCatalogBlackBtn();

		await expect(catalogPage.locators.getCatalogBreadcrumbs()).toBeVisible();
		await expect(catalogPage.locators.getCatalogBreadcrumbs()).toHaveText(CATALOG_BUTTON_BLACK_TEXT);
		await expect(page).toHaveURL(CATALOG_URL);

	});

	test('ТС.01.01.25.1 Verify that the "Каталог" (black) button is colored black', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getCatalogBlackBtn()).toBeVisible();
		await expect(homePage.locators.getCatalogBlackBtn()).toHaveCSS('background', 'rgb(22, 11, 3) none repeat scroll 0% 0% / auto padding-box border-box');

	});

	test('ТС.01.01.2.1 Verify that the user can navigate to the main page after clicking on the logo', async ({ page }) => {
		const homePage = new HomePage(page);

		const catalogPage = await homePage.clickCatalogBlackBtn();
		await expect(page).toHaveURL(CATALOG_URL);
		await expect(catalogPage.locators.getCatalogBreadcrumbs()).toBeVisible();

		await catalogPage.clickLogo();

		await expect(page).toHaveURL(BASE_URL);

	});

	test('ТС.01.01.13.1 Verify that the "Кошик" button has a icon (cart)', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getIconCartBtn()).toBeVisible();

	});

	test('ТС.01.01.26 Verify that the header contains a search field button (magnifying glass icon)', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getSearchBtn()).toBeVisible();

	});

	test('ТС.01.01.26.1 Verify that the search field is appeared after clicking on the search field button', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickSearchBtn();

		await expect(homePage.locators.getSearchField()).toBeVisible();

	});

	test('ТС.01.01.26.2 Verify that the search field contains the "Шукати" placeholder', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickSearchBtn();

		await expect(homePage.locators.getSearchFieldPlaceholder()).toBeVisible();
		await expect(homePage.locators.getSearchFieldPlaceholder()).toHaveAttribute('placeholder', 'Шукати')

	});

	test('ТС.01.01.26.3 Verify that the search field placeholder contains the magnifying glass icon', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickSearchBtn();

		await expect(homePage.locators.getSearchFieldPlaceholderIcon()).toBeVisible();

	});

	test('ТС.01.01.26.4 Verify that the search field placeholder disappears after entering text in the field', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickSearchBtn();
		await homePage.typeSearchField();

		await expect(homePage.locators.getSearchField()).toBeVisible();

	});

	test('ТС.01.01.26.5 Verify that the search field contains the "X" (close) button', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickSearchBtn();

		await expect(homePage.locators.getSearchFieldCrossBtn()).toBeVisible();

	});

	test('ТС.01.01.26.6 Verify that the "X" (close) button has a pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickSearchBtn();

		await expect(homePage.locators.getSearchFieldCrossBtn()).toBeVisible();
		await expect(homePage.locators.getSearchFieldCrossBtn()).toHaveCSS('cursor', 'pointer');

	});

	test('ТС.01.01.26.7 Verify that the search field is closed after clicking on the "X" (close) button', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickSearchBtn();
		await expect(homePage.locators.getSearchField()).toBeVisible();

		await homePage.clickSearchFieldCrossBtn();

		await expect(homePage.locators.getSearchField()).not.toBeVisible();

	});

	test('ТС.01.01.26.8 Verify that the dropdown of the found goods opens after entering valid "фут" data', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickSearchBtn();
		await homePage.typeSearchFieldValidData();

		await expect(homePage.locators.getDropdownValidData()).toBeVisible();

	});

	test('ТС.01.01.26.9 Verify that the "За запитом нічого не знайдено!" message appears under the search field after entering invalid "арб" data', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickSearchBtn();
		await homePage.typeSearchFieldInvalidData();

		await expect(homePage.locators.getDropdownValidData()).toBeVisible();
		await expect(homePage.locators.getSearchMessage()).toBeVisible();
		await expect(homePage.locators.getSearchMessage()).toHaveText(SEARCH_MESSAGE_TEXT);

	});

	test('ТС.01.01.27 Verify that the "Main" page contains the "Категории" section', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getCategorySection()).toBeVisible();
		await expect(homePage.locators.getCategorySectionHeader()).toBeVisible();
		await expect(homePage.locators.getCategorySectionHeader()).toHaveText(CATEGORY_SECTION_HEADER_TEXT);

	});

	test('ТС.01.01.28 Verify that the "Категории" section contains images of categories', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getT_ShirtsCategory()).toBeVisible();
		await expect(homePage.locators.getSuitsCategory()).toBeVisible();
		await expect(homePage.locators.getSweatshirtsCategory()).toBeVisible();
		await expect(homePage.locators.getHoodieCategory()).toBeVisible();
		await expect(homePage.locators.getPantsCategory()).toBeVisible();

	});

	test('ТС.01.01.28.1 Verify that the "Категории" section contains names of categories', async ({ page }) => {
		const homePage = new HomePage(page);

		const categoryLocators = [
			homePage.locators.getCategoryName().first(),
			homePage.locators.getCategoryName().nth(1),
			homePage.locators.getCategoryName().nth(2),
			homePage.locators.getCategoryName().nth(3),
			homePage.locators.getCategoryName().nth(4)
		];
		
		for (let i = 0; i < expectedCategoryNames.length; i++) {
				const element = await categoryLocators[i].elementHandle();

				// Перевіряємо, що елемент існує
				expect(element).toBeTruthy();
				
				// Перевіряємо, що елемент є видимим
				await expect(categoryLocators[i]).toBeVisible();
				
				// Отримуємо текст елемента
				const text = await element.textContent();
				
				// Перевіряємо, що текст елемента відповідає очікуваному імені
				expect(text.trim()).toBe(expectedCategoryNames[i]);
		}

	});

	test('ТС.01.01.29 Verify that the product categories (cards) have a cursor pointer', async ({ page }) => {
		const homePage = new HomePage(page);
  
		const categoryLocators = [
			 homePage.locators.getCategoryName().first(),
			 homePage.locators.getCategoryName().nth(1),
			 homePage.locators.getCategoryName().nth(2),
			 homePage.locators.getCategoryName().nth(3),
			 homePage.locators.getCategoryName().nth(4)
		];
  
		for (let i = 0; i < expectedCategoryNames.length; i++) {
			 const categoryCard = await categoryLocators[i].elementHandle();
  
			 // Проверяем, что карточка категории существует
			 expect(categoryCard).toBeTruthy();
  
			 // Получаем значение CSS-свойства cursor у карточки
			 const cursorPropertyValue = await categoryCard.evaluate(card => getComputedStyle(card).cursor);
  
			 // Проверяем, что у карточки есть курсор-указатель
			 expect(cursorPropertyValue).toBe('pointer');
		}
  });

	test('ТС.01.01.30 Verify that the user can navigate to the "Каталог" page after clicking on the "Футболки" category card', async ({ page }) => {
		const homePage = new HomePage(page);

		const catalogPage = await homePage.clickT_ShirtsCategory();

		await expect(page).toHaveURL(CATALOG_URL);

		await expect(catalogPage.locators.getCatalogBreadcrumbs()).toBeVisible();
		await expect(catalogPage.locators.getCatalogBreadcrumbs()).toHaveText(CATALOG_BREADCRUMBS_TEXT);

	});

	test('ТС.01.01.31 Verify that the user can navigate to the "Каталог" page after clicking on the "Костюми" category card', async ({ page }) => {
		const homePage = new HomePage(page);

		const catalogPage = await homePage.clickSuitsCategory();

		await expect(page).toHaveURL(CATALOG_URL);

		await expect(catalogPage.locators.getCatalogBreadcrumbs()).toBeVisible();
		await expect(catalogPage.locators.getCatalogBreadcrumbs()).toHaveText(CATALOG_BREADCRUMBS_TEXT);

	});

	test('ТС.01.01.32 Verify that the user can navigate to the "Каталог" page after clicking on the "Світшоти" category card', async ({ page }) => {
		const homePage = new HomePage(page);

		const catalogPage = await homePage.clickSweatshirtsCategory();

		await expect(page).toHaveURL(CATALOG_URL);

		await expect(catalogPage.locators.getCatalogBreadcrumbs()).toBeVisible();
		await expect(catalogPage.locators.getCatalogBreadcrumbs()).toHaveText(CATALOG_BREADCRUMBS_TEXT);

	});

	test('ТС.01.01.33 Verify that the user can navigate to the "Каталог" page after clicking on the "Худі" category card', async ({ page }) => {
		const homePage = new HomePage(page);

		const catalogPage = await homePage.clickHoodieCategory();

		await expect(page).toHaveURL(CATALOG_URL);

		await expect(catalogPage.locators.getCatalogBreadcrumbs()).toBeVisible();
		await expect(catalogPage.locators.getCatalogBreadcrumbs()).toHaveText(CATALOG_BREADCRUMBS_TEXT);

	});

	test('ТС.01.01.34 Verify that the user can navigate to the "Каталог" page after clicking on the "Штани" category card', async ({ page }) => {
		const homePage = new HomePage(page);

		const catalogPage = await homePage.clickPantsCategory();

		await expect(page).toHaveURL(CATALOG_URL);

		await expect(catalogPage.locators.getCatalogBreadcrumbs()).toBeVisible();
		await expect(catalogPage.locators.getCatalogBreadcrumbs()).toHaveText(CATALOG_BREADCRUMBS_TEXT);

	});

	test('ТС.01.01.35 Verify that the "Категории" section contains the "Показати більше" link', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getShowMoreLink()).toBeVisible();
		await expect(homePage.locators.getShowMoreLink()).toHaveText(SHOW_MORE_LINK_TEXT);

	});

	test('ТС.01.01.35.1 Verify that the user can navigate to the "Каталог" page after clicking on the "Показати більше" link', async ({ page }) => {
		const homePage = new HomePage(page);

		const catalogPage = await homePage.clickShowMoreLink();

		await expect(page).toHaveURL(CATALOG_URL);

		await expect(catalogPage.locators.getCatalogBreadcrumbs()).toBeVisible();
		await expect(catalogPage.locators.getCatalogBreadcrumbs()).toHaveText(CATALOG_BREADCRUMBS_TEXT);

	});

	test('ТС.01.01.35.2 Verify that the "Main" page contains the "ZATYSHNA" brand banner', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getZatyshnaBrandBanner()).toBeVisible();

	});

	test('ТС.01.01.35.3 Verify that the "ZATYSHNA" brand banner has the brand description text', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getZatyshnaBrandBannerDescriptionText()).toBeVisible();
		await expect(homePage.locators.getZatyshnaBrandBannerDescriptionText()).toHaveText(ZATYSHNA_DESCRIPTION_TEXT);

	});

	test('ТС.01.01.35.4 Verify that the "ZATYSHNA" brand banner has the brand additional text', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getZatyshnaBrandBannerAdditionalText()).toBeVisible();
		await expect(homePage.locators.getZatyshnaBrandBannerAdditionalText()).toHaveText(ZATYSHNA_ADDITIONAL_TEXT);

	});

	test('ТС.01.01.35.5 Verify that the "ZATYSHNA" brand banner has the image', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getZatyshnaBrandBannerImage()).toBeVisible();

	});

	test('ТС.01.01.35.6 Verify that the "ZATYSHNA" brand banner has the "rgb(244, 239, 235) none repeat scroll 0% 0% / auto padding-box border-box" background color', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getZatyshnaBrandBanner()).toBeVisible();
		await expect(homePage.locators.getZatyshnaBrandBanner()).toHaveCSS('background', 'rgb(244, 239, 235) none repeat scroll 0% 0% / auto padding-box border-box');

	});

	test('ТС.01.01.36 Verify that the "Main" page contains a subscription section', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getSubscriptionSection()).toBeVisible();

	});

	test('ТС.01.01.37 Verify that the subscription section contains "Надiслати" button', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getSubscriptionSectionSendBtn()).toBeVisible();
		await expect(homePage.locators.getSubscriptionSectionSendBtn()).toHaveCSS('background', 'rgb(25, 25, 25) none repeat scroll 0% 0% / auto padding-box border-box');
		await expect(homePage.locators.getSubscriptionSectionSendBtn()).toHaveText(SUBSCRIPTION_SECTION_BTN_TEXT);

	});

	test('ТС.01.01.38 Verify that the "Надiслати" button has a cursor pointer', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getSubscriptionSectionSendBtn()).toBeVisible();
		await expect(homePage.locators.getSubscriptionSectionSendBtn()).toHaveCSS('cursor', 'pointer');

	});

	test('ТС.01.01.39 Verify that the subscription section contains the subscription field', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getSubscriptionSectionField()).toBeVisible();

	});

	test('ТС.01.01.39.1 Verify that the subscription field contains the "Email" placeholder', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getSubscriptionSectionField()).toBeVisible();
		await expect(homePage.locators.getSubscriptionSectionField()).toHaveAttribute('placeholder', 'Email')

	});

	test('ТС.01.01.40 Verify that the "Email" placeholder disappears after entering text in the field', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.typeSubscriptionSectionField();

		await expect(homePage.locators.getSubscriptionSectionField()).toBeVisible();

	});

	test('ТС.01.01.41 Verify that the user can subscribe by entering an existing e-mail (valid address). The "Ви успішно підписалися на сповіщення!" message appears', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.typeSubscriptionSectionFieldEmail();
		await homePage.clickSubscriptionSectionSendBtn();

		await expect(homePage.locators.getSubscriptionSectionFieldMessage()).toBeVisible();
		await expect(homePage.locators.getSubscriptionSectionFieldMessage()).toHaveText(SUBSCRIPTION_SECTION_FIELD_MESSAGE_TEXT);

	});




})

