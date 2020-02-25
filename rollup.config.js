import nodeResolve from "rollup-plugin-node-resolve";
import replace from "rollup-plugin-replace";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import uglify from "rollup-plugin-uglify-es";
import filesize from "rollup-plugin-filesize";
import reactSvg from "rollup-plugin-react-svg";

const isProd = process.env.PRODUCTION === "true";

const plugins = [
  nodeResolve({
    jsnext: true,
    modulesOnly: true
  }),
  commonjs({
    include: "node_modules/**",
    namedExports: {
      "buble/dist/buble.deps": ["transform"],
      buble: ["transform"],
      "prismjs/components/prism-core": ["highlight", "languages"]
    }
  }),
  reactSvg({
    jsx: true,
    include: "**/*.svg"
  }),
  babel({
    babelrc: false,
    presets: [["env", { modules: false, loose: true }], "react"],
    plugins: [
      "external-helpers",
      "transform-object-rest-spread",
      "transform-class-properties"
    ].filter(Boolean)
  })
];

const devPlugins = plugins.concat([
  replace({
    "process.env.NODE_ENV": JSON.stringify("development")
  })
]);

const prodPlugins = plugins.concat([
  replace({
    "process.env.NODE_ENV": JSON.stringify("production")
  }),
  uglify(),
  filesize()
]);

const base = {
  input: "src/index.js",
  external: ["react", "react-dom", "prismjs", "buble", "styled-components"]
};

const output = {
  exports: "named",
  globals: {
    prismjs: "Prism",
    react: "React",
    buble: "Buble",
    "react-dom": "ReactDOM"
  }
};

const makeOutput = config => Object.assign({}, output, config);

const withBase = config => Object.assign({}, base, config);

export default [
  {
    output: [
      {
        name: "ProjectBadges",
        file: "dist/formidable-oss-badges.min.js",
        format: "umd"
      }
    ].map(makeOutput),
    plugins: prodPlugins
  },
  {
    output: [
      {
        name: "ProjectBadges",
        file: "dist/formidable-oss-badges.js",
        format: "umd"
      },
      {
        file: "dist/formidable-oss-badges.es.js",
        format: "es"
      },
      {
        file: "dist/formidable-oss-badges.cjs.js",
        format: "cjs"
      }
    ].map(makeOutput),
    plugins: devPlugins
  }
].map(withBase);
