import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

const tabs = [
  {
    title: "Web Development",
    value: "webdevelopment",
  },
  {
    title: "Artificial Intelligence",
    value: "ai",
  },
  {
    title: "Blockchain",
    value: "blockchain",
  },
  {
    title: "System Design",
    value: "systemdesign",
  },
];

const Explore = () => {
  return (
    <div className="max-w-[1400px] w-full flex flex-col">
      <div className="p-8 pb-4">
        <p className="text-3xl font-semibold ">
          Explore our course and enroll yourself today
        </p>
        <p>Browse our top categories</p>
      </div>

      <Tabs
        defaultValue="webdevelopment"
        className="max-w-[1400px] w-full p-8 pt-0"
      >
        <TabsList className="flex flex-col h-full md:inline-block  ">
          {tabs.map((tab) => (
            <TabsTrigger value={tab.value}>{tab.title}</TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="webdevelopment">
          <div className="flex flex-col border p-4 space-y-4 rounded-md ">
            <p className="text-lg">Explore Web Development Courses</p>

            <div className="flex justify-center">
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full max-w-7xl"
              >
                <CarouselContent>
                  {Array.from({ length: 10 }).map((_, index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/2 lg:basis-1/4"
                    >
                      <div className="p-1">
                        <Card className="transition hover:shadow-lg hover:cursor-pointer">
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
                                consectetur adipisicing elit. Iure,
                                consequuntur?
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
                                Beginner &nbsp; <span className=""> | </span>{" "}
                                &nbsp; 6 months
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="lg:flex hidden" />
                <CarouselNext className="lg:flex hidden" />
              </Carousel>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>

      <div className="w-full flex justify-center">
        <Button variant="outline">Explore more</Button>
      </div>
    </div>
  );
};

export default Explore;
