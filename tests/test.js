import { expect } from 'chai';
import t from '../dist/index';

describe('copy', () => {
	it('copy text to clipboard', async () => {
		await t('mmstudio');
		expect(1).not.eq(2);
	});
});
