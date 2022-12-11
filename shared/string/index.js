import texts from './values'
export default function (txt, lang) {
  if (!txt || txt == '') return 'NO_THERE_IS_TEXT!'
  if (!lang) lang = window.lang ? window.lang : 'spa'

  for (let i = 0; i < texts.length; i++) {
    const t = texts[i]
    // if (!lang && t.id === txt) return t.spa
    if (t.id === txt) return t[lang]
  }
}