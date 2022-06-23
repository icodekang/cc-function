const path = require('path');
const fs = require('fs-extra');
const SitemapGenerator = require('sitemap-generator');

const xmlFile = path.join(process.cwd(), '.deploy/sitemap.xml')
const generator = SitemapGenerator('http://192.168.3.10:9666', {
  maxDepth: 0,
  filepath: xmlFile,
  maxEntriesPerFile: 50000,
  stripQuerystring: true,
  decodeResponses: true,
});

// register event listeners
generator.on('done', async () => {
  const str = await fs.readFileSync(xmlFile);
  const newStr = str.toString().replace(/http\:\/\/192\.168\.3\.10\:9666/g, 'http://47.111.166.42:9666');
  await fs.outputFile(xmlFile, newStr);
  console.log('sitemaps created!')
});

// start the crawler
generator.start();