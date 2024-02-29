import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

import React from "react";

const Courses = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <p className="text-2xl font-bold tracking-tight">Your Courses</p>
      <ScrollArea className="rounded-lg shadow-inner flex justify-center w-full bg-gray-400 ">
        <div className="grid lg:grid-cols-3 xl:grid-cols-6 gap-8 p-10 scroll-w-0 ">
          {Array.from({ length: 51 }).map((_, index) => (
            <Card className="transition hover:shadow-lg hover:cursor-pointer basis-1/3 lg:basis-1/6 ">
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
                    <img className="w-6" src="/assets/google-icon.svg" alt="" />
                    <p className="text-sm">Google</p>
                  </div>
                  <p className="font-semibold pt-4 pb-2">Complete MERN Stack</p>
                  <p className="text-muted-foreground text-xs line-clamp-2">
                    Skils you will gain: Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Iure, consequuntur?
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
      </ScrollArea>
    </div>
  );
};

export default Courses;
