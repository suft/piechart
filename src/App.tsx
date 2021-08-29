import { useState } from 'react'
import { x } from '@xstyled/styled-components'
import Pie from './components/Pie'

function App(): JSX.Element {
  const [categories, setCategories] = useState([
    {
      id: 1,
      value: 33,
      title: 'First label',
      color: '#94a3b8',
      track: 'blue-400',
      accent: 'blue-200',
    },
    {
      id: 2,
      value: 33,
      title: 'Second Label',
      color: '#fb923c',
      track: 'orange-400',
      accent: 'orange-200',
    },
    {
      id: 3,
      value: 34,
      title: 'Third label,',
      color: '#4ade80',
      track: 'green-400',
      accent: 'green-200',
    },
  ])

  const handleCategories = (id: number, value: number): void => {
    const others = splitAmount(100 - value, 2)
    setCategories((prev) => {
      return prev.map((item) => ({
        ...item,
        value: item.id === id ? value : others.pop() || 0,
      }))
    })
  }

  const splitAmount = (amount: number, n: number): number[] => {
    const parts = []
    if (amount % n === 0) {
      const p = amount / n
      for (let i = 0; i < n; ++i) {
        parts.push(p)
      }
    } else {
      const zp = n - (amount % n)
      const pp = Math.floor(amount / n)
      for (let i = 0; i < n; ++i) {
        if (i >= zp) parts.push(pp + 1)
        else parts.push(pp)
      }
    }
    return parts
  }

  return (
    <x.div
      w="100vw"
      h="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-start"
      mt={6}
    >
      <Pie data={categories} handleSlider={handleCategories} />
    </x.div>
  )
}

export default App
