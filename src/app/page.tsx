import BrowsReviews from "@/components/view/BrowsReviews";
import Category from "@/components/view/Category/Category";
import Footer from "@/components/view/Footer/FooterFile/Footer";
import HomePage from "@/components/view/HeroSection";
import LatestInternships from "@/components/view/InternShips";
import NavBar from "@/components/view/Navabar";
import CoursesOffer from "@/components/view/WhatWeOffer";


export default function Home() {
  return (

    <div>
      <NavBar />
      <HomePage />
      <Category />
      <LatestInternships />
      <CoursesOffer />
      <BrowsReviews />
    <Footer />
      
    </div>
  )
}
