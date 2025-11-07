import { QuartzLayout } from "../components/types"
import HomeTagList from "../components/HomeTagList"

const HomeLayout: QuartzLayout = ({ fileData, children }) => {
  return (
    <div class="home-page">
      <article>{children}</article>

      <section class="home-tags">
        <h2>Explorer par tags</h2>
        <HomeTagList />
      </section>
    </div>
  )
}

export default HomeLayout
