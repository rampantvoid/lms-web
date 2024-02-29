import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ViewCourse = () => {
  return (
    <div className="flex flex-col min-h-dvh w-full">
      <div className="flex w-full xl:max-h-[50vh]">
        <div className="lg:w-1/2 bg-red-300 flex flex-col lg:p-36 py-20 px-14">
          <img src="/assets/IBM.png" alt="" className="w-20" />
          <p className="text-3xl font-semibold py-4">Some fancy Course Name</p>
          <p className="font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            incidunt a repellendus magnam reiciendis dicta totam dolores natus
            quasi nihil sapiente asperiores maxime voluptatum, facere quam harum
            dolorem veritatis molestias.
          </p>
          <p className="py-4">Instructor: Some Instructor name</p>

          <Button className="xl:w-1/4 flex flex-col py-8 mt-8">
            <p className="text-bold">Enroll</p>
            <p className="font-light">Starts Feb 15</p>
          </Button>
          <p className="font-semibold py-4">12,000 already enrolled</p>
        </div>
        <img
          src="/assets/authImg.jpg"
          alt=""
          className="w-1/2 object-cover lg:block hidden"
        />
      </div>

      <div className="p-8 min-h-[50vh] lg:px-36 ">
        <p className="font-bold text-2xl">What you get in this course?</p>
        <Accordion type="multiple" className="lg:w-1/2">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default ViewCourse;
