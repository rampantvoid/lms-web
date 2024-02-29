import Pagination from "@/components/Pagination";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const Browse = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage] = useState(12);

  const courses = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28,
  ];

  //  get current post
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourse = courses.slice(indexOfFirstCourse, indexOfLastCourse);

  const paginate = (number: any) => setCurrentPage(number);
  return (
    <div className="flex flex-col py-20 mx-[0px] lg:mx-[10vw] min-h-dvh">
      <div className="flex w-full p-10">
        {/* TODO:Build filter */}
        {/* filters */}
        <div className="flex-col w-1/5 hidden lg:flex">
          <p className="font-semibold text-lg">Filter By</p>
        </div>

        {/* courses */}
        <div className="flex flex-col flex-1  md:px-10">
          <p className="text-2xl font-bold">30K results for "cs"</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 p-5 md:p-10 scroll-w-0 ">
            {currentCourse.map((_) => (
              <Card className="transition hover:shadow-lg hover:cursor-pointer max-w-[300px]">
                <CardContent className="flex flex-col items-center p-0 rounded-md">
                  <div className="w-full h-[250px]">
                    <img
                      className="rounded-t-md object-cover w-full h-full"
                      src="/assets/authImg.jpg"
                      alt=""
                    />
                  </div>
                  <div className="w-full p-4 pt-2">
                    <div className="flex items-center gap-2">
                      <img
                        className="w-6"
                        src="/assets/google-icon.svg"
                        alt=""
                      />
                      <p className="text-sm">Google</p>
                    </div>
                    <p className="font-semibold pt-4 pb-2">
                      Complete MERN Stack
                    </p>
                    <p className="text-muted-foreground text-xs line-clamp-2">
                      Skils you will gain: Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Iure, consequuntur?
                    </p>
                    <div className="flex gap-1 pt-2">
                      <img
                        className="w-5 object-contain"
                        src="/assets/star.png"
                        alt=""
                      />
                      <p>4.3</p>
                    </div>
                    <p className="text-muted-foreground text-xs pt-2">
                      Beginner &nbsp; <span className=""> | </span> &nbsp; 6
                      months
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            coursesPerPage={coursesPerPage}
            totalCourses={courses.length}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
};

export default Browse;
