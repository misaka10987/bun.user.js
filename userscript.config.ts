import { defineConfig } from './lib/config'
import pack from './package.json'

export default defineConfig({
  id: 'bun-userscript-template',
  version: pack.version,

  github: 'misaka10987/bun.user.js',

  name: 'Bun Userscript Template',
  description: 'Template for building browser userscripts with Bun.',
  author: {
    name: 'misaka10987',
    email: 'misaka10987@outlook.com',
  },

  match: ['*://*/*'],
  grant: [],

  meta: {},
})
