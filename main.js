import * as cheerio from 'cheerio';

const res = await fetch('https://www.freedesktop.org/software/systemd/man/latest/systemd.directives.html')
const html = await res.text()
const $ = cheerio.load(html)

console.log($)
