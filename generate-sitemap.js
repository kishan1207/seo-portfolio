const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

// Define your routes here, including hash links
const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/#section-home', changefreq: 'daily', priority: 0.9 },
    { url: '/#section-education', changefreq: 'weekly', priority: 0.8 },
    { url: '/#section-skills', changefreq: 'weekly', priority: 0.8 },
    { url: '/#section-experience', changefreq: 'weekly', priority: 0.8 },
    { url: '/#section-projects', changefreq: 'monthly', priority: 0.7 },
    { url: '/#section-contact', changefreq: 'monthly', priority: 0.7 },
];

async function generateSitemap() {
    const stream = new SitemapStream({ hostname: 'https://chandni-dave.web.app/' });
    const sitemap = await streamToPromise(Readable.from(links).pipe(stream)).then((data) => data.toString());

    fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemap);
}

generateSitemap().catch((error) => {
    console.error(error);
    process.exit(1);
});
