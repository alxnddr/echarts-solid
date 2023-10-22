<p>
  <img width="100%" src="https://assets.solidjs.com/banner?type=echarts-solid&background=tiles&project=%20" alt="echarts-solid">
</p>

# echarts-solid

[![pnpm](https://img.shields.io/badge/maintained%20with-pnpm-cc00ff.svg?style=for-the-badge&logo=pnpm)](https://pnpm.io/)

`echarts-solid` is a library that provides components for integrating ECharts with SolidJS apps. It includes two main components: `ECharts` and `EChartsAutoSize`, both designed to make it easier to work with ECharts in Solid-based projects.

## Quick start

Install it:

```bash
npm i echarts-solid echarts
# or
yarn add echarts-solid echarts
# or
pnpm add echarts-solid echarts
```

Use it:

```tsx
import { ECharts } from 'echarts-solid'

function MyChartComponent() {
  const options = {
    // ... your ECharts option here
  };

  return (
    <ECharts
      option={options}
      width={600}
      height={400}
    />
  );
}
```

For responsive charts, use the `EChartsAutoSize` component:

```tsx
import { EChartsAutoSize } from 'echarts-solid'

function MyResponsiveChartComponent() {
  const options = {
    // ... your ECharts option here
  };

  return (
    <EChartsAutoSize
      option={options}
    />
  );
}
```

## Components

### ECharts

`ECharts` is a component that renders an ECharts chart with specified options and styles.

#### Props

- `option`: ECharts `option` object with data and configuration.
- `width`, `height`: The dimensions of the chart.
- `initOptions`: Optional parameters for the ECharts instance initialization.
- `notMerge`: Whether not to merge with previous `option`.
- `lazyUpdate`: Whether to update chart immediately.
- `isLoading`: Displays a loading animation when the chart is being prepared or data is being fetched.
- `loadingOptions`: The options for the loading animation.
- `resizeOptions`: Options to pass to ECharts' resize method.
- `theme`: Theme to be applied to the chart instance.
- `eventHandlers`: An object to attach event handlers to the chart instance.
- `onInit`: Callback function that is invoked with the chart instance when it is initialized.
- `class`, `style`: Standard HTML attributes for styling.
- `ref`: Ref of the div element that is used for the chart.

### EChartsAutoSize

`EChartsAutoSize` is similar to `ECharts` but automatically adjusts its size based on its container's size.

#### Props

It has all the same props as ECharts, except for width and height because it adjusts to the chart element's size.

## Events

You can attach event handlers to different chart events by passing an `eventHandlers` object. Each key is the event name, and the value can be the handler function or an object with `query` for filtering and `handler` for the function itself.

```tsx
const eventHandlers = {
  'click': (event: ECElementEvent) => {
    console.log('Chart is clicked!', event);
  }
};

<EChartsAutoSize
  option={options}
  eventHandlers={eventHandlers}
/>
```

## Loading State

You can control the display of a loading animation by using the `isLoading` and `loadingOptions` props:

```tsx
<EChartsAutoSize
  option={options}
  isLoading={true}
  loadingOptions={{ text: 'Data is loading...' }}
/>
```

## Contributing

Contributions to the `echarts-solid` library are encouraged and appreciated.

## License

`echarts-solid` is [MIT licensed](./LICENSE).
