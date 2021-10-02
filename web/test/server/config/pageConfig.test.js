import { getPageOptions } from '../../../server/config/page/pageConfig.js'

describe('pageConfig', () => {
  it('should return correct page options', () => {
    const pageOptions = getPageOptions('app')

    expect(pageOptions).toHaveProperty('title', 'Stoic Diary | App')
    expect(pageOptions.bundle).toBeDefined()
  })
})