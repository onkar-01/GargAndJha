"use client"
import Title from "./Title";

const FormInput = ({ type, name, placeholder }) => {
  const inputClasses =
    "border-none bg-transparent flex-1 py-2 placeholder-gray-300 outline-none focus:border-[#c08e02]";

  return (
    <div className={`flex items-center  border-b-2 border-[#c08e02]`}>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className={inputClasses}
      />
    </div>
  );
};

const ContactUs = () => {
  const containerClasses = "h-full";
  const formContainerClasses = "contact_form h-full";
  const formWrapperClasses = "p-10 mx-auto rounded h-full";
  const submitButtonClasses =
    "py-3 px-8 bg-[#c08e02] text-[#f1f0eeaa] font-bold rounded";

  return (
    <div className={containerClasses}>
      <Title heading="Connect with us" />
      <div className={formContainerClasses}>
        <div className={formWrapperClasses}>
          <form className="flex flex-col w-full space-y-10" action="">
            <FormInput type="text" name="name" placeholder="Your name" />
            <FormInput
              type="text"
              name="phone"
              placeholder="Your Phone Number"
            />
            <FormInput
              type="email"
              name="email"
              placeholder="Your Email Address"
            />
            <FormInput type="text" name="concern" placeholder="Your Concern" />
            <div className="text-right">
              <button className={submitButtonClasses}>Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
