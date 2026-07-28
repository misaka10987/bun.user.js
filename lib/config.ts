import { type Metadata } from '@jeiea/userscript-metadata'

type Author = string | { name: string; email?: string }

const displayAuthor = (author: Author): string => {
  if (typeof author === 'string') {
    return author
  }

  const email = author.email ? ` <${author.email}>` : ''

  return `${author.name}${email}`
}

interface Config {
  id: string
  version: string

  github?: string

  name?: string
  description?: string
  namespace?: string
  author?: Author | Author[]

  updateURL?: string
  downloadURL?: string
  supportURL?: string

  match: string[]
  grant: string[]

  meta?: Metadata
}

export const defineConfig = (
  config: Config,
): { id: string; meta: Metadata } => {
  const name = config.name ?? config.id

  const namespace =
    config.namespace ??
    (config.github ? `https://github.com/${config.github}` : undefined)

  const updateURL =
    config.updateURL ??
    (config.github
      ? `https://github.com/${config.github}/releases/latest/download/${config.id}.meta.js`
      : undefined)

  const downloadURL =
    config.downloadURL ??
    (config.github
      ? `https://github.com/${config.github}/releases/latest/download/${config.id}.user.js`
      : undefined)

  const supportURL =
    config.supportURL ??
    (config.github ? `https://github.com/${config.github}/issues` : undefined)

  const author = config.author
    ? Array.isArray(config.author)
      ? config.author.map(displayAuthor)
      : [displayAuthor(config.author)]
    : undefined

  return {
    id: config.id,
    meta: {
      '@version': [config.version],

      '@name': [name],
      ...(config.description ? { '@description': [config.description] } : {}),
      ...(namespace ? { '@namespace': [namespace] } : {}),
      ...(author ? { '@author': author } : {}),

      ...(updateURL ? { '@updateURL': [updateURL] } : {}),
      ...(downloadURL ? { '@downloadURL': [downloadURL] } : {}),
      ...(supportURL ? { '@supportURL': [supportURL] } : {}),

      '@match': config.match,
      '@grant': config.grant,

      ...config.meta,
    },
  }
}
