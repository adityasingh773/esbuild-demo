import * as esbuild from "esbuild";
import CssModulesPlugin from "esbuild-css-modules-plugin";

const ctx = await esbuild.context({
  outfile: "public/build/index.js",
  entryPoints: ["src/index.js"],
  bundle: true,
  platform: "browser",
  target: ["es2015"],
  format: "iife",
  globalName: "Demo",
  metafile: true,
  plugins: [
    CssModulesPlugin({
      inject: true,
    }),
  ],
});

await ctx.watch();
await ctx.serve({
  servedir: "public",
});
console.log(`Application is running at: http://localhost:8000`);
