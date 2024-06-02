class CatalogPage {
	constructor(page) {
		this.page = page;
	}

	locators = {
		getCatalogBreadcrumbs: () => this.page.getByRole('main').getByRole('link', { name: 'Каталог' })

	};

	// async clickGolovnaBtn() {
	// 	await this.locators.getGolovnaBtn().click();
	// 	return new HomePage(this.page);
	// }

}

export default CatalogPage;