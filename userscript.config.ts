import { defineConfig } from './lib/config'

export default defineConfig({
  id: 'bun-userscript-template',
  name: 'Bun Userscript Template',
  namespace: 'https://github.com/misaka10987/bun.user.js',
  version: '0.1.0',
  author: {
    name: 'misaka10987',
    email: 'misaka10987@outlook.com',
  },
  description: 'Template for building browser userscripts with Bun.',
  match: ['*://*/*'],
  grant: [],
})
