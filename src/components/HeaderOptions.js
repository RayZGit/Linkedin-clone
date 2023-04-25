import React from 'react'
import '../style/components/HeaderOptions.css'

function HeaderOptions({Icon, title}) {
  return (
    <div className="headerOptions">
        {Icon && <Icon className='headerOptions_icon' />}
        <text className='headerOptions_title'>{title}</text>
    </div>
  )
}

export default HeaderOptions