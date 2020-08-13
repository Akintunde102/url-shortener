import { renderToString } from '@vue/server-test-utils';
import Header from '@/components/Header.vue';

describe('Header', () => {
  it('renders an header', async () => {
    const str = await renderToString(Header);
    expect(str).toContain('<h1>');
  });
});
