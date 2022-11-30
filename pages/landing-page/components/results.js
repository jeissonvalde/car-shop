// Results
import * as React from 'react'
import assets from '../json/assets'
import Image from '../../../../../shared/components/Image'
import '../styles/results.scss'

export default function (props) {
  let {
    value
  } = props,
  list = undefined

  if (value) {
    list = assets.results[value]
  }


  return (
    <div className='results'>{list ? list.map((r, idx) => {

      return (
        <div key={idx}>
          <Image
            height='210px'
            additionalClass={r.className}
            url={r.url}/>
        </div>
      )
    }) : ''}</div>
  )
}