import assets from "../json/assets"

function focus (e) {
  let target = e.target,
  searchContainer = document.getElementsByClassName('l-search-inp')[0]

  searchContainer.classList.add('active')
}

function blur (e) {
  let target = e.target,
    metaValue = target.getAttribute('data-val'),
    searchContainer = document.getElementsByClassName('l-search-inp')[0]

  metaValue == null
    ? searchContainer.classList.remove('active')
    : undefined
}

function keyDown (e) {
  let val = e.target.value

  if (e.key == 'Enter') {
    console.log('%c Go to search ' + val, 'color: #60ffb5; padding: 20px; border-radius: 6px; background: #000068;')
    e.preventDefault()
  }
}

function change (e) {
  let val = String(e.target.value).toLocaleLowerCase()
  let result = []

  assets.trademarks.map(t => {
    if (String(t.label).toLocaleLowerCase().includes(val)) result.push(t)
  })

  this.setState({ trademarks: result })
}

function goSearch (handleSelectTrademark, e) {
  let inp = document.getElementsByClassName('l-search-inp')[0],
    texts = document.getElementsByClassName('title-a')[0],
    loginForm = document.getElementsByClassName('l-sign-in')[0],
    btnGoSearch = document.getElementById('btn-search'),
    btnClean = document.getElementById('btn-clean')
  inp = inp.getElementsByTagName('input')[0]

  console.log('%c Go to search ' + inp.value, 'color: #60ffb5; padding: 20px; border-radius: 6px; background: #000068;')
  texts.classList.add('move')
  loginForm.classList.add('move')
  btnGoSearch.style.display = 'none'
  btnClean.style.display = 'block'
  handleSelectTrademark(inp.value)
}

function cleanSearch (handleSelectTrademark, e) {
  let inp = document.getElementsByClassName('l-search-inp')[0],
    texts = document.getElementsByClassName('title-a')[0],
    loginForm = document.getElementsByClassName('l-sign-in')[0],
    btnGoSearch = document.getElementById('btn-search'),
    btnClean = document.getElementById('btn-clean')
  inp = inp.getElementsByTagName('input')[0]

  // console.log('%c Go to search ' + inp.value, 'color: #60ffb5; padding: 20px; border-radius: 6px; background: #000068;')
  texts.classList.remove('move')
  loginForm.classList.remove('move')
  btnGoSearch.style.display = 'block'
  btnClean.style.display = 'none'
  inp.value = ''
  handleSelectTrademark(null)
}

function selectFromHistory (handleSelectTrademark, e) {
  let target = e.target,
    inp = document.getElementsByClassName('l-search-inp')[0],
    searchContainer = document.getElementsByClassName('l-search-inp')[0],
    texts = document.getElementsByClassName('title-a')[0],
    loginForm = document.getElementsByClassName('l-sign-in')[0],
    btnClean = document.getElementById('btn-clean'),
    btnGoSearch = document.getElementById('btn-search')

  inp = inp.getElementsByTagName('input')[0]
    
  inp.value = target.getAttribute('data-val')
  searchContainer.classList.remove('active')
  texts.classList.add('move')
  loginForm.classList.add('move')
  btnGoSearch.style.display = 'none'
  btnClean.style.display = 'block'
  handleSelectTrademark(target.getAttribute('data-val'))
}

function selectFromSuggestion (handleSelectTrademark, e) {
  let target = e.target,
    inp = document.getElementsByClassName('l-search-inp')[0],
    searchContainer = document.getElementsByClassName('l-search-inp')[0],
    texts = document.getElementsByClassName('title-a')[0],
    loginForm = document.getElementsByClassName('l-sign-in')[0],
    btnClean = document.getElementById('btn-clean'),
    btnGoSearch = document.getElementById('btn-search')

  inp = inp.getElementsByTagName('input')[0]

  inp.value = target.getAttribute('data-val')
  searchContainer.classList.remove('active')
  texts.classList.add('move')
  loginForm.classList.add('move')
  btnGoSearch.style.display = 'none'
  btnClean.style.display = 'block'
  handleSelectTrademark(target.getAttribute('data-val'))
}


export default {
  focus,
  blur,
  change,
  keyDown,
  goSearch,
  cleanSearch,
  selectFromHistory,
  selectFromSuggestion,
}