import React from 'react'
import '../style/components/HeaderOptions.css'
import { Avatar } from '@material-ui/core'

function HeaderOptions({avatar, Icon, title}) {
  return (
    <div className="headerOptions">
        {Icon && <Icon className='headerOptions_icon' />}
        {avatar && (
          <Avatar className='headerOptions_icon' src={avatar} />
        )}
        <text className='headerOptions_title'>{title}</text>
    </div>
  )
}

export default HeaderOptions