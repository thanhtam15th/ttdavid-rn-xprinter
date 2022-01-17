import React, { useEffect } from 'react'
import RNXprinterModule, { Counter } from 'ttdavid-rn-xprinter'

const App = () => {
  useEffect(() => {
    console.log(RNXprinterModule)
  })

  return <Counter />
}

export default App
