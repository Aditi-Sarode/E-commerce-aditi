import React from 'react';
import MainCarousel from '../../components/HomeCarousel/MainCarousel';
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel';
import HomeSectionCard from '../../components/HomeSectionCard/HomeSectionCard'; // Correct import path
import { mens_kurta } from '../../../Data/mens_kurta';

const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Mens Kurta"}/> {/* Rendering HomeSectionCard */}
        <HomeSectionCarousel data={mens_kurta} sectionName={"Mens Shoes"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Mens Shirts"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Womens Sarees"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Womens Dress"}/> 
      </div>
    </div>
  );
};

export default HomePage;
