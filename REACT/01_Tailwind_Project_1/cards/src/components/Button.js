import React from 'react'

export default function Button(button) {
  return (
    <div class='flex justify-center'>
      <button class='bg-green-500 text-white w-28 h-12 hover:bg-green-600'>{button.name}</button>
    </div>
  )
}
