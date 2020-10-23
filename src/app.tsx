import React, { Suspense, useState, useEffect } from 'react'
const ComputedOne = React.lazy(() => import('Components/computed/Computed1'))
const ComputedTwo = React.lazy(() => import('Components/computed/Computed2'))
import axios from 'axios'

import('Utils/math').then((math) => {
  console.log(math.add(1, 2))
})

function App() {
  const [showTwo, setShowTwo] = useState<boolean>(false)
  const [data, setData] = useState<string>('')

  function getData() {
    axios.get('http://127.0.0.1:3000').then((res) => {
      console.log(res)
      setData(res.data)
    })
  }

  useEffect(() => {
    getData()
  })

  return (
    <div className="app">
      <Suspense fallback={<div>Loading...</div>}>
        <ComputedOne a={1} b={2} />
        {showTwo && <ComputedTwo a={3} b={4} />}
        <button type="button" onClick={() => setShowTwo(!showTwo)}>
          显示/隐藏Two
        </button>
        <button onClick={getData}>请求后台数据</button>
        <>{data}</>
      </Suspense>
    </div>
  )
}

export default App
