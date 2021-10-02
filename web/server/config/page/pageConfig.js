const pagesConfig = {
  homepage: {
    title: 'Stoic Diary | Homepage',
    bundle: 'homepage'
  },
  login: {
    title: 'Stoic Diary | Login',
    bundle: 'login'
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