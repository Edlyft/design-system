const { build } = require("esbuild");
const { ArgumentParser } = require('argparse');
const { sassPlugin } = require('esbuild-sass-plugin');
const { peerDependencies } = require("./package.json");

const parser = new ArgumentParser({
  description: 'Argparse example'
});

const truthy = bool => {
  console.log(bool);
  return (bool || 'true').trim().toLowerCase() === 'false' ? false : true
};
parser.add_argument('--sourceMap', { dest: 'sourcemap', const: true, default: false, nargs: '?', type: truthy });
parser.add_argument('--minify', { dest: 'minify', const: true, default: false, nargs: '?', type: truthy });
parser.add_argument('--bundle', { dest: 'bundle', const: true, default: true, nargs: '?', type: truthy });
const options = parser.parse_args();

const entryFile = "src/index.ts";

/** @type {import('esbuild').BuildOptions} */
const shared = {
  ...options,
  entryPoints: [entryFile],
  // Treat all dependencies in package.json as externals to keep bundle size to a minimum
  external: options.bundle ? Object.keys(peerDependencies) : undefined,
  logLevel: "info",
  plugins: [
    sassPlugin()
  ]
};

build({
  ...shared,
  format: "esm",
  outfile: "./dist/esm/index.js",
  target: ["es6", "esnext"],
});

build({
  ...shared,
  format: "cjs",
  outfile: "./dist/cjs/index.js",
  target: ["es6", "esnext"],
});
