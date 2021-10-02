import { getPageOptions } from '../config/page/pageConfig.js'

class PageController {
  renderPage (page) {
    const pageOptions = getPageOptions(page)
    return (_, res) => {
      res.render('index', pageOptions)
    }
  }
}

export default new PageController()