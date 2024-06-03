import HomePage from "./homePage";
import CatalogPage from "./catalogPage";
import PopupShoppingCartWndowPage from "./pop-upShoppingCartWndow";

class QuiltedJacketPage {
	constructor(page) {
		this.page = page;
	}

	locators = {

		getSizeButton: () => this.page.getByRole('button', { name: 'S' }),
		getCartButton: () => this.page.getByRole('button', { name: 'Додати в кошик' }),


    }

	async clickSizeButton() {
		await this.locators.getSizeButton().click();

	}

	async clickCartButton() {
		await this.locators.getCartButton().click();
		return new PopupShoppingCartWndowPage(this.page);

	}

}
    export default QuiltedJacketPage;