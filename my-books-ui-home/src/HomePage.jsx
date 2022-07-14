import React, { useState, useEffect } from 'react'
import Loading from 'uilib/Loading'
import ComponentsLoader from 'uilib/ComponentsLoader'

export default function HomePage({ location }) {
  const { pathname } = location
  const [components, setComponents] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:8888/api/${pathname}`)
      .then((response) => response.json())
      .then((data) => setComponents(data.components))
  }, [pathname])

  if (components) {
    return <ComponentsLoader components={components} />
  }

  return <Loading />
}
