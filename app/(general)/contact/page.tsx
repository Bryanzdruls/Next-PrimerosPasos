import type { Metadata } from "next";


export const metadata: Metadata = {
 title: 'SEO Contact',
 description: 'SEO Description',
 keywords: ['Contact Page', 'Brian', 'Morcilla']
};

const ContactPage = () => {
  return (
    <>
        <span className="text-5xl">Contact page</span>      
    </>
  )
}

export default ContactPage
