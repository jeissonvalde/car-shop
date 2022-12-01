// import routes from './routes'
// import dom from '../../shared/controllers/dom'
// import './styles/main.scss'
// import * as ReactDOM from 'react-dom'




import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.scss';
import App from './pages/home';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('app-container'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();






/*
export default {
  // routes,
  name: 'Landing page 1',
  shortName: 'landing page car',
  id: 'a8y9s8v-h9a8sdvm0h-a93219j2',
  state: 'development',
  noEditable: true,
  preview: {
    style: 'width: 100%;',
    wrap: {
      style: 'width: 400px; height: 190px'
    }
  },
  dependencies: function (opts) {
    // Bootstrap
    let body = dom.getn('body')[0],
      head = dom.getn('head')[0],
      scriptA = dom.ce({ tagName: 'script' }),
      LinkA = dom.ce({ tagName: 'script' })

    // Bootstrap
    scriptA.setAttribute('src', 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js')
    scriptA.setAttribute('integrity', 'sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p')
    scriptA.setAttribute('crossorigin', 'anonymous')
    LinkA.setAttribute('href', 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css')
    LinkA.setAttribute('rel', 'stylesheet')
    LinkA.setAttribute('integrity', 'sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3')
    LinkA.setAttribute('crossorigin', 'anonymous')

    head.append(LinkA)
    body.append(scriptA)
  }
}
*/