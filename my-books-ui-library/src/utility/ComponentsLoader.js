import React, { lazy, Suspense } from 'react'
import Loading from 'uilib/Loading'
import ErrorBoundary from 'uilib/ErrorBoundary'

// using this to overcome dynamic imports issue with webpack
function componentMapper(component) {
  const components = {
    'uilib/InlineWidget': lazy(() => import('uilib/InlineWidget'))
  }
  return components[component]
}

function ComponentsLoader({ components }) {
  const rendered = components.map((value) => {
    const { id, from, props } = value
    const component = `${from}/${id}`
    const Component = componentMapper(component)
    return (
      <ErrorBoundary key={id}>
        <Suspense fallback={<Loading />}>
          <Component {...props} />
        </Suspense>
      </ErrorBoundary>
    )
  })

  return rendered
}

export default ComponentsLoader
