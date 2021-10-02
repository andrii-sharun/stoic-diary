import path from 'path'

const __dirname = path.resolve()

const mode = 'development'
const entry = {
  app: `${__dirname}/web/client/src/page/app.tsx`,
  homepage: `${__dirname}/web/client/src/page/homepage.tsx`,
  login: `${__dirname}/web/client/src/page/login.tsx`
}

export default {
  mode,
  entry,
  output: {
    path: `${__dirname}/web/client/public/bundle`
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        use: ['babel-loader', 'ts-loader']
      },
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  devtool: 'inline-cheap-module-source-map'
}
