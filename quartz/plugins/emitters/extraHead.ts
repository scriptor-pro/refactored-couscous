import { QuartzEmitterPlugin } from "../types"

export const ExtraHead: QuartzEmitterPlugin = () => ({
  name: "ExtraHead",
  async *emit() {},

  async *emitHead() {
    yield `
<!-- Favicon multi-taille généré -->
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png">
<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png">
<link rel="icon" type="image/png" sizes="512x512" href="/favicon-512x512.png">
<link rel="shortcut icon" href="/favicon.ico">
`
  },

  async *partialEmit() {},
})
