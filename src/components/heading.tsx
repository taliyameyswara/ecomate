import React from "react";

interface HeadingProps {
  title: string;
  subtitle: string;
}

const Heading = ({ title, subtitle }: HeadingProps) => {
  return (
    <>
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">{title}</h1>
        <h4 className="text-lg text-gray-500">{subtitle}</h4>
      </div>
    </>
  );
};

export default Heading;
