/** @format */

export default function resolveProductionUrl(document: unknown) {
  const SANITY_PREVIEW_SECRET = 's12fgdhUdjghdyfu7jdfgxbdr6rd'

  const projectUrl =
    process.env.NODE_ENV !== 'production'
      ? 'http://localhost:3000'
      : process.env.SANITY_STUDIO_PROJECT_URL

  console.log(document)
  if (document && document.content) {
    console.info(`It's a PAGE: ${JSON.stringify(document, null, 2)}`)
    console.info("And it's not implemented yet")

    return
  }
  if (document && document.page) {
    console.info(`It's a ROUTE: ${JSON.stringify(document, null, 2)}`)

    return `${projectUrl}/api/preview?secret=${SANITY_PREVIEW_SECRET}&page=${document.slug.current}`
  }
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
}
