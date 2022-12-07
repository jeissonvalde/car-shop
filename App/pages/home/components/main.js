import * as React from 'react'
import assets from '../json/assets'
import handles from '../handles'
import shared from '../../../../shared'
import propTypes from 'prop-types'



class Main extends React.Component {
  state = {
    trademarks: assets.trademarks,
  }

  _change = handles.events.change.bind(this)
  _goSearch = handles.events.goSearch.bind(this)
  _cleanSearch = handles.events.cleanSearch.bind(this)

  render() {
    const {
      imageURL,
      handleSelectTrademark
    } = this.props
  
    return (
      <div className='main-landing'>

        {/* Messages */}
        <div className='title-a'>
          {shared.string('title_home_page')}
          {assets.messages.map((m, kdx) => {

            return (
              <span style={{'--i': `${kdx}`}} key={kdx}>{m}</span>
            )
          })}
        </div>
        <div className='wrap' onClick={handles.events.blur}>
          <div className='l-search-inp'>
            <div className='field'>
              <div className='input'>
                <input
                  data-val={true}
                  onFocus={handles.events.focus}
                  // onBlur={handles.events.blur}
                  onChange={this._change}
                  onKeyDown={handles.events.keyDown}
                  placeholder={shared.string('placeholder_search_input')} />
                <div className='s-icon'>
                  <ion-icon id="btn-search" onClick={this._goSearch.bind(null, handleSelectTrademark)} name="search-outline"></ion-icon>
                  <ion-icon id="btn-clean" onClick={this._cleanSearch.bind(null, handleSelectTrademark)} name="close-outline"></ion-icon>
                </div>
              </div>
            </div>
            
            <div className='results'>
              <div className='results-list'>
                {this.state.trademarks.map((t, idx) => {

                  return (
                    <div
                      className='button-autocomp'
                      onClick={handles.events.selectFromHistory.bind(null, handleSelectTrademark)}
                      data-val={t.label}
                      key={idx}>{t.label} <ion-icon name="arrow-up-outline"></ion-icon></div>
                  )
                })}
              </div>
              <div className='suggestions'>
                <div className='divide'></div>
                {shared.string('text_suggestions')}
                {assets.suggestions.map((s, jdx) => {

                  return (
                    <div
                      data-val={s.label}
                      onClick={handles.events.selectFromSuggestion.bind(null, handleSelectTrademark)}
                      key={jdx}>{s.label}</div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className='l-sign-in'>
            <span className='title-b'>
              Log in
            </span>
            <div className="field">
              <span>E-mail</span>
              <input placeholder='E-mail' />
            </div>
            <div className="field">
              <span>Password</span>
              <input placeholder='Password' />
            </div>
            <div className="field">
              <div id='btn-send'>Send</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


// Prop. types
Main.propTypes = {
  imageURL: propTypes.string,
  handleSelectTrademark: propTypes.func
}

export default Main