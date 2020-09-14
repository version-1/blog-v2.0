const path = require('path')

module.exports = {
  webpack(config, options) {
    const alias = {
      ...config.resolve.alias,
      '@': path.join(__dirname, 'src'),
      'lib': path.join(__dirname, 'lib'),
      'components': path.join(__dirname, 'src/components'),
      'atoms': path.join(__dirname, 'src/components/atoms'),
      'molecules': path.join(__dirname, 'src/components/molecules'),
      'organisms': path.join(__dirname, 'src/components/organisms'),
      'templates': path.join(__dirname, 'src/components/templates'),
      'pages': path.join(__dirname, 'src/pages'),
      'styles': path.join(__dirname, 'src/styles'),
    }
    config.resolve.alias = alias
    return config
  },
}
