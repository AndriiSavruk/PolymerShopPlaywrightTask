import { test, expect } from "../fixtures/fixtures";
import { product1, product2, product3, product4 } from "../test-data/products.json";
import { user1 } from "../test-data/users.json";

test('Challenge 1: E2E Test', async ({
  mainPage,
  sectionPage,
  productPage,
  cartPage,
  checkoutPage,
  successPage
}) => {

  const testCart: Array<Object> = [];
  let testTotal: number = 0;
  let testQuantity: number = 0;

  await test.step('Choosing products and verifying the cart', async () => {

    await mainPage.navigate();
    await mainPage.clickOnMensOuterwearLink();
    await selectProduct(product1.position, product1.size, product1.quantity);
    await mainPage.clickOnMensOuterwearLink();
    await selectProduct(product2.position, product2.size, product2.quantity);
    await mainPage.clickOnLadiesOuterwearLink();
    await selectProduct(product3.position, product3.size, product3.quantity);
    await mainPage.clickOnLadiesOuterwearLink();
    await selectProduct(product4.position, product4.size, product4.quantity);
    await productPage.clickViewCartBtn();
    for (const [index,product] of testCart.entries()) {
       expect(await cartPage.getTitleOfCartItem(index)).toBe(product['name']);
       expect(await cartPage.getSizeOfCartItem(index)).toBe(product['size']);
    }
     expect(await cartPage.getTextCartBtn()).toContain(`${testQuantity}`);
     expect(await cartPage.getTotalSum()).toEqual(Number(testTotal.toFixed(2)));
  });

  await test.step('Filling out the form and verifying success page', async () => {
    await cartPage.clickOnCheckOuttBtn();
    await checkoutPage.fillInEmailField(user1.email);
    await checkoutPage.fillInPhoneField(user1.phone);
    await checkoutPage.fillInAddressField(user1.address);
    await checkoutPage.fillInCityField(user1.city);
    await checkoutPage.fillInStateField(user1.state);
    await checkoutPage.fillInZipField(user1.zip);
    await checkoutPage.selectCountry(user1.country);
    await checkoutPage.fillInCardHolderNameField(user1.name);
    await checkoutPage.fillInCardNumberField(user1.card);
    await checkoutPage.selectExpiryMonth(user1.exmonth);
    await checkoutPage.selectExpiryYear(user1.exyear);
    await checkoutPage.fillInCardCVVField(user1.cvv);
    await checkoutPage.clickOnPlaceOrdertBtn();
    expect(await successPage.getTitleOfHeading()).toBe('Thank you');
  })

  async function selectProduct(num:number, sz: string, qnt: string): Promise<void> {
    await sectionPage.clickOnShopItem(num);
    await productPage.selectSize(sz);
    await productPage.selectQuantity(qnt);
    let productName = await productPage.getTitleOfProduct();
    let productPrice = await productPage.getProductPrice();
    let totalProduct = Number(qnt)*Number(productPrice);
    testCart.push({ name: productName, size: sz, quantity: qnt, price: productPrice });
    testTotal += totalProduct;
    testQuantity += Number(qnt);
    await productPage.clickOnAddToCartBtn();
  }

})






