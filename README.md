# Formidable OSS Badges

Badges for Formidable Open Source Projects

## Contents

- [Using the package](#using-the-package)
- [ProjectBadge](#projectbadge)
    - [Component props](#projectbadge-props)
    - [Component children](#projectbadge-children)
- [IconBadge](#iconbadge)
    - [Component props](#iconbadge-props)
    - [Component children](#iconbadge-children)
- [Examples](#examples)
- [Try component locally](#try-the-component-locally)

## Using the package

- `yarn add formidable-oss-badges` or `npm install formidable-oss-badges`
- In your react app, `import { ProjectBadge, IconBadge } from "formidable-oss-badges";`
- Use the `<ProjectBadge />` and/or `<IconBadge></IconBadge>` component as directed below

## ProjectBadge
### ProjectBadge props

The `<ProjectBadge />` component takes five, optional, props:

| Prop         | Type             | Description                                                                                  | Example             |
| ------------ | ---------------- | -------------------------------------------------------------------------------------------- | ------------------- |
| color        | String (hex/RGB) | Base color of the badge                                                                      | `"#FF00FF"`         |
| abbreviation | String           | Short representation of the name. Large font. Typically one uppercase letter, one lowercase. | `"Em"`              |
| description  | String           | Title or brief description. Smaller text, displayed in all-caps.                             | `"Enzyme Matchers"` |
| number       | Number or String | Number that appears at the top of the badge                                                  | `9` or `"09"`       |
| className    | String           | Class to apply directly to the SVG                                                           | `"project-badge"`   |

It is recommended to at least include the `color`, `description` and `abbreviation` props.

### ProjectBadge children
Will accept any svg child (we recommend to use an `<image/>` with an embedded png, svg or lossless image format of your choice. See example 5).

Presence of a child will cause the component to ignore any `abbreviation` prop.

You will need to position the child yourself.

e.g: 
```jsx
 <image
    x="14%"
    y="20%"
  />
  ```


## IconBadge
### IconBadge props
`<IconBadge />` only accepts a color prop.
 Prop         | Type             | Description                                                                                  | Example             |
| ------------ | ---------------- | -------------------------------------------------------------------------------------------- | ------------------- |
| color        | String (hex/RGB) | Base color of the badge                                                                      | `"#FF00FF"`         |


### IconBadge children
Like `ProjectBadge`, will accept any svg child (we recommend to use an `<image/>` with an embedded png, svg or lossless image format of your choice. See example 4).

This badge should always be given a child.

You will need to position the child yourself.

## Examples

1:

```jsx
<ProjectBadge color="#89E" abbreviation="No" description="Number" />
```

2:

```jsx
<ProjectBadge
  color="#E48055"
  abbreviation="Em"
  description="Enzyme Matchers"
  number="09"
/>
```

3:

```jsx
<ProjectBadge />
```

### Children:

4:

IconBadge which just shows an outline:

```jsx
<IconBadge color="#89E">
  <image
    x="14%"
    y="20%"
    width="50%"
    href="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
  />
</IconBadge>
```

5:

ProjectBadge with svg child:

```jsx
<ProjectBadge abbreviation="R" description="React" number="09" color="#90dafa">
  <image
    x="14%"
    y="20%"
    width="50%"
    href="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
  />
</ProjectBadge>
```

![Example project badges](https://user-images.githubusercontent.com/19417581/56662487-fe10f900-669b-11e9-8af1-373793f4326b.png)

![Example image embedded badges](https://user-images.githubusercontent.com/21056165/57460381-eb3a1f00-726c-11e9-8811-e8adc048c6fb.png)

## Try the components locally

To try out the badge components locally:

1. `git clone` this repo
2. `cd formidable-oss-badges`
3. `yarn && yarn build && yarn link` or `npm i && npm run build && npm link`
4. `cd examples`
5. `yarn link "formidable-oss-badges"` or `npm link "formidable-oss-badges"`
6. `yarn && yarn start` or `npm i && npm start` to run a basic React app prepopulated with basic examples

You can then edit `examples/src/App.js`, either by returning the components directly, or by adding an object with the props you would like to trial in the `dataForExamples` array. 

Note that this array is currently just used for passing *props* into `<ProjectBadge />` and not for passing children or for rendering `<IconBadge />`.
