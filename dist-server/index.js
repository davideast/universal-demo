"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_server_1 = require("@angular/platform-server");
require("zone.js/dist/zone-node.js");
const fs = require("fs");
core_1.enableProdMode();
const document = fs.readFileSync(__dirname + '/index.html', 'utf8');
const url = '/';
const { AppServerModuleNgFactory } = require('./main.bundle.js');
function renderHtml(opts) {
    return __awaiter(this, void 0, void 0, function* () {
        const html = yield platform_server_1.renderModuleFactory(AppServerModuleNgFactory, opts);
        return html;
    });
}
renderHtml({ document, url }).then(html => {
    console.log(html);
});
