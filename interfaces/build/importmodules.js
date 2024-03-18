"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const modulos_1 = __importDefault(require("./modulos"));
const modulos_2 = require("./modulos");
const lang = new modulos_1.default('Java');
(0, modulos_2.impressao)('A melhor linguagem de prog é? Resp: ' + lang.nome);
console.log(lang);
console.log(modulos_2.nomes);
