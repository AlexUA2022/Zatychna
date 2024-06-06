class ProductPage {
	constructor(page) {
		this.page = page;
	}

	locators = {
		getProductName: () => this.page.getByRole('heading', { name: 'Футболка Obsessed with fashion' }),
		getProductPrice: () => this.page.getByText('650 UAH'),
		getProductDescription: () => this.page.getByText('Однотонна базова футболка з написом спереду. Модель приталеного крою з круглою горловиною та короткими рукавами'),
		getColorSelectionBlock: () => this.page.locator('div').filter({ hasText: /^Колір$/ }),
		getColorSelectionBlockHeader: () => this.page.getByText('Колір'),
		getColorSelectionBtns: () => this.page.locator('div').filter({ hasText: /^Колір$/ }).getByRole('list'),
		getColorSelectionBtn: () => this.page.locator('.sc-iJrDDk').first(),
		getSizeSelectionBlock: () => this.page.getByText('РозмірXSSMLРозмірна сітка'),
		getSizeSelectionBlockHeader: () => this.page.getByText('Розмір', { exact: true }),
		getSizeSelectionBlockBtns: () => this.page.getByText('XSSML')
	};

	// async clickDropdownSorting() {
	// 	await this.locators.getDropdownSorting().click();
	// 	return this;
	// }

}

export default ProductPage;