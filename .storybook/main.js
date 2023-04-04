module.exports = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-controls",
  ],
  core: {
    builder: 'webpack5',
  },
  "webpackFinal": async (config) => {
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto",
    })

    const imageRule = config.module.rules.find(rule => {
      if (typeof rule !== "string" && rule.test instanceof RegExp) {
        return rule.test.test(".svg")
      }
    })

    if (imageRule && typeof imageRule !== "string") {
      imageRule.exclude = /\.svg$/
    }

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [{ loader: "@svgr/webpack", options: { svgo: false } }],
    })
    return config
  }
}
