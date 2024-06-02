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
		getPrevBtn: () => this.page.locator('.sc-hnmNKk').last()

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

}

export default HomePage;
