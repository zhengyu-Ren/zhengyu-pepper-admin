import {pack as Lp} from "./pack"
import {getQuery} from "../utils/coreTools"

let ars = [
    'zh-CN',
    'ye-LO'
]

let lang = ''

let sysLanguage = localStorage.langCode || navigator.language


if(!sysLanguage) {
    sysLanguage = "zh-CN"
}

lang = sysLanguage

const langType = lang.replace("-","").toLowerCase()
const defaultPack = Lp["zhcn"];
const lp = Lp[langType] || defaultPack;

const _lang = {
    type: lang,

    init: function () {
        //获取选择器
		const html = document.querySelector("html");
		const body = document.querySelector("body");
        //html 添加 lang="zh-CN" 属性
		html.setAttribute("lang", lang);
        // body 添加类名
		body.classList.add(langType);
        //改变文本方向（阿拉伯）
		// lang.match(/^ar/gi) &&
		// html.setAttribute("dir", "rtl") &&
		// html.classList.add("rtl");

		return this;
	},

    template: function(Str) {
        let tpl = Lp[Str] || defaultPack[Str] || Str
        if(typeof tpl !== "string") {
            return tpl
        } else if(tpl === "nbsp;") {
            return ""
        } else {
            return Str
        }
    }
}

const sysLang = _lang.init()

export default sysLang