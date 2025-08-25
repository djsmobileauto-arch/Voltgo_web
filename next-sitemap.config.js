/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://voltgo.us',  // dominio principal
  generateRobotsTxt: true,       // genera automáticamente robots.txt
  sitemapSize: 5000,             // divide sitemap si supera este número de URLs
  changefreq: 'weekly',          // frecuencia sugerida para indexación
  priority: 0.7,                 // prioridad por defecto
  exclude: ['/404', '/500'],     // excluye páginas de error
};
