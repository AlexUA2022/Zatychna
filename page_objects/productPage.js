class ProductPage {
	constructor(page) {
		this.page = page;
	}

	locators = {
		getProductName: () => this.page.getByRole('heading', { name: 'Футболка Obsessed with fashion' }),
		getProductPrice: () => this.page.getByText('650 UAH'),
		getProductDescription: () => this.page.getByText('Однотонна базова футболка з написом спереду. Модель приталеного крою з круглою горловиною та короткими рукавами')
	};

	// async clickDropdownSorting() {
	// 	await this.locators.getDropdownSorting().click();
	// 	return this;
	// }

}

export default ProductPage;