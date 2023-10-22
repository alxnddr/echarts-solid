import { createSignal } from 'solid-js'

import type { EChartsBaseProps } from './types'
import { ECharts } from './ECharts'
import { mergeRefs } from '@solid-primitives/refs'
import { createElementSize } from '@solid-primitives/resize-observer'

export interface EChartsAutoSizeProps extends EChartsBaseProps {}

export const EChartsAutoSize = (props: EChartsAutoSizeProps) => {
  const [chartElement, setChartElement] = createSignal<HTMLDivElement>()
  const size = createElementSize(chartElement)

  return (
    <ECharts
      {...props}
      width={size.width ?? 0}
      height={size.height ?? 0}
      style={{ width: '100%', height: '100%', ...props.style }}
      ref={mergeRefs(props.ref, setChartElement)}
    />
  )
}
