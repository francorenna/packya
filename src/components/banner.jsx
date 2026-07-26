import React from 'react'
import './banner.css'
import bannerImg from '../assets/branding/bannerarreglado.png'

export default function Banner() {
  return (
    <div className="site-banner" role="img" aria-label="Packya banner">
      <img src={bannerImg} alt="Packya" className="site-banner__img" />
      <div className="site-banner__overlay" />
    </div>
  )
}
