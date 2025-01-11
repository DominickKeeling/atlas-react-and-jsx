import React from "react";
import OpenLink from "./OpenLink";
import CopyLink from "./CopyLink";

export default function HelpfulResource(prop) {
  return (
    <div className="helpful-resource">
      {prop.label}
      <OpenLink link={prop.link} />
      <CopyLink link={prop.link} />
    </div>
  );
}