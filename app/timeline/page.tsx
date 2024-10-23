import React from "react";
import { Timeline } from "../../components/ui/timeline";
import Navbar from "../../components/Navbar";
import { data } from "./data";


export default function TimelineDemo() {

  return (
    <div className="w-full">
        <Navbar />
      <Timeline data={data} />
    </div>
  );
}
