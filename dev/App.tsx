import type { Component } from 'solid-js'
import styles from './App.module.css'
import { ECharts, EChartsAutoSize } from '../src'
import { createSignal } from 'solid-js'
import type { ECElementEvent, EChartsOption } from 'echarts'

const xAxisData = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

function generateRandomData() {
  const randomNumbers = []
  for (let i = 0; i < 7; i++) {
    randomNumbers.push(Math.floor(Math.random() * (500 - 100 + 1)) + 100)
  }
  return randomNumbers
}

const getRandomOption = (): EChartsOption => {
  return {
    xAxis: {
      type: 'category',
      data: xAxisData,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: generateRandomData(),
        type: 'bar',
      },
    ],
  }
}

const App: Component = () => {
  const [option, setOption] = createSignal<EChartsOption>(getRandomOption())
  const [isLoading, setIsLoading] = createSignal(false)
  const [eventLog, setEventLog] = createSignal<string[]>([])

  const eventHandlers = {
    click: (event: ECElementEvent) => {
      setEventLog(prev => [...prev, `click: ${xAxisData[event.dataIndex]}`])
    },
  }

  const handleToggleLoading = () => setIsLoading(prev => !prev)
  const handleUpdateOption = () => setOption(getRandomOption())

  return (
    <div class={styles.App}>
      <div>
        <button onClick={handleToggleLoading}>Toggle loading</button>
        <button onClick={handleUpdateOption}>Update data</button>
      </div>
      <h3>ECharts</h3>
      <div class={styles.ChartContainer}>
        <ECharts
          eventHandlers={eventHandlers}
          isLoading={isLoading()}
          option={option()}
          width={600}
          height={400}
        />
      </div>
      <h3>EChartsAutoSize</h3>
      <div class={styles.ChartContainer}>
        <EChartsAutoSize eventHandlers={eventHandlers} isLoading={isLoading()} option={option()} />
      </div>
      <div>
        Event log:
        {eventLog().map(event => (
          <div>{event}</div>
        ))}
      </div>
    </div>
  )
}

export default App
