import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";

const Testimonial = () => {
  return (
    <div className="w-full flex flex-col bg-[#c9def4] mt-10 items-center p-8">
      <p className="text-3xl font-bold text-center">Hear from our community</p>
      <p className="text-center">100k+ people have already joined us</p>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-5xl mt-10"
      >
        <CarouselContent>
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 lg:pl-[100px] "
            >
              <div className="p-1 flex flex-col items-center">
                <img
                  className="rounded-full"
                  src="/assets/authImg.jpg"
                  alt=""
                />
                <p className="font-bold capitalize text-lg">Author Name</p>
                <p className="text-muted-foreground">Designation</p>
                <p className="h-[2px] bg-black w-1/3 mt-3"></p>
                <p className="mt-4 text-center">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  ducimus eaque iure maxime, tempore ipsam dolores distinctio!"
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="lg:flex hidden" />
        <CarouselNext className="lg:flex hidden" />
      </Carousel>
    </div>
  );
};

export default Testimonial;
