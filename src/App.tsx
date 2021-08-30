import { useState } from 'react'
import { x } from '@xstyled/styled-components'
import Pie from './components/Pie'

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

function App(): JSX.Element {
  const [categories, setCategories] = useState(() => {
    const initialCategories = [
      {
        title: 'Category A',
        color: '#94a3b8',
      },
      {
        title: 'Category B',
        color: '#fb923c',
      },
      {
        title: 'Category C',
        color: '#4ade80',
      },
      {
        title: 'Category D',
        color: '#a78bfa',
      },
    ]
    const splits = splitAmount(100, initialCategories.length)

    return initialCategories.map((item, index) => ({
      ...item,
      id: index,
      value: splits[index],
    }))
  })

  const handleCategories = (id: number, value: number): void => {
    const others = splitAmount(100 - value, categories.length - 1)
    setCategories((prev) => {
      return prev.map((item) => ({
        ...item,
        value: item.id === id ? value : others.pop() || 0,
      }))
    })
  }

  return (
    <x.div
      w="100vw"
      h="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-start"
      mt={5}
    >
      <Pie data={categories} handleSlider={handleCategories} />
    </x.div>
  )
}

export default App
