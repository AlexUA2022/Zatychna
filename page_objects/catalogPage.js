class CatalogPage {
	constructor(page) {
		this.page = page;
	}

	locators = {
		getCatalogBreadcrumbs: () => this.page.getByRole('main').getByRole('link', { name: 'Каталог' }),
		getDropdownSorting: () => this.page.getByRole('button', { name: 'Сортування за ціною: від вищої до нижчої' }),
		getDropdownSortingDown: () => this.page.locator('li').filter({ hasText: 'Сортування за ціною: від нижчої до вищої' })

	};

	async clickDropdownSorting() {
		await this.locators.getDropdownSorting().click();

	}

}

export default CatalogPage;