// Write your code here
import {Component} from 'react'
import './index.css'

const TabItem = props => {
  const {item, text, pres, onc} = props
  const {tabId, displayText} = item
  const c = () => {
    onc(tabId)
    console.log(tabId)
  }
  const k = pres === tabId ? 'cast' : ''
  return (
    <li className={`ite ${k}`}>
      <button type="button" onClick={c} className={`${k}`}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
