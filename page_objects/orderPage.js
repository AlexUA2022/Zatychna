

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
    }



}export default OrderPage;
