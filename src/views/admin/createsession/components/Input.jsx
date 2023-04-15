import React, { useState } from "react";
import nft1 from "assets/img/nfts/NftBanner1.png";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

import Select from "react-select";

const Input = () => {
  // integration code
  const apiKey = process.env.REACT_APP_STUDYAI_API;

  var teacherData = sessionStorage.getItem("teacher");
  const tdata = JSON.parse(teacherData);

  const [modal, showModal] = useState(false);
  const [className, setClassName] = useState("");

  const navigate = useNavigate();

  const [sessionName, setSessionName] = useState("");
  const [meetURL, setMeetURL] = useState("");

  const handleSessionNameChange = (e) => {
    setSessionName(e.target.value);
  };

  const handleMeetChange = (e) => {
    setMeetURL(e.target.value);
  };

  const handleClassChange = (e) => {

    setSelectedClassroom(e);
    console.log(selectedClassroom);
  };
  //   const [classrooms, setClassrooms] = useState([]);

  
  const [selectedClassroom, setSelectedClassroom] = useState();
  const classrooms = [
    {
        key: "1",
        label: "SE-11"
    },
    {
        key: "2",
        label: "SE-6"
    },
    {
        key: "3",
        label: "SE-9"
    },
    {
        key: "3",
        label: "SE-10",

    },
    ];

  const steps = [
    "Click the 'Create Session' button and enter the name of the session in the provided field.",
    "The session ID will be generated automatically, which you should share with students so they can join the session",
    "To begin recording the lecture, click on the Start Recording button.",
    "The microphone will be turned on once you click the start recording",
    "When you are finished with the lecture, click on the End Session button to stop the recording.",
    "The Generate Quiz button will appear after you click the End Session button.",
    "Click on the Generate Quiz button to generate an automated quiz.",
    "You can also add custom questions in the quiz for better performance",
    "The generated quiz will then be shared with the students.",
    "The responses of the students will be displayed on the screen as they submit the quiz.",
  ];

  const isCreateSessionDisabled = !sessionName || !selectedClassroom;
  // integration code

  return (
    <div
      className="flex flex-row flex-grow  w-full  rounded-[20px]  bg-white px-[10px] py-[10px] dark:bg-blueSecondary"
      //   style={{ backgroundImage: `url(${nft1})` }}
    >
      <div className="w-full">
        <div className="mt-[36px] flex w-full items-center justify-between gap-4 sm:justify-center 2xl:gap-10">
          <form className="flex  w-full flex-col gap-4">
            <div className="flex flex-col items-center justify-center gap-10 px-3 sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row">
              <label htmlFor="session-name" className="w-1/4 text-2xl font-medium">
                Session Name
              </label>
              <input
                type="text"
                id="session-name"
                value={sessionName}
                onChange={handleSessionNameChange}
                placeholder="Enter session name"
                className="w-full flex-grow rounded-md border p-2"
              />
            </div>

            <div className=" flex  w-full flex-col justify-between gap-5 sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row ">
              <div className="flex w-full flex-col gap-1 p-2">
                <label
                  htmlFor="session-name"
                  className=" mt-1 mb-1 text-xl font-medium"
                >
                  Select the classroom
                </label>
                  <Select
                    value={selectedClassroom}
                    onChange={(op)=>handleClassChange(op)}
                    options={classrooms}
                  />
              </div>

              <div className="flex w-full flex-col gap-1 p-2">
                <label 
                    htmlFor="meet-name" 
                    className="mt-1 mb-1 text-xl font-medium">
                  Enter Meeting URL
                </label>
                <input
                  type="text"
                  id="meet-name"
                  value={meetURL}
                  onChange={handleMeetChange}
                  placeholder="Enter session name"
                  className="rounded-md border-2 p-2"
                />
              </div>
            </div>
            <button
              type="button"
              onClick={() => {}}
              disabled={isCreateSessionDisabled}
              className={`rounded-md bg-blueSecondary px-4 py-2 font-medium text-white ${
                isCreateSessionDisabled && "cursor-not-allowed opacity-50"
              }`}
            >
              <FaPlus className="mr-2 inline-block" />
              Create Session
            </button>
          </form>
          {/*============================================================================================================  */}
        </div>
      </div>
    </div>
  );
};

export default Input;
