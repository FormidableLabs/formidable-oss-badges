# ProjectBadges

Badges for Formidable Open Source Projects

## Contents

- [Using the package](#using-the-package)
- [Component props](#component-props)
  - [Examples](#examples)
- [Try component locally](#try-the-component-locally)

## Using the package

- `yarn add formidable-oss-badges` or `npm install formidable-oss-badges`
- In your react app, `import { ProjectBadge } from "formidable-oss-badges;`
- Use the `<ProjectBadge />` component as directed below

## Component props
The `<ProjectBadge />` component takes five, optional, props:

| Prop         | Type             | Description                                                                                  | Example             |
| ------------ | ---------------- | -------------------------------------------------------------------------------------------- | ------------------- |
| color        | String (hex)     | Base color of the badge                                                                      | `"#FF00FF"`         |
| abbreviation | String           | Short representation of the name. Large font. Typically one uppercase letter, one lowercase. | `"Em"`              |
| description  | String           | Title or brief description. Smaller text, displayed in all-caps.                             | `"Enzyme Matchers"` |
| number       | Number or String | Number that appears at the top of the badge                                                  | `9` or `"09"`       |
| className    | String           | Class to apply directly to the SVG                                                           | `"project-badge"`   |

### Examples

`<ProjectBadge color="#89E" abbreviation="No" description="Number"/>`

`<ProjectBadge color="#E48055" abbreviation="Em" description="Enzyme Matchers" number="09" />`

`<ProjectBadge />`

In the order above (top-to-bottom => left-to-right):

![Example project badges](https://user-images.githubusercontent.com/19417581/56655576-1b899700-668b-11e9-8d76-f7fdc8cfa74e.png)

## Try the component locally

To try out the badge component locally:

- `git clone` this repo and `cd formidable-oss-badges/examples`
- `yarn start` to run a basic react app prepopulated with basic examples
- Edit `examples/src/App.js`, either by returning the component directly, or by adding an object with the props you would like to trial in the `dataForExamples` array