import React from 'react'
import ArtMenu from '../components/ArtMenu';
import Banner from '../components/Banner';
import Header from '../components/Header'
import TopArtists from '../components/TopArtists';

function Home() {
  return (
    <div>
        <Header />
        <ArtMenu />
        <TopArtists />
        <Banner />
    </div>
  )
}

export default Home