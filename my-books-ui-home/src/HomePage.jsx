import React, { useState, useEffect } from 'react'

export default function HomePage() {
  const [components, setComponents] = useState(null)

  useEffect(() => {
    fetch('http://localhost:8888/api/home')
      .then((response) => response.json())
      .then((data) => setComponents(data))
  }, [])

  if (components) {
    return <div>{JSON.stringify(components, null, 2)}</div>
  }

  return <h1>Home Page Here</h1>
}
