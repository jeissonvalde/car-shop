import * as React from 'react'
import assets from '../json/assets'
import controllers from '../handles'
import propTypes from 'prop-types'



class Main extends React.Component {
  state = {
    trademarks: assets.trademarks,
  }

  _change = controllers.events.change.bind(this)
  _goSearch = controllers.events.goSearch.bind(this)
  _cleanSearch = controllers.events.cleanSearch.bind(this)

  render() {
    const {
      imageURL,
      handleSelectTrademark
    } = this.props
  
    return (
      <div className='main-landing'>

        {/* Messages */}
        <div className='title-a'>
          Find a wide variety of cars with their characteristics and classifieds.
          {assets.messages.map((m, kdx) => {
  
            return (
              <span style={{'--i': `${kdx}`}} key={kdx}>{m}</span>
            )
          })}
        </div>
        <div className='wrap' onClick={controllers.events.blur}>
          <div className='l-search-inp'>
            <div className='field'>
              <input
                data-val={true}
                onFocus={controllers.events.focus}
                // onBlur={controllers.events.blur}
                onChange={this._change}
                onKeyDown={controllers.events.keyDown}
                placeholder='Buscar renault' />
              <div className='s-icon'>
                <ion-icon id="btn-search" onClick={this._goSearch.bind(null, handleSelectTrademark)} name="search-outline"></ion-icon>
                <ion-icon id="btn-clean" onClick={this._cleanSearch.bind(null, handleSelectTrademark)} name="close-outline"></ion-icon>
              </div>
            </div>
            
            <div className='results'>
              <div className='results-list'>
                {this.state.trademarks.map((t, idx) => {

                  return (
                    <div
                      onClick={controllers.events.selectFromHistory.bind(null, handleSelectTrademark)}
                      data-val={t.label}
                      key={idx}>{t.label} <ion-icon name="return-up-back-outline"></ion-icon></div>
                  )
                })}
              </div>
              <div className='suggestions'>
                <div className='divide'></div>
                You may also be interested in 
                {assets.suggestions.map((s, jdx) => {
  
                  return (
                    <div
                      data-val={s.label}
                      onClick={controllers.events.selectFromSuggestion.bind(null, handleSelectTrademark)}
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