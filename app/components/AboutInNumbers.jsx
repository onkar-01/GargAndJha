"use client";
import NumberAnimation from "./NumberAnimation";

const AboutNumbers = ({ heading, state }) => {
  const numberContainerClasses = `number text-[#c08e02] flex flex-col`;

  return (
    <div>
      <div className={numberContainerClasses}>
        <NumberAnimation state={state} />
      </div>
      <div className="number_name">{heading}</div>
    </div>
  );
};

const AboutInNumbers = () => {
  const aboutNumbersData = [
    { heading: "Confidentiality", state: 1 },
    { heading: "Cases Solved" },
    { heading: "Amount Settled" },
    { heading: "Active Cases" },
  ];

  const containerClasses =
    "w-screen h-auto my-20 flex flex-wrap justify-around";

  return (
    <div className={containerClasses}>
      {aboutNumbersData.map((data, index) => (
        <AboutNumbers key={index} {...data} />
      ))}
    </div>
  );
};

export default AboutInNumbers;
