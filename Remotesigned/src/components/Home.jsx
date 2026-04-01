import React from 'react';
import HeroSection from './HeroSection';
import SocialMedia from './SocialMedia';
import FeaturedWorkouts from './FeaturedWorkouts';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <HeroSection />
      <FeaturedWorkouts />
      <SocialMedia />
    </div>
  );
}
