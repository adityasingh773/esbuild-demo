import * as esbuild from 'esbuild';
import CssModulesPlugin from 'esbuild-css-modules-plugin';

await esbuild.build({
	outfile: 'public/build/index.js',
	entryPoints: ['src/index.js'],
	bundle: true,
	platform: 'browser',
	target: ['es2015'],
	format: 'iife',
	globalName: 'Demo',
    metafile: true,
    plugins: [
        CssModulesPlugin({
            inject: true
        }),
    ]
});
