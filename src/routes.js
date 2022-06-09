// https://vaadin.com/learn/tutorials/vaadin-router
export const ROUTING_TABLE = [
  {
    path: '/',
    component: 'view-lines',
    action: async () => {
      await import('./views/view-lines')
    },
  },
]
