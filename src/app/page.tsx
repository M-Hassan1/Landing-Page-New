import BrowsReviews from "@/components/view/BrowsReviews";
// import ProductCarousel from "@/components/view/BrowsReviews/ReviewCarousel";
import Category from "@/components/view/Category/Category";
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
      {/* <ProductCarousel />    */}
    </div>
  )
}
