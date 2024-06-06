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
		getSizeSelectionBlockBtns: () => this.page.getByText('XSSML'),
		getSizeSelectionBlockBtn: () => this.page.getByRole('button', { name: 'XS' }),
		getDimensionalGridLink: () => this.page.getByRole('button', { name: 'Розмірна сітка' }),
		getDimensionalGridPopUp: () => this.page.locator('div').filter({ hasText: 'Розмірна сіткаРозмірXSSMLXL' }).nth(2),
		getDimensionalGridPopUpCloseBtn: () => this.page.locator('#modal-root').getByRole('button'),
		getDimensionalGridPopUpHeader: () => this.page.getByRole('heading', { name: 'Розмірна сітка' }),
		getDimensionalGridPopUpFields: (fieldName) => this.page.getByRole('cell', { name: fieldName }),
		getDimensionalGridPopUpSizes: (fieldName) => this.page.getByRole('cell', { name: fieldName, exact: true }),
		getDimensionalGridChestSizes: (fieldName) => this.page.getByRole('cell', { name: fieldName, exact: true }),
		getDimensionalGridWaistSizes: (fieldName) => this.page.getByRole('cell', { name: fieldName, exact: true }),
		getDimensionalGridHipSizes: (fieldName) => this.page.getByRole('cell', { name: fieldName, exact: true }),
		getDimensionalGridLogo: () => this.page.getByText('ZATYSHNA', { exact: true }),
		getProductImg: () => this.page.getByRole('img', { name: 'RED' }).first(),
		getYouMayLikeBlock: () => this.page.getByText('Вам може сподобатисьМайка'),
		getYouMayLikeBlockHeader: () => this.page.getByRole('heading', { name: 'Вам може сподобатись' }),
		getYouMayLikeProductImg: () => this.page.getByRole('link', { name: 'Майка Texture' }).first()
	};

	async clickDimensionalGridLink() {
		await this.locators.getDimensionalGridLink().click();
		return this;
	}

	async clickDimensionalGridPopUpCloseBtn() {
		await this.locators.getDimensionalGridPopUpCloseBtn().click();
		return this;
	}

}

export default ProductPage;