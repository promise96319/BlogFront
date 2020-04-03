const path = require('path')

function resolve (dir) {
    console.log(__dirname);
    
  return path.join(__dirname, '/', dir)
}

// resolve: {
//     extensions: ['.js', '.vue', '.json'],
//     alias: {
//       'vue$': 'vue/dist/vue.esm.js',
//       '@': resolve('src'),
//     }
//   },

const aliases = {
    "@css": resolve('public/css'),
    "@image": resolve('public/image'),
    "@api": resolve('api'),
    "@pages": resolve('pages'),
    "@components": resolve('components'),
};

const withCss = require('@zeit/next-css')
const withLess = require('@zeit/next-less')
module.exports = withLess(withCss({
    webpack: (config) => {
        // Add aliases
        config.resolve.alias = {
            ...(config.resolve.alias || {}),
            ...aliases
        };

        // // Also transpile files from common/...
        // config.module.rules = config.module.rules.map((rule) => {
        //     rule.include = [...(rule.include || []), ...includePaths];
        //     return rule;
        // });

        return config;
    }
}))