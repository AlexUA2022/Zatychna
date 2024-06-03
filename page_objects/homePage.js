import CatalogPage from "./catalogPage";
import ContactsPage from "./contactsPage";

class HomePage {
	constructor(page) {
		this.page = page;
	}

	locators = {
		getHeader: () => this.page.getByRole('banner'),
		getLogo: () => this.page.getByRole('banner').getByRole('link', { name: 'Zatyshna' }),
		getGolovnaBtn: () => this.page.getByRole('banner').getByRole('link', { name: 'Головна' }),
		getCatalogBtn: () => this.page.getByRole('banner').getByRole('link', { name: 'Каталог' }),
		getAboutUsBtn: () => this.page.getByRole('banner').getByRole('link', { name: 'Про нас' }),
		getContactsBtn: () => this.page.getByRole('banner').getByRole('link', { name: 'Контакти' }),
		getCartBtn: () => this.page.getByRole('link', { name: 'Кошик' }),
		getNoveltiesSection: () => this.page.getByText('НовинкиФутболка з декоративними ...790 UAHФутболка Obsessed with fa...650 UAH'),
		getNoveltiesSectionHeader: () => this.page.getByRole('heading', { name: 'Новинки' }),
		getNoveltiesSectionPagination: () => this.page.locator('.swiper-pagination'),
		getNextBtn: () => this.page.locator('button.sc-jPQKBn'),
		getPrevBtn: () => this.page.locator('.sc-hnmNKk').last(),
		getButtonsHeader: (pageName) => this.page.getByRole('banner').getByRole('link', { name: pageName}),
		getCatalogBlackBtn: () => this.page.getByRole('main').getByRole('link', { name: 'Каталог' }),
		getSearchBtn: () => this.page.getByRole('banner').getByRole('button'),
		getIconCartBtn: () => this.page.locator('.sc-ifysJV'),
		getSearchField: () => this.page.getByRole('banner').locator('form'),
		getSearchFieldPlaceholder: () => this.page.getByPlaceholder('Шукати'),
		getSearchFieldPlaceholderIcon: () => this.page.locator('svg[type="input"]'),
		getSearchFieldCrossBtn: () => this.page.getByRole('banner').getByRole('button').first(),
		getDropdownValidData: () => this.page.locator('.sc-ckdFFX'),
		getSearchMessage: () => this.page.getByText('За запитом нічого не знайдено!'),
		getCategorySection: () => this.page.getByText('КатегоріїФутболкиКостюмиСвітшотиХудіШтаниПоказати більше'),
		getCategorySectionHeader: () => this.page.getByRole('heading', { name: 'Категорії' }),
		getT_ShirtsCategory: () => this.page.getByRole('link', { name: 'Футболки' }),
		getSuitsCategory: () => this.page.getByRole('link', { name: 'Костюми' }),
		getSweatshirtsCategory: () => this.page.getByRole('link', { name: 'Світшоти' }),
		getHoodieCategory: () => this.page.getByRole('link', { name: 'Худі', exact: true }),
		getPantsCategory: () => this.page.getByRole('link', { name: 'Штани' }),
		getCategoryName: () => this.page.locator('.sc-gHWTLx'),

	};

	async open() {
		await this.page.goto("/");
	}

	async clickNextBtn() {
		await this.locators.getNextBtn().click();
		return this;
	}

	async clickPrevBtn() {
		await this.locators.getPrevBtn().click();
		return this;
	}

	async clickBtnHeader(pageName) {
		await this.locators.getButtonsHeader(pageName).click();
		return this;
	}

	async clickgetContactsBtn() {
		await this.locators.getContactsBtn().click();
		return new ContactsPage(this.page);
	}

	async clickCatalogBlackBtn() {
		await this.locators.getCatalogBlackBtn().click();
		return new CatalogPage(this.page);
	}

	async clickSearchBtn() {
		await this.locators.getSearchBtn().click();
		return this;
	}

	async typeSearchField() {
		await this.locators.getSearchField().type('a');
	}

	async clickSearchFieldCrossBtn() {
		await this.locators.getSearchFieldCrossBtn().click();
		return this;
	}

	async typeSearchFieldValidData() {
		await this.locators.getSearchField().type('фут');
	}

	async typeSearchFieldInvalidData() {
		await this.locators.getSearchField().type('арб');
	}

	async clickT_ShirtsCategory() {
		await this.locators.getT_ShirtsCategory().click();
		return new CatalogPage(this.page);
	}

	async clickSuitsCategory() {
		await this.locators.getSuitsCategory().click();
		return new CatalogPage(this.page);
	}

	async clickSweatshirtsCategory() {
		await this.locators.getSweatshirtsCategory().click();
		return new CatalogPage(this.page);
	}

	async clickHoodieCategory() {
		await this.locators.getHoodieCategory().click();
		return new CatalogPage(this.page);
	}

	async clickPantsCategory() {
		await this.locators.getPantsCategory().click();
		return new CatalogPage(this.page);
	}

}

export default HomePage;
