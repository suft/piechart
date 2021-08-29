// import { useState } from 'react'
import { x } from '@xstyled/styled-components'
import { PieChart as Chart } from 'react-minimal-pie-chart'
import Slider from './Slider'

type Category = {
  id: number
  title: string
  color: string
  track: string
  accent: string
  value: number
}

type PieProps = {
  data: Category[]
  handleSlider: (id: number, value: number) => void
}

const Pie = ({ data, handleSlider }: PieProps): JSX.Element => {
  return (
    <x.div>
      <x.div display="flex" alignItems="center" justifyContent="center" gap={4}>
        <x.div w={96} maxWidth={0.5}>
          <Chart data={data} lineWidth={60} />
        </x.div>
        <x.ul
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap={4}
        >
          {data.map((item) => (
            <x.li
              key={item.id}
              fontSize="lg"
              fontWeight="bold"
              textAlign="center"
            >
              <x.span color={item.track}>{item.title}</x.span>
              <br />
              <strong>{item.value}%</strong>
            </x.li>
          ))}
        </x.ul>
      </x.div>
      {data.map((item) => (
        <Slider
          key={item.id}
          id={item.id}
          value={item.value}
          title={item.title}
          color={item.color}
          accent={item.accent}
          handleChange={handleSlider}
        />
      ))}
    </x.div>
  )
}

export default Pie
