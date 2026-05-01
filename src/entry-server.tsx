import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'

import AppProviders from './AppProviders'
import PublicAppRoutes from './PublicAppRoutes'

export function render(url: string) {
  const helmetContext: Record<string, unknown> = {}
  const appHtml = renderToString(
    <AppProviders helmetContext={helmetContext}>
      <StaticRouter location={url}>
        <PublicAppRoutes />
      </StaticRouter>
    </AppProviders>,
  )

  return {
    appHtml,
    helmet: helmetContext,
  }
}
