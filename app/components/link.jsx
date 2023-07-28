import React from "react";
import Link from "next/link";

const link = ({ href, name }) => {
  return (
    <Link href={href} className="link">
      <span>{name}</span>
    </Link>
  );
};

export default link;
