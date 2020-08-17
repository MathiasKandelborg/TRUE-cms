/** @format */

export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MathiasKandelborg/TRUE',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'true-framework.placeholder',
            category: 'apps'
          }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: {
        title: 'Recently edited',
        order: '_updatedAt desc',
        limit: 10,
        types: ['page']
      },
      layout: { width: 'medium' }
    }
  ]
}
