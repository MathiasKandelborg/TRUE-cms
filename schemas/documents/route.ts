/** @format */

import { MdLink } from 'react-icons/md'

export default {
  name: 'route',
  type: 'document',
  title: 'Route',
  icon: MdLink,
  fields: [
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug'
    },
    {
      name: 'includeInSitemap',
      type: 'boolean',
      title: 'Include page in sitemap',
      description: 'For search engines. Will be added to /sitemap.xml'
    },
    {
      name: 'disallowRobots',
      type: 'boolean',
      title: 'Disallow in robots.txt',
      description: 'Hide this route for search engines'
    },
    {
      name: 'page',
      type: 'object',
      fieldsets: [
        {
          title: 'SEO & metadata',
          name: 'metadata'
        }
      ],
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title'
        },
        {
          name: 'content',
          type: 'array',
          title: 'Page sections',
          of: [
            { type: 'hero' },
            { type: 'imageSection' },
            { type: 'textSection' }
          ]
        },
        {
          name: 'description',
          type: 'text',
          title: 'Description',
          description: 'This description populates meta-tags on the webpage',
          fieldset: 'metadata'
        },
        {
          name: 'openGraphImage',
          type: 'image',
          title: 'Open Graph Image',
          description: 'Image for sharing previews on Facebook, Twitter etc.',
          fieldset: 'metadata'
        }
      ]
    }
  ],
  preview: {
    select: {
      slug: 'slug.current',
      pageTitle: 'page.title'
    },
    prepare({ slug, pageTitle }) {
      return {
        title: slug === '/' ? '/' : `/${slug}`,
        subtitle: `Page: ${pageTitle}`
      }
    }
  }
}
