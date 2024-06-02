class CatalogPage {
	constructor(page) {
		this.page = page;
	}

	locators = {
		getCatalogBreadcrumbs: () => this.page.getByRole('main').getByRole('link', { name: 'Каталог' }),
		getDropdownSorting: () => this.page.getByRole('button', { name: 'Сортування за ціною: від вищої до нижчої' }),
		getDropdownSortingDown: () => this.page.locator('li').filter({ hasText: 'Сортування за ціною: від нижчої до вищої' }),
		getAllBtn: () => this.page.getByRole('button', { name: 'Всі' }),
		getTshirtsBtn: () =>  this.page.getByRole('button', { name: 'Футболки' }),
		getSuitsBtn: () =>  this.page.getByRole('button', { name: 'Костюми' }),
		getHoodiesBtn: () => this.page.getByRole('button', { name: 'Світшоти' }),
        getHoodiessBtn: () => this.page.getByRole('button', { name: 'Худі' }),
		getPantsBtn: () => this.page.getByRole('button', { name: 'Штани' }),
		getSkirtBtn: () => this.page.getByRole('button', { name: 'Спідниці' }),
		getDressesBtn: () => this.page.getByRole('button', { name: 'Сукні' }),
		getShortsBtn: () => this.page.getByRole('button', { name: 'Шорти' }),
		getShirtsBtn: () => this.page.getByRole('button', { name: 'Сорочки' }),
		getBlousesBtn: () => this.page.getByRole('button', { name: 'Блузи' }),
		getTopsBtn: () => this.page.getByRole('button', { name: 'Топи' }),
		getOuterwearBtn: () => this.page.getByRole('button', { name: 'Верхній одяг' }),
		getProductCardsBlock: () => this.page.locator('.gnbinI'),





	};

	async clickDropdownSorting() {
		await this.locators.getDropdownSorting().click();

	}

}

export default CatalogPage;