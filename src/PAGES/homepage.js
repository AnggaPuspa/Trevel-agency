import React from 'react';
import TravelNavbar from '../components/navbar';
import Header from '../components/header'; // Pastikan nama file sesuai dengan casing yang digunakan di sini
import HeaderFoto from '../components/HeadeFoto'; // Ganti nama file menjadi HeaderFoto dan pastikan casing sesuai
import AboutUs from '../components/aboutUs'; // Ganti nama file menjadi AboutUs dan pastikan casing sesuai
import VacationComponent from '../components/VacationComponent'; 
import WhyChooseUs from '../components/WhyChooseUs';
import VideoSlider from '../components/VideoSlider';
function HomePage() {
  return (
    <div>
      <TravelNavbar />
      <Header /> 
      <HeaderFoto /> {/* Menggunakan nama yang sesuai dengan file HeaderFoto */}
      <AboutUs /> {/* Menggunakan nama yang sesuai dengan file AboutUs */}
      <VacationComponent /> 
      <WhyChooseUs />
    
    </div>
  );
}

export default HomePage;
