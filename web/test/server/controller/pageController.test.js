import pageController from '../../../server/controller/pageController.js'
import { getPageOptions } from '../../../server/config/page/pageConfig.js'

const req = {}
const res = {
  render: jest.fn()
}

describe('pageController', () => {
  describe('renderPage', () => {
    beforeEach(() => {
      const handler = pageController.renderPage('app')
      handler(req, res)
    })

    it('should render given page', () => {
      expect(res.render).toBeCalled()
    })

    it('should render page once', () => {
      expect(res.render).toBeCalledTimes(1)
    })

    it('should render page with correct options', () => {
      const options = getPageOptions('app')
      expect(res.render).toBeCalledWith('index', options)
    })
  })
})