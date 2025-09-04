import React from 'react'

export default function NtkFuncComp(ntkProps) {
  return (
    <div className='alart alert-danger'>
        <h2>Function Components Demo</h2>
        <h3>Welcome to, {ntkProps.name} - {ntkProps.age}</h3>
    </div>
  )
}
