import { type Metadata } from '@jeiea/userscript-metadata'

interface Config {
  id: string
  name: string
  namespace: string
  version: string
  author:
    | {
        name: string
        email?: string
      }
    | string
  description: string
  match: string[]
  grant: string[]
  meta?: Metadata
}

export const defineConfig = (config: Config) => {
  return {
    id: config.id,
    meta: {
      '@name': [config.name],
      '@namespace': [config.namespace],
      '@version': [config.version],
      '@author': [
        typeof config.author === 'string'
          ? config.author
          : `${config.author.name}${config.author.email ? ` <${config.author.email}>` : ''}`,
      ],
      '@description': [config.description],
      '@match': config.match,
      '@grant': config.grant,
      ...config.meta,
    },
  }
}
