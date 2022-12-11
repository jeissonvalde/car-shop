// Home page
import * as React from 'react'
import Main from './components/main'
import Results from './components/results'
import assets from './json/assets'
import controllers from './handles'
import './styles/home.scss'


export default class Home extends React.Component {
  state = {
    trademarks: assets.trademarks,
    search: undefined
  }

  _selectTrademark = controllers.assets.selectTrademark.bind(this)

  render() {
    return (
      <div className='landing-wrap' style={{backgroundImage: `url(${assets.backgroundImage})`}}>
        <Main
          handleSelectTrademark={this._selectTrademark}/>
        <Results
          value={this.state.search}/>
      </div>
    )
  }
}