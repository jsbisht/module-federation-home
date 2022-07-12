const HtmlWebPackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const deps = require('./package.json').dependencies
module.exports = {
  output: {
    publicPath: 'http://localhost:4444/'
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json']
  },

  devServer: {
    port: 4444,
    historyApiFallback: true
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false
        }
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'uilib',
      filename: 'remoteEntry.js',
      remotes: {
        uilib: 'uilib@http://localhost:4444/remoteEntry.js'
      },
      exposes: {
        './AppSkeleton': './src/components/AppSkeleton.jsx',
        './Header': './src/components/Header.jsx',
        './InlineWidget': './src/components/InlineWidget.jsx',
        './Loading': './src/components/Loading.jsx',
        './ComponentsLoader': './src/utility/ComponentsLoader.js',
        './ErrorBoundary': './src/utility/ErrorBoundary.js'
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom']
        }
      }
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html'
    })
  ]
}
