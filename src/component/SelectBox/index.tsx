import { FC } from 'react'

export const SelectBox: FC<{ text: string }> = ({ text }) => {
  return (
    <label>
      <input type='checkbox' />
      {text}
    </label>
  )
}
