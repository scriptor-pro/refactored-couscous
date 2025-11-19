// quartz/plugins/tagsCloud.ts
import { QuartzEmitterPlugin } from "./types"
import fs from "fs"
import path from "path"

export const TagsCloudPlugin: QuartzEmitterPlugin = () => {
  return {
    name: "TagsCloudPlugin",

    // L’étape "emit" se lance après la transformation de tous les fichiers
    async emit({ allFiles, cfg }) {
      const tagCounts: Record<string, number> = {}

      // 1️⃣ Collecte de tous les tags à travers les fichiers Markdown
      for (const file of allFiles) {
        const fm = file.frontmatter
        if (fm?.tags) {
          for (const tag of fm.tags) {
            tagCounts[tag] = (tagCounts[tag] || 0) + 1
          }
        }
      }

      const entries = Object.entries(tagCounts)
      if (entries.length === 0) {
        console.warn("[TagsCloudPlugin] Aucun tag trouvé.")
        return
      }

      // 2️⃣ Détermination du min et max de fréquence
      const maxCount = Math.max(...entries.map(([_, c]) => c))
      const minCount = Math.min(...entries.map(([_, c]) => c))

      // 3️⃣ Fonction de mise à l’échelle linéaire : taille entre 0.8em et 2.5em
      const scaleFont = (count: number) => {
        if (maxCount === minCount) return 1.2
        const norm = (count - minCount) / (maxCount - minCount)
        return 0.8 + norm * (2.5 - 0.8)
      }

      // 4️⃣ Génération du HTML du nuage de tags
      const tagsHTML = entries
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([tag, count]) => {
          const size = scaleFont(count).toFixed(2)
          const safeTag = encodeURIComponent(tag)
          return `<a href="/tags/${safeTag}/"
              style="
                font-size:${size}em;
                margin:0.4em;
                text-decoration:none;
                color:var(--secondary);
                display:inline-block;
                transition:all 0.2s ease-in-out;

