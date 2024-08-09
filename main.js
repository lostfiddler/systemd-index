import * as cheerio from 'cheerio';

const res = await fetch('https://www.freedesktop.org/software/systemd/man/latest/systemd.directives.html')
const html = await res.text()
const $ = cheerio.load(html)
const $h2 = $('h2')
const headers = [];

for(let i = 0;i < $h2.length;i++) {
    if (i<1) continue;
    headers.push($($h2[i]).text())
}

console.log(headers)
