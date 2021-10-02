const pagesConfig = {
  homepage: {
    title: 'Stoic Diary | Homepage',
    bundle: 'homepage'
  },
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