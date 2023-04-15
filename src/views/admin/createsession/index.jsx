import React from "react";
import Input from "./components/Input";

const CreateSession = () => {
  return (
    <div className=" mt-3 grid h-full grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1 3xl:grid-cols-1">
      <div className=" h-fit w-full xl:col-span-3 2xl:col-span-3">
      <Input/>
      </div>
    </div>
  );
};

export default CreateSession;
