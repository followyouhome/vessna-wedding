const MFS = require('memory-fs');
const path = require('path');
const webpack = require('webpack');
const clientConfig = require('../../config/webpack.client.config');
const serverConfig = require('../../config/webpack.server.config');

const readFile = (fs, file) => {
  try {
    return fs.readFileSync(path.join(clientConfig.output.path, file), 'utf-8');
  } catch (e) {
    console.warn(e);
  }
};

module.exports = function hmr (server, cb) {
  let bundle, resolve, clientManifest;
  const enableHMR = new Promise(r => {resolve = r;});

  enableHMRForClient();
  enableHMRForServer();

  function enableHMRForClient () {
    clientConfig.entry.app = ['webpack-hot-middleware/client', clientConfig.entry.app];
    clientConfig.output.filename = '[name].js';
    clientConfig.plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    );

    const clientCompiler = webpack(clientConfig);
    const devMiddleware = require('webpack-dev-middleware')(clientCompiler, {
      publicPath: clientConfig.output.publicPath,
      noInfo: true,
    });

    server.use(devMiddleware);

    clientCompiler.plugin('done', stats => {
      stats = stats.toJson();

      stats.errors.forEach(err => console.error(err));
      stats.warnings.forEach(err => console.warn(err));

      if (stats.errors.length) return;

      clientManifest = JSON.parse(readFile(devMiddleware.fileSystem, 'vue-ssr-client-manifest.json'));

      if (bundle) {
        resolve();
        cb(bundle, {clientManifest});
      }
    });

    server.use(require('webpack-hot-middleware')(clientCompiler, {heartbeat: 5000}));
  }

  function enableHMRForServer () {
    const serverCompiler = webpack(serverConfig);
    const mfs = new MFS();

    serverCompiler.outputFileSystem = mfs;
    serverCompiler.watch({}, (err, stats) => {
      if (err) throw err;

      stats = stats.toJson();

      if (stats.errors.length) return;

      bundle = JSON.parse(readFile(mfs, 'vue-ssr-server-bundle.json'));

      if (clientManifest) {
        resolve();
        cb(bundle, {clientManifest});
      }
    });
  }

  return enableHMR;
};
