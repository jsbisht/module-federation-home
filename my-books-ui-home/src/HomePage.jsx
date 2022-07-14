import React, { useState, useEffect } from 'react'
import Loading from 'uilib/Loading'
import ComponentsLoader from 'uilib/ComponentsLoader'

export default function HomePage({ location }) {
  const { pathname, search } = location
  const [components, setComponents] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:8888/api${pathname}${search}`)
      .then((response) => response.json())
      .then((data) => setComponents(data.components))
  }, [pathname, search])

  if (components) {
    return <ComponentsLoader components={components} />
  }

  return <Loading />
}
