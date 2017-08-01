const { AppServerModuleNgFactory } = require('./main.c86b031d2c0a09ba2c12.bundle.js');
import { enableProdMode } from '@angular/core';
import { renderModuleFactory } from '@angular/platform-server';
import 'zone.js/dist/zone-node.js';
import * as fs from 'fs';

enableProdMode();

const document = fs.readFileSync(__dirname + '/index.html', 'utf8');
const url = '/';

async function renderHtml(opts: { document: string; url: string }) {
  const html = await renderModuleFactory(AppServerModuleNgFactory, opts);
  return html;
}

renderHtml({ document, url }).then(html => {
  console.log(html);
});
