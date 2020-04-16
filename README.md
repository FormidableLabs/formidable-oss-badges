# Formidable OSS Badges

Badges for Formidable Open Source Projects

## Contents

- [Using the package](#using-the-package)
- [ProjectBadge](#projectbadge)
  - [Component props](#projectbadge-props)
  - [Component children](#projectbadge-children)
  - [Usage](#projectbadge-usage)
- [FeaturedBadge](#featuredbadge)
  - [Available badges](#available-badges)
  - [Usage](#featuredbadge-usage)
- [IconBadge](#iconbadge)
  - [Component props](#iconbadge-props)
  - [Component children](#iconbadge-children)
  - [Usage](#iconbadge-usage)
- [Examples](#examples)
- [Try component locally](#try-the-component-locally)

## Using the package

- `yarn add formidable-oss-badges` or `npm install formidable-oss-badges`
- In your react app, `import { FeaturedBadge, IconBadge, ProjectBadge } from "formidable-oss-badges";`
- Use the `<ProjectBadge />`, `<FeaturedBadge />`, and/or `<IconBadge></IconBadge>` component as directed below

## ProjectBadge

### ProjectBadge props

The `<ProjectBadge />` component takes five, optional, props:

| Prop         | Type             | Description                                                                                  | Example             |
| ------------ | ---------------- | -------------------------------------------------------------------------------------------- | ------------------- |
| color        | String (hex/RGB) | Base color of the badge                                                                      | `"#FF00FF"`         |
| abbreviation | String           | Short representation of the name. Large font. Typically one uppercase letter, one lowercase. | `"Em"`              |
| description  | String           | Title or brief description. Smaller text, displayed in all-caps.                             | `"Enzyme Matchers"` |
| className    | String           | Class to apply directly to the SVG                                                           | `"project-badge"`   |

It is recommended to at least include the `color`, `description`, and `abbreviation` props.

### ProjectBadge children

Will accept any svg child (we recommend to use an `<image/>` with an embedded png, svg or lossless image format of your choice. See example 5).

Presence of a child will cause the component to ignore any `abbreviation` prop.

You will need to position the child yourself.

e.g:

```jsx
<image x="14%" y="20%" />
```

## FeaturedBadge

To use a Featured Formidable Badge, you only need to pass in a single prop, `name`, that matches one of the available badges listed below.

### Available Badges

See [featuredLogos](https://github.com/FormidableLabs/formidable-oss-badges/tree/master/src/assets/featuredLogos) for the latest available lineup.

- `renature`
- `spectacle`
- `urql`
- `victory`

## IconBadge

### IconBadge props

`<IconBadge />` only accepts a color prop.
Prop | Type | Description | Example |
| ------------ | ---------------- | -------------------------------------------------------------------------------------------- | ------------------- |
| color | String (hex/RGB) | Base color of the badge | `"#FF00FF"` |

### IconBadge children

Like `ProjectBadge`, will accept any svg child (we recommend to use an `<image/>` with an embedded png, svg or lossless image format of your choice. See example 4).

This badge should always be given a child.

You will need to position the child yourself.

## Examples (with Images)

### ProjectBadge Usage

**Example 1:**

```jsx
<ProjectBadge color="#89E" abbreviation="No" description="Number" />
```

**Example 2:**

```jsx
<ProjectBadge color="#E48055" abbreviation="Em" description="Enzyme Matchers" />
```

**Example 3:**

```jsx
<ProjectBadge />
```

**Example 5:**

ProjectBadge with svg child:

```jsx
<ProjectBadge abbreviation="R" description="React" color="#90dafa">
  <image
    x="14%"
    y="20%"
    width="50%"
    href="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
  />
</ProjectBadge>
```

### IconBadge Usage


**Example 4**:

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

### FeaturedBadge Usage

**Example 6:**

```jsx
<FeaturedBadge name="victory">
```

### Example Badges

| 1                                                                                                               | 2                                                                                                                        | 3                                                                                                              |
| --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| ![Number](https://user-images.githubusercontent.com/35961363/75203096-16213100-5722-11ea-9bd8-6b77b828696f.png) | ![Enzyme Matchers](https://user-images.githubusercontent.com/35961363/75203147-381ab380-5722-11ea-975f-8a79e32879d8.png) | ![Blank](https://user-images.githubusercontent.com/35961363/75203192-5680af00-5722-11ea-8d93-8b1a26a0d7d9.png) |

| 4                                                                                                                              | 5                                                                                                                           | 6                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| ![ProjectBadge with png](https://user-images.githubusercontent.com/35961363/75203481-06561c80-5723-11ea-9930-04ecd6028990.png) | ![IconBadge with png](https://user-images.githubusercontent.com/35961363/75203537-2f76ad00-5723-11ea-9aad-93079de1498b.png) | ![Featured badge](https://user-images.githubusercontent.com/35961363/75203570-487f5e00-5723-11ea-87d2-590524ae71f0.png) |

## Try the components locally

To try out the badge components locally:

1. `git clone` this repo
2. `cd formidable-oss-badges`
3. `yarn && yarn build && yarn link` or `npm i && npm run build && npm link`
4. `cd examples`
5. `yarn link "formidable-oss-badges"` or `npm link "formidable-oss-badges"`
6. `yarn && yarn start` or `npm i && npm start` to run a basic React app prepopulated with basic examples

You can then edit `examples/src/App.js`, either by returning the components directly, or by adding an object with the props you would like to trial in the `dataForExamples` array.

Note that this array is currently just used for passing _props_ into `<ProjectBadge />` and not for passing children or for rendering `<IconBadge />`.
