const webpack = require('webpack'); 

module.exports = function override(config, env) {
  // do stuff with the webpack config...
  const fallback = config.resolve.fallback || {}; 
  Object.assign(fallback, { 
    "crypto": require.resolve("crypto-browserify"), 
    "stream": require.resolve("stream-browserify"), 
    "assert": require.resolve("assert/"), 
    "http": require.resolve("stream-http"), 
    "https": require.resolve("https-browserify"), 
    "path": require.resolve("path-browserify"), 
    "zlib": require.resolve("browserify-zlib"),
    "querystring": require.resolve("querystring-es3"),
    "util": require.resolve("util/"),
    "url": require.resolve("url"), 
    "process/browser": require.resolve("process/browser"),
    "fs": require.resolve("fs"),
    "net": require.resolve("net")
    }) 
 config.resolve.fallback = fallback; 
 config.plugins = (config.plugins || []).concat([ 
  new webpack.ProvidePlugin({ 
   process: 'process/browser', 
   Buffer: ['buffer', 'Buffer'] 
 }) 
]) 
  return config
}