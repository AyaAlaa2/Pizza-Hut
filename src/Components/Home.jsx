import React from 'react'
import HeroPage from './HeroPage'
import MenuCategories from './MenuCategories'
import PopularDeals from './PopularDeals'

export default function Home() {
    return (
        <>
          <HeroPage />
          <MenuCategories />
          <PopularDeals />
        </>
    )
}
