import { useState, useEffect } from 'react'

const useStateFromProp = <TStateType>(
  initialValue: TStateType
): [TStateType, (value: TStateType) => void] => {
  const [value, setValue] = useState<TStateType>(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  return [value, setValue]
}

export default useStateFromProp
