import Image from "next/image";
import Title from "../components/Title";
import ContactUs from "../components/ContactUs";
import MapComponent from "../components/Map";

const Contact = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src="/contact.png"
          className="w-screen"
          alt="contact"
          width={2220}
          height={855}
        />
        <div className="absolute w-screen top-1/2">
          <Title heading="Contact Us" />
        </div>
      </div>
      <div className="contact-container my-10 lg:space-x-5 mx-auto w-[95%] lg:flex">
        <div className="form-container w-full lg:w-[50%]">
          <ContactUs />
        </div>
        <div className="map-container w-full lg:w-[50%]">
          <MapComponent />
        </div>
      </div>
    </div>
  );
};

export default Contact;
