

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
		getNumberPhoneField: () => this.page.getByPlaceholder('+38(0__)___-__-__'),
		getEmailField: () => this.page.getByPlaceholder('E-mail'),
		getMessageEmailField: () => this.page.getByText('Будь ласка, введіть дійсну адресу електронної пошти'),

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

	async fillNumberPhoneField() {
		await this.locators.getNumberPhoneField().fill('506426494');
	}

	async fillSpaceAfterAtEmailField() {
		await this.locators.getEmailField().fill('kati@ gmail.com');
	}

	async fillSpaceBeforeAtEmailField() {
		await this.locators.getEmailField().fill('kati @gmail.com');
	}

	async fillWithoutDotDomainEmailField() {
		await this.locators.getEmailField().fill('kati@gmailcom');
	}


	async fillWihtDotDomainNameEmailField() {
		await this.locators.getEmailField().fill('kati@gmai.l.com');
	}

	async fillWihtoutAtDotEmailField() {
		await this.locators.getEmailField().fill('katigmail.com');
	}

	async fillWihtoutNameEmailField() {
		await this.locators.getEmailField().fill('@gmail.com');
	}

	async fillSpecialCharactersEmailField() {
		await this.locators.getEmailField().fill('^&%$@gmail.com');
	}


	async fillCyrillicLettersEmailField() {
		await this.locators.getEmailField().fill('катрусяgmail.com');
	}







}export default OrderPage;
