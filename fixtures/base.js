import { test as base } from "@playwright/test";
import CatalogPage from "./page_objects/catalogPage";
// import PopupShoppingCartWndowPage from "./page_objects/pop-upShoppingCartWndow";
// import QuiltedJacketPage from "./page_objects/guiltedJacket";
// import HomePage from "./page_objects/homePage";






// export const test = base.extend({
//     addProductCard: [
//         async ({ page }, use) => {


//             const homePage = new HomePage(page);

// 		await homePage.open();
//         await homePage.clickCatalogBlackBtn();

//             const catalogPage = new CatalogPage(page);
//             await catalogPage.clickJacketProduct();
//             await page.waitForTimeout(2000);
//             const jacketPage = new QuiltedJacketPage(page);
//             await jacketPage.clickSizeButton();
//             await jacketPage. clickCartButton();
//             const madalWindowPage = new PopupShoppingCartWndowPage(page)
//             await madalWindowPage.clickCheckoutButton();
//             await page.waitForTimeout(2000);

//             await use("");
//         },
//         { scope: "test" },
//     ],
// })
