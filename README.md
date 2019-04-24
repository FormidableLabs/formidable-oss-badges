# ProjectBadges

Badges for Formidable Open Source Projects

## Contents

- [Using the package](#using-the-package)
- [Component props](#component-props)
- [Examples](#examples)
- [Try component locally](#try-the-component-locally)

## Using the package

- `yarn add formidable-oss-badges` or `npm install formidable-oss-badges`
- In your react app, `import { ProjectBadge } from "formidable-oss-badges";`
- Use the `<ProjectBadge />` component as directed below

## Component props

The `<ProjectBadge />` component takes five, optional, props:

| Prop         | Type             | Description                                                                                  | Example             |
| ------------ | ---------------- | -------------------------------------------------------------------------------------------- | ------------------- |
| color        | String (hex/RGB) | Base color of the badge                                                                      | `"#FF00FF"`         |
| abbreviation | String           | Short representation of the name. Large font. Typically one uppercase letter, one lowercase. | `"Em"`              |
| description  | String           | Title or brief description. Smaller text, displayed in all-caps.                             | `"Enzyme Matchers"` |
| number       | Number or String | Number that appears at the top of the badge                                                  | `9` or `"09"`       |
| className    | String           | Class to apply directly to the SVG                                                           | `"project-badge"`   |

It is recommended to at least include the `color`, `description` and `abbreviation` props.

## Examples

1:

```jsx
  <ProjectBadge color="#89E" abbreviation="No" description="Number"/> 
```

2:

```jsx
  <ProjectBadge color="#E48055" abbreviation="Em" description="Enzyme Matchers" number="09" />
```

3:

```jsx
  <ProjectBadge />
```

![Example project badges](https://user-images.githubusercontent.com/19417581/56662487-fe10f900-669b-11e9-8af1-373793f4326b.png)

## Try the component locally

To try out the badge component locally:

1. `git clone` this repo
2. `cd formidable-oss-badges`
3. `yarn && yarn build && yarn link` or `npm i && npm run build && npm link`
4. `cd examples`
5. `yarn link "formidable-oss-badges"` or `npm link "formidable-oss-badges"`
6. `yarn && yarn start` or `npm i && npm start` to run a basic React app prepopulated with basic examples

You can then edit `examples/src/App.js`, either by returning the component directly, or by adding an object with the props you would like to trial in the `dataForExamples` array