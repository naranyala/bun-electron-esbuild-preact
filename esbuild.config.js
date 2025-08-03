
const esbuild = require('esbuild').build({
  entryPoints: ['renderer.jsx'],
  bundle: true,
  outfile: 'renderer.prod.js',
  jsxFactory: 'h',
  jsxFragment: 'Fragment',
  define: { 'process.env.NODE_ENV': '"development"' },
})

esbuild.catch(() => process.exit(1));
