# formidable-oss-badges Changelog

## 1.7.2

### Patch Changes

- - Fixed exported type `FeaturedBadgeNames` to exclude Simple names
    ([#104](https://github.com/FormidableLabs/formidable-oss-badges/pull/104))
  - Updated type name from `FeaturedBadgeNames` to singular `FeaturedBadgeName`
    (type is union not an array)

## 1.7.1

### Patch Changes

- Fixes name prop type on FeaturedBage component
  ([#102](https://github.com/FormidableLabs/formidable-oss-badges/pull/102))

## 1.7.0

### Minor Changes

- Add AMA
  ([#100](https://github.com/FormidableLabs/formidable-oss-badges/pull/100))

## 1.6.0

### Minor Changes

- Remove featuredBadgeNames string array and replace with a type for narrowing
  ([#97](https://github.com/FormidableLabs/formidable-oss-badges/pull/97))
  purposes

## 1.5.1

### Patch Changes

- Add sideEffects false to package and update featuredProjectBadge docs
  ([#95](https://github.com/FormidableLabs/formidable-oss-badges/pull/95))

## 1.5.0

### Minor Changes

- Add featured project badge exports for improved tree shaking
  ([#93](https://github.com/FormidableLabs/formidable-oss-badges/pull/93))

## 1.4.1

### Patch Changes

- Enable ProjectBadge to accept additional props for use in OSS Banner -
  matching
  ([#91](https://github.com/FormidableLabs/formidable-oss-badges/pull/91))
  FeaturedBadge"

## 1.4.0

### Minor Changes

- Add simple variant for badges to display without the badge description.
  ([#89](https://github.com/FormidableLabs/formidable-oss-badges/pull/89))

## 1.3.2

### Patch Changes

- Passthrough SVG props to badges
  ([#86](https://github.com/FormidableLabs/formidable-oss-badges/pull/86))

## 1.3.1

### Patch Changes

- Remove explicit dimensions from FigLog
  ([#84](https://github.com/FormidableLabs/formidable-oss-badges/pull/84))

## 1.3.0

### Minor Changes

- Add FigLog
  ([#81](https://github.com/FormidableLabs/formidable-oss-badges/pull/81))

## 1.2.0

### Minor Changes

- Add Envy
  ([#79](https://github.com/FormidableLabs/formidable-oss-badges/pull/79))

## 1.1.0

### Minor Changes

- Adds support for exporting available badges as an array
  ([#77](https://github.com/FormidableLabs/formidable-oss-badges/pull/77))

## 1.0.0

### Major Changes

- New TypeScript-based version using CSS modules.
  ([#75](https://github.com/FormidableLabs/formidable-oss-badges/pull/75))

## 0.5.2 (2022-07-08)

- Add overflow to nuka badge via
  [#69](https://github.com/FormidableLabs/formidable-oss-badges/pull/69)

## 0.5.1 (2022-06-24)

- Fixes render warning for FeaturedBadge via
  [#68](https://github.com/FormidableLabs/formidable-oss-badges/pull/68)
- Replaces SVG width and height with viewbox attribute via
  [#68](https://github.com/FormidableLabs/formidable-oss-badges/pull/68)

## 0.5.0 (2022-06-22)

- Adds RN Owl to FeaturedBadge via
  [#67](https://github.com/FormidableLabs/formidable-oss-badges/pull/67)
- Small logo options (no text) via
  [#67](https://github.com/FormidableLabs/formidable-oss-badges/pull/67)
- SVG optimizations/a11y improvements via
  [#67](https://github.com/FormidableLabs/formidable-oss-badges/pull/67)

## 0.4.0 (2022-03-15)

- [#61](https://github.com/FormidableLabs/formidable-oss-badges/pull/61) - adds
  support for Nuka to FeaturedBadge

## 0.3.6 (2021-05-10)

- Update dependencies

## 0.3.5 (2020-05-20)

-[#31](https://github.com/FormidableLabs/formidable-oss-badges/pull/31) -
Prevent `isHoverable` on svg node

## 0.3.4 (2020-04-17)

- [#30](https://github.com/FormidableLabs/formidable-oss-badges/pull/30) - fix
  `FeaturedBadge` hover styles

## 0.3.3 (2020-04-17)

- [#29](https://github.com/FormidableLabs/formidable-oss-badges/pull/29) - adds
  `isHoverable` prop for `FeaturedBadge` and `ProjetBadge`

## 0.3.2 (2020-03-16)

- [#27](https://github.com/FormidableLabs/formidable-oss-badges/pull/27) Remove
  unnecessary masks on urql badge

## 0.3.1 (2020-03-16)

- [#25](https://github.com/FormidableLabs/formidable-oss-badges/pull/25) tweak
  project badge styles and bring back hover

## 0.3.0 (2020-03-04)

- `styled-components` is now a peerDependency instead of a real dependency
- badge styles have been updated to reflect new designs
- new `FeaturedBadge` component renders special badges for `victory`, `urql`,
  `spectacle`, and `renature`
