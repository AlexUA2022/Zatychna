import OrderPage from "./orderPage";

class PopupShoppingCartWndowPage {
	constructor(page) {
		this.page = page;
	}

    locators = {

        getCheckoutButton: () => this.page.getByRole('link', { name: 'Оформити замовлення' }),

    }

    async clickCheckoutButton() {
        await this.locators.getCheckoutButton().click();
        return new OrderPage(this.page);

    }


}

export default PopupShoppingCartWndowPage