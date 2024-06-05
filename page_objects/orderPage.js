

class OrderPage {
	constructor(page) {
		this.page = page;
	}

    locators = {
		getHeadingText: () => this.page.getByRole('heading', { name: 'Ваше замовлення' }),
		getPhotoImages: ()  => this.page.locator('img'),
		getProductName:  ()  => this.page.getByRole('heading', { name: 'Куртка Qui...' }),
		getColorProduct: ()  => this.page.getByText('BLACK'),
		getProductSize: ()  => this.page.getByText('S', { exact: true }),
		getQuantityProduct: ()  => this.page.getByText('x'),
		getCostProduct: () => this.page.getByText('990 UAH').first(),
		getInformationSctionProduct: () => this.page.locator('section').filter({ hasText: '1 товари(-ів) на суму3 990' }),
		getPersonalDataSection: () => this.page.getByText('1Особисті дані'),
		getNameField: () => this.page.getByPlaceholder('Прізвище'),
		getOrderButton: () => this.page.getByRole('button', { name: 'Оформити замовлення' }),
		getMessageWarnings: () => this.page.getByText('Поле приймає тільки кирилицю та латиницю'),
		getName2Field: () => this.page.getByPlaceholder('Ім’я'),

    }

	async clickOrderButton() {
		await this.locators.getOrderButton().click();
	}

	async filldigitNameField() {
		await this.locators.getNameField().fill('666');
	}

	async filldigitName2Field() {
		await this.locators.getName2Field().fill('3535');
	}




}export default OrderPage;
