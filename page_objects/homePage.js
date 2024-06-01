class HomePage {
	constructor(page) {
		this.page = page;
	}

	locators = {
		getHeader: () => this.page.getByRole('banner'),
		getLogo: () => this.page.getByRole('banner').getByRole('link', { name: 'Zatyshna' }),
		getGolovnaBtn: () => this.page.getByRole('banner').getByRole('link', { name: 'Головна' }),
		getCatalogBtn: () => this.page.getByRole('banner').getByRole('link', { name: 'Каталог' })

	};

	async open() {
		await this.page.goto("/");
	}

	// async clickCatalogbutton() {
	// 	await this.locators.getCatalogbutton().click();
	// 	return this;
	// }

}

export default HomePage;
