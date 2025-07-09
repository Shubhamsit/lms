import React from "react";
import Hero from "../../components/student/Hero";
import SearchBar from "../../components/student/SearchBar";
import Companies from "../../components/student/Companies";
import CourseCard from "../../components/student/CourseCard";
import CoursesSecton from "../../components/student/CoursesSection";

import TestinomialsSection from "../../components/student/TestinomialsSection";
import CallToAction from "../../components/student/CallToAction";
import Footer from "../../components/student/Footer";

function Home() {
  return (
    <div className="flex flex-col items-center space-y-7">
      <Hero />
      <SearchBar />
      <Companies />
      <CoursesSecton />
      <TestinomialsSection />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default Home;
