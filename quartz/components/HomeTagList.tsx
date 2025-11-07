import { QuartzComponentConstructor } from "./types"
import { getAllTags } from "../util"

export default (() => {
  function HomeTagList() {
    const tags = getAllTags()
    const counts = Object.values(tags)
    const min = Math.min(...counts)
    const max = Math.max(...counts)

    return (
      <div class="home-tag-cloud">
        {Object.entries(tags).map(([tag, count]) => {
          const scale =
            min === max
              ? 1
              : 0.8 + (1.4 * (count - min)) / (max - min)
          const saturation =
            min === max
              ? 50
              : 30 + (70 * (count - min)) / (max - min)
          const color = `hsl(210, ${saturation}%, 40%)`
          return (
            <a
              href={`/tags/${tag}`}
              class="tag"
              style={{ fontSize: `${scale}em`, color }}
            >
              {tag}
            </a>
          )
        })}
      </div>
    )
  }

  return HomeTagList
}) satisfies QuartzComponentConstructor
