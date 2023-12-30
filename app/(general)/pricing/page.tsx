import type { Metadata } from "next";


export const metadata: Metadata = {
 title: 'SEO Pricing',
 description: 'SEO Description',
 keywords: ['Pricing Page', 'Brian', 'Morcilla']
};


const PricingPage = () => {
  return (
    <>
      <span className="text-5xl">Pricing Page</span>
    </>
  )
}

export default PricingPage
