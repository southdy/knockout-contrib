'use strict'

module.exports = {
  test: /@profiscience\/knockout-contrib.+\.css/,
  use: [
    'style-loader',
    {
      loader: 'postcss-loader',
      options: {
        plugins: [
          require('postcss-modules')()
        ]
      }
    }
  ]
}