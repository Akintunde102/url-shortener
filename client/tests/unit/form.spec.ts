import { renderToString } from '@vue/server-test-utils';
import Form from '@/components/Form.vue';

describe('Form', () => {
  it('renders a form', async () => {
    const str = await renderToString(Form);
    expect(str).toContain('<form>');
  });
});
