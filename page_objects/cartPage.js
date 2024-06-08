class CartPage {
	constructor(page) {
		this.page = page;
	}

	locators = {
		getBreadcrumbsCart: () => this.page.getByRole('link', { name: 'Кошик', exact: true }),
		getSelectedProductBlock: () => this.page.locator('li').filter({ hasText: 'Футбо...REDXS1650 UAH' }),
		getHeaders: (headerName) => this.page.getByText(headerName, { exact: true }),
		getProductName: () => this.page.getByRole('link', { name: 'Футбо...' }),
		getProductSize: () => this.page.getByText('XS').first(),
		getProductColor: () => this.page.getByText('RED'),
		getQuantityBtn: () => this.page.getByRole('main').getByText('1'),
		getQuantityCart: () => this.page.locator('.sc-fLsdDA'),
		getQuantityAddBtn: () => this.page.getByRole('main').getByRole('img').nth(2),
		getQuantityBtn2: () => this.page.getByRole('main').getByText('2'),
		getQuantityDecrBtn: () => this.page.getByRole('main').getByRole('img').nth(1)
	};

	async clickQuantityAddBtn() {
		await this.locators.getQuantityAddBtn().click();
		return this;
	}

	async clickQuantityDecrBtn() {
		await this.locators.getQuantityDecrBtn().click();
		return this;
	}

}

export default CartPage;