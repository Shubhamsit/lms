import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import CourseCard from "./CourseCard";

function CoursesSecton() {
  const { allCourses } = useContext(AppContext);

  return (
    <div className="py-16 md:px-40 px-8 flex flex-col items-center">
      <h2 className="text-3xl font-medium text-gray-800 text-center">
        Learn from the best
      </h2>
      <p className="text-sm md:text-base text-gray-500 mt-3">
        Discover our top-rated courses across various categories. From coding
        and design to business and wellness, our courses are crafted to deliver
        results.
      </p>

      <div className="grid md:grid-cols-4 px-4 md:px-0 md:my-16 my-10 gap-4">
        {allCourses.slice(0, 4).map((cour, index) => (
          <CourseCard key={index} course={cour} />
        ))}
      </div>

      <Link
        to={"/course-list"}
        onClick={() => scrollTo(0, 0)}
        className="text-gray-500 border border-gray-500/30 px-10 py-3 rounded "
      >
        Show all courses
      </Link>

      <div></div>
    </div>
  );
}

export default CoursesSecton;
