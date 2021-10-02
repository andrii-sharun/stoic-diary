const pagesConfig = {
  app: {
    title: 'Stoic Diary | App',
    bundle: 'app'
  }
}

export const getPageOptions = (page) => {
  return {
    title: pagesConfig[page].title,
    bundle: `/bundle/${pagesConfig[page].bundle}.js`
  }
}

export default pagesConfig