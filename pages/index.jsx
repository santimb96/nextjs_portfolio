import React from 'react'
import PresentationCard from '../src/components/PresentationCard/PresentationCard'

const Home = () => {
  return (
    <>
      <PresentationCard name='Jorge' especialization='Front' openToWork={true} personalSkills={['React', 'Next', 'Node']} />
    </>
  )
}

export default Home
