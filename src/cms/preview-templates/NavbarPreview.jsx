import React from 'react'
import Navbar from '../../components/Navbar'

const NavbarPreview = ({ entry }) => (
  <Navbar
    cover={entry.getIn(['data', 'cover'])}
    title={entry.getIn(['data', 'title'])}
    intro={entry.getIn(['data', 'intro'])}
  />
)

export default NavbarPreview
