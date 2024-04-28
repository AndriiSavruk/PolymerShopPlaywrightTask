import { test } from '@playwright/test';

test('Challenge 2', async ({ page }) => {

// 1. Click the “Dog” option . 
await page.locator('h5[data-textid="Dog"]').click();

// 2. Click the “Continuer” button under the question “Année d'adoption”.
await page.locator('div.process:nth-child(2) div.next-btn button').click();

//3. Select year “2023” from the dropdown.
await page.locator('div.input.input--suffix').click();
await page.locator('input.input__inner[placeholder="2023"]').click();

})

