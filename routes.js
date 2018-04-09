const routes = module.exports = require('next-routes')()

routes
 .add('/campaigns/new', '/campaigns/new')
 .add('/campaigns/:address', '/campaigns/_address/index')
 .add('/campaigns/:address/requests', '/campaigns/_address/requests/index')
 .add('/campaigns/:address/requests/new', '/campaigns/_address/requests/new')
// .add('blog', '/blog/:slug')
// .add('user', '/user/:id', 'profile')
// .add('/:noname/:lang(en|es)/:wow+', 'complex')
// .add({name: 'beta', pattern: '/v3', page: 'v3'})