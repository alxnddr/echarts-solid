import { createEffect, on, onCleanup, onMount } from 'solid-js'
import { init } from 'echarts'
import type { EChartsType } from 'echarts'
import { mergeRefs } from '@solid-primitives/refs'
import type { EChartsBaseProps } from './types'
import { bindEvents, unbindEvents } from './utils'

export interface EChartsProps extends EChartsBaseProps {
  width: number | 'auto'
  height: number | 'auto'
}

export const ECharts = (props: EChartsProps) => {
  let chartElement: HTMLDivElement
  let chartInstance: EChartsType

  onMount(() => {
    chartInstance = init(chartElement, props.theme, {
      width: props.width,
      height: props.height,
      ...(props.initOptions ?? {}),
    })

    chartInstance.setOption(props.option, props.notMerge, props.lazyUpdate)

    if (props.eventHandlers) {
      bindEvents(chartInstance, props.eventHandlers)
    }

    if (props.isLoading) {
      chartInstance.showLoading(props.loadingOptions)
    }

    props.onInit?.(chartInstance)
  })

  onCleanup(() => {
    chartInstance.dispose()
  })

  createEffect(
    on(
      () => [props.width, props.height],
      ([width, height]) => {
        chartInstance.resize({ width, height, ...props.resizeOptions })
      },
      { defer: true },
    ),
  )

  createEffect(
    on(
      () => props.option,
      option => {
        chartInstance.setOption(option, props.notMerge, props.lazyUpdate)
      },
      { defer: true },
    ),
  )

  createEffect(
    on(
      () => props.isLoading,
      isLoading => {
        if (isLoading) {
          chartInstance.showLoading(props.loadingOptions)
        } else {
          chartInstance.hideLoading()
        }
      },
      { defer: true },
    ),
  )

  createEffect(
    on(
      () => props.eventHandlers,
      (eventHandlers, prevEventHandlers) => {
        if (prevEventHandlers) {
          unbindEvents(chartInstance, prevEventHandlers)
        }

        if (eventHandlers) {
          bindEvents(chartInstance, eventHandlers)
        }
      },
      { defer: true },
    ),
  )

  return (
    <div
      style={props.style}
      class={props.class}
      ref={mergeRefs(props.ref, el => (chartElement = el))}
    />
  )
}
