import React from 'react'
import Navbar from '../../components/Navbar'

const NavbarPreview = ({ entry }) => (
  <Navbar
    appCover={'https://sfpr.netlify.app/img/app-cover.jpg'}
    title={entry.getIn(['data', 'title'])}
    intro={entry.getIn(['data', 'intro'])}
    isHome={true}
  />
)

export default NavbarPreview
