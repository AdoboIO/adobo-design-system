import { newE2EPage } from '@stencil/core/testing';

describe('adobo-grid', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<adobo-grid></adobo-grid>');
    const element = await page.find('adobo-grid');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<adobo-grid></adobo-grid>');
    const component = await page.find('adobo-grid');
    const element = await page.find('adobo-grid >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
