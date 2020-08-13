import { renderToString } from '@vue/server-test-utils';
import UrlList from '@/components/UrlList.vue';

describe('Url List', () => {
  it('renders a link', async () => {
    const str = await renderToString(UrlList);
    expect(str).toContain('<a>');
  });
});
