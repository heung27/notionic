import Container from '@/components/Container'
import NotePost from '@/components/NotePost'
import { getBlocksMaps } from '@/lib/getBlocksMaps'
import { getPostBlocks, getAllPosts } from '@/lib/notion'

export async function getStaticProps() {
  const { pagesJson, siteConfigObj } = await getBlocksMaps()

  const blocksJson = pagesJson
  // Hide table header and home page on Archive page.
  for (let i = 0; i < blocksJson.length; i++) {
    const deleteTitleBlock = blocksJson[i].title === 'Title' ? blocksJson.splice(i, i + 1) : blocksJson
    const deleteIndexBlock = blocksJson[i].slug === 'index' ? blocksJson.splice(i, i + 1) : blocksJson
    console.log('[INFO] Hide Craft Table Header: ', deleteTitleBlock.length, deleteIndexBlock.length)
  }

  const heros = await getAllPosts({ onlyHidden: true })
  const hero = heros.find((t) => t.slug === 'notes')

  let blockMap
  try {
    blockMap = await getPostBlocks(hero.id)
  } catch (err) {
    console.error(err)
    // return { props: { post: null, blockMap: null } }
  }

  return {
    props: {
      blocksJson,
      siteConfigObj,
      blockMap
    },
    revalidate: 1
  }
}

const Notes = ({ blocksJson, siteConfigObj, blockMap }) => {
  return (
    <Container
      title={siteConfigObj['Site Name']}
      description={siteConfigObj['Site Description']}
      siteConfigObj={siteConfigObj}
    >
    </Container>
  )
}

export default Notes
