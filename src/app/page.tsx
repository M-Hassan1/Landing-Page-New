import BrowsReviews from "@/components/view/BrowsReviews";
import Category from "@/components/view/Category/Category";
import LatestInternships from "@/components/view/InternShips";
import CoursesOffer from "@/components/view/WhatWeOffer";


export default function Home() {
  return (

    <div>
      <Category />
      <LatestInternships />
      <CoursesOffer />
      <BrowsReviews />
    </div>
  )
}
