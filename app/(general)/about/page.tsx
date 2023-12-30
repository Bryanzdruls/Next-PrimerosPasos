import React from 'react'

import type { Metadata } from "next";


export const metadata: Metadata = {
 title: 'SEO About',
 description: 'SEO Description',
 keywords: ['About Page', 'Brian', 'Morcilla']
};


const AboutPage = () => {
  return (
    <>
        <span className="text-5xl">About page</span>      
    </>
  )
}

export default AboutPage
