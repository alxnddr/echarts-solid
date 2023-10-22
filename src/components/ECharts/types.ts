import { Ref } from '@solid-primitives/refs'
import { JSX } from 'solid-js'
import { EChartsOption, EChartsType, ResizeOpts } from 'echarts'

export type InitOptions = {
  locale?: string
  renderer?: 'canvas' | 'svg'
  devicePixelRatio?: number
  useDirtyRect?: boolean
  useCoarsePointer?: boolean
  pointerSize?: number
}

export type EChartsEventHandler = (event: any) => void | boolean
export type EChartsEventHandlerDefinition = {
  query: string | object
  handler: EChartsEventHandler
}

export type EventHandlers = Record<string, EChartsEventHandler | EChartsEventHandlerDefinition>

export interface EChartsBaseProps {
  ref?: Ref<HTMLDivElement>

  class?: string
  style?: JSX.CSSProperties

  initOptions?: InitOptions
  option: EChartsOption

  notMerge?: boolean
  lazyUpdate?: boolean

  isLoading?: boolean
  loadingOptions?: any

  resizeOptions?: Omit<ResizeOpts, 'width' | 'height'>

  theme?: string | object

  eventHandlers?: EventHandlers
  onInit?: (chartInstance: EChartsType) => void
}
