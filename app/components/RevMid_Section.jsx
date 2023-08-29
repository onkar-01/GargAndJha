"use client";
import Image from "next/image";

const RevMid_Section = ({ content, image }) => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row flex-2 w-[90%] sm:w-[80%] mx-auto my-10">
        <div className="content md:w-[50%] md:p-10">
          <>
            <p className="text-[18px] text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              minus laborum adipisci iure ducimus, enim reiciendis ab sed
              nesciunt tempore vero, doloremque quod sit culpa perferendis
              recusandae at? Tempore quod adipisci in impedit animi, commodi
              nisi excepturi molestiae doloremque odit unde vel corporis
              blanditiis non illo veniam quidem accusantium at tenetur magni
              fugiat deleniti assumenda quae. Perspiciatis consectetur quod iure
              deserunt sapiente dicta numquam, nesciunt eius, est nisi officiis
              incidunt cumque aspernatur ipsa fugit saepe cum aut magnam in
              quaerat! Autem odio quidem rerum facilis ea aut excepturi ex,
              voluptates, ad neque veritatis ipsam impedit. Beatae voluptatem
              error quas quos. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Voluptas laboriosam sequi nesciunt maiores.
              Dicta odit nostrum asperiores architecto, amet, numquam facere
              libero quae, vel natus voluptate consequatur exercitationem
              laboriosam temporibus commodi impedit? Excepturi, iure! Quaerat
              rem nulla quibusdam debitis voluptas, ratione recusandae nam
              labore unde aliquid illum consequuntur repellendus repellat.{" "}
            </p>
          </>
        </div>
        <div className="image md:w-[50%] md:p-10 p-4 ">
          <>
            <Image
              src={image}
              alt=""
              className="rounded-tr-[50px]   rounded-bl-[50px] mx-auto"
              width={500}
              height={500}
            />
          </>
        </div>
      </div>
    </div>
  );
};

export default RevMid_Section;
