// Write your code here
import {Component} from 'react'
import './index.css'

const AppItem = props => {
  const {item, prescat} = props
  const {appId, imageUrl, appName} = item
  return (
    <li className="structure">
      <img src={imageUrl} alt={appName} />

      <p>{appName}</p>
    </li>
  )
}
export default AppItem
