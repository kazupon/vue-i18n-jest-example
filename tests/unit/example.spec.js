import { mount, createLocalVue } from '@vue/test-utils'
import VueI18n from 'vue-i18n'
import HelloI18n from '@/components/HelloI18n.vue'

describe('HelloI18n.vue', () => {
  it('renders i18n custom blocks', () => {
    const localVue = createLocalVue()
    localVue.use(VueI18n)
    const i18n = new VueI18n({
      locale: 'en'
    })
    const wrapper = mount(HelloI18n, { i18n, localVue })
    expect(wrapper).toMatchSnapshot()
  })
})
