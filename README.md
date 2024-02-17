# Bearei theme

The Bearei theme library is an npm package based on the Material Design guidelines, designed for customizing and applying themes that adhere to the Material Design style for UI components in Bearei-related projects. It offers a variety of theme configuration options, including colors, fonts, shadows, and shapes, facilitating the creation of consistent and visually appealing user interfaces.

# Related Links:

-   [Material Design Official Website](https://m3.material.io/)

## Installation

> yarn add @bearei/theme --save

## Use

```typescript
import {theme} from '@bearei/theme';

const {font, color, typography, elevation, createTransition, palette, shape, spacing} = theme({
    scheme: 'light',
});
```
