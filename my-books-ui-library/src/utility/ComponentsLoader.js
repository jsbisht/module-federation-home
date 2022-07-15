import React, { lazy, Suspense } from 'react'
import Loading from 'uilib/Loading'
import ErrorBoundary from 'uilib/ErrorBoundary'

// using this to overcome dynamic imports issue with webpack
function componentMapper(value) {
  const { id, from } = value
  if (from === 'window') return id

  const component = `${from}/${id}`
  const components = {
    'uilib/InlineWidget': lazy(() => import('uilib/InlineWidget')),
    'uilib/MessageWidget': lazy(() => import('uilib/MessageWidget'))
  }
  return components[component]
}

function ComponentsLoader({ components }) {
  const rendered = components.map((value) => {
    const { id, props } = value
    // Void elements
    const VOID_ELEMENTS = ['br', 'input']
    if (VOID_ELEMENTS.includes(id)) {
      const VoidComponent = id
      return <VoidComponent {...props} />
    }
    // Non void components
    const Component = componentMapper(value)
    return (
      <ErrorBoundary key={id}>
        <Suspense fallback={<Loading />}>
          <Component {...props}>
            {value.components && (
              <ComponentsLoader components={value.components} />
            )}
            {value.content}
          </Component>
        </Suspense>
      </ErrorBoundary>
    )
  })

  return rendered
}

export default ComponentsLoader
