"use client";
import { Slide } from "react-awesome-reveal";
import Image from "next/image";

const MidSection = ({ image }) => {
  return (
    <div className="flex flex-col lg:flex-row w-[90%] lg:w-[80%] mx-auto my-10">
      <div className="image lg:w-[50%] md:p-10 p-4">
        <Slide direction="right">
          <Image
            src={image}
            alt=""
            className="rounded-tl-[50px]  rounded-br-[50px] mx-auto"
            width={500}
            height={500}
          />
        </Slide>
      </div>
      <div className="content lg:w-[50%] md:p-10">
        <Slide direction="left">
          <p className="text-[18px] text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
            sapiente recusandae labore consectetur eos est ex fugiat consequatur
            voluptatem expedita, delectus ipsa totam ut doloremque mollitia vero
            soluta voluptas eveniet necessitatibus accusamus. Perferendis magni
            molestias illo, harum fuga voluptates laboriosam. Placeat recusandae
            numquam alias ipsum sit labore possimus nulla vitae ducimus eligendi
            quam ut enim, laudantium quae tenetur aliquid minus porro. Quidem
            sapiente modi qui distinctio, architecto quia temporibus velit unde
            suscipit magnam necessitatibus exercitationem eum saepe aut.
            Sapiente ad nulla at quisquam officiis ducimus eligendi dolore quas
            maxime! Fuga quibusdam reprehenderit voluptatem cupiditate quidem
            quis quaerat doloribus, nesciunt fugit!
          </p>
        </Slide>
      </div>
    </div>
  );
};

export default MidSection;
