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
		getQuantityBtn: () => this.page.getByRole('main').getByText('1')
	};

	// async clickDropdownSorting() {
	// 	await this.locators.getDropdownSorting().click();
	// 	return this;
	// }

}

export default CartPage;