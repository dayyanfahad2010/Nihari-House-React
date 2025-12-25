import React from 'react'
import { HashLink } from 'react-router-hash-link';
const Header = () => {
  return (
    <div className='header'>
      <HashLink smooth to="/#nihari" className='links'>Nihari</HashLink>
      <HashLink smooth to="/#haleem" className='links'>Haleem</HashLink>
      <HashLink smooth to="/#biryani" className='links'>Biryani/Pulao</HashLink>
      <HashLink smooth to="/#nan" className='links'>Nan</HashLink>
    </div>
  )
}

export default Header