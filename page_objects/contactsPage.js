import HomePage from "./homePage";

class ContactsPage {
	constructor(page) {
		this.page = page;
	}

	locators = {
		getGolovnaBtn: () => this.page.getByRole('banner').getByRole('link', { name: 'Головна' }),
		getContactsPageHeader: () => this.page.getByRole('heading', { name: 'Контакти' }),
		getContactsPageBreadcrumbs: () => this.page.getByRole('main').getByRole('link', { name: 'Головна' })
	};

	async clickGolovnaBtn() {
		await this.locators.getGolovnaBtn().click();
		return new HomePage(this.page);
	}

	async clickContactsPageBreadcrumbs() {
		await this.locators.getContactsPageBreadcrumbs().click();
		return new HomePage(this.page);
	}


}

export default ContactsPage;
