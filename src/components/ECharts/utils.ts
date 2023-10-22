import { EChartsType } from 'echarts'
import { EventHandlers } from './types'

export const bindEvents = (chartInstance: EChartsType, eventHandlers: EventHandlers) => {
  Object.entries(eventHandlers).forEach(([eventName, handler]) => {
    if ('query' in handler) {
      chartInstance.on(eventName, handler.query, handler.handler)
    } else {
      chartInstance.on(eventName, handler)
    }
  })
}

export const unbindEvents = (chartInstance: EChartsType, eventHandlers: EventHandlers) => {
  Object.entries(eventHandlers).forEach(([eventName, handler]) => {
    chartInstance.off(eventName, 'handler' in handler ? handler.handler : handler)
  })
}
