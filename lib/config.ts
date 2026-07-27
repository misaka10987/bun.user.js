import pack from '../package.json' with { type: 'json' }
import { type Metadata } from '@jeiea/userscript-metadata'

interface Config {
  id?: string
  name?: string
  namespace?: string
  version?: string
  author?: string
  description?: string
  match?: string[]
  grant?: string[]
  meta?: Metadata
}

export const defineConfig = (config: Config) => {
  return {
    id: config.id ?? pack.name,
    meta: {
      '@name': [config.name ?? pack.name],
      '@namespace': [config.namespace ?? pack.homepage],
      '@version': [config.version ?? pack.version],
      '@author': [
        config.author ?? `${pack.author.name} <${pack.author.email}>`,
      ],
      '@description': [config.description ?? pack.description],
      '@match': config.match ?? ['*://*/*'],
      '@grant': config.grant ?? [],
      ...config.meta,
    },
  }
}
