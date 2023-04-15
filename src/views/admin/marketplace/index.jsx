import Banner from "./components/Banner";



import lecture1 from "assets/img/nfts/lecture1.jpg";
import lecture2 from "assets/img/nfts/lecture2.jpg";
import lecture3 from "assets/img/nfts/lecture3.jpg";
import lecture4 from "assets/img/nfts/lecture4.jpg";
import lecture5 from "assets/img/nfts/lecture5.jpg";
import lecture6 from "assets/img/nfts/lecture6.jpg";
import lecture7 from "assets/img/nfts/lecture7.jpg";
import lecture8 from "assets/img/nfts/lecture8.jpg";
import lecture9 from "assets/img/nfts/lecture9.jpg";
import lecture10 from "assets/img/nfts/lecture10.jpg";
import lecture11 from "assets/img/nfts/lecture11.jpg";
import lecture12 from "assets/img/nfts/lecture12.jpg";
import lecture13 from "assets/img/nfts/lecture13.jpg";


// import React, {useState} from "react";

// import avatar1 from "assets/img/avatars/avatar1.png";
// import avatar2 from "assets/img/avatars/avatar2.png";
// import avatar3 from "assets/img/avatars/avatar3.png";

import tableDataTopCreators from "views/admin/marketplace/variables/tableDataTopCreators.json";
import { tableColumnsTopCreators } from "views/admin/marketplace/variables/tableColumnsTopCreators";
// import HistoryCard from "./components/HistoryCard";
import TopCreatorTable from "./components/TableTopCreators";

import NftCard from "components/card/NftCard";

const Marketplace = () => {

  // const [Rooms, setRooms] = useState([]);

  const Rooms = [

    {
      title: "Session 1",
      author: "John Doe",
      clgClass: "SE-11"
    },
    {
      title: "Session 2",
      author: "John Doe",
      clgClass: "SE-11"
    },
    {
      title: "Session 3",
      author: "John Doe",
      clgClass: "SE-11"
    },
    {
      title: "Session 4",
      author: "John Doe",
      clgClass: "SE-11"
    },
    {
      title: "Session 5",
      author: "John Doe",
      clgClass: "SE-11"
    },
    {
      title: "Session 6",
      author: "John Doe",
      clgClass: "SE-11"
    },
  ];

  const classImg = [lecture1, lecture2, lecture3, lecture4, lecture5, lecture6, lecture7, lecture8, lecture9, lecture10, lecture11, lecture12, lecture13]
  const joinedTime = new Date().toLocaleTimeString();

  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-3 2xl:grid-cols-3">
      
    
    
    <div className="col-span-1 h-fit w-full xl:col-span-3 2xl:col-span-3">
        {/* NFt Banner */}
        <Banner />

        {/* NFt Header */}
        <div className="mb-5 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-3xl font-bold text-navy-700 dark:text-white">
            Recent Sessions
          </h4>
        </div>

        {/* NFTs trending card */}
        <div className="z-20 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4">
          {/* 
          sessionmap
          */}
          {
            Rooms.map((room, index) => (
              <NftCard
            title= {room.title}
            author= {room.author}
            image={classImg[index % classImg.length]}
            time= {joinedTime}
            clgclass= {room.clgClass}
          />
          ))}
        </div>

        {/* Recenlty Added setion */}
        {/** 
        <div className="mb-5 mt-5 flex items-center justify-between px-[26px]">
          <h4 className="text-2xl font-bold text-navy-700 dark:text-white">
            Recently Added
          </h4>
        </div>

        // Recently Add NFTs 
        
        <div className="z-20 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4">
          <NftCard
            title="Abstract Colors"
            author="Esthera Jackson"
            image={NFt4}
          />
          <NftCard
            title="ETH AI Brain"
            author="Nick Wilson"
            image={NFt5}
          />
          <NftCard
            title="Mesh Gradients"
            author="Will Smith"
            image={NFt6}
          />
          <NftCard
            title="Abstract Colors"
            author="Esthera Jackson"
            image={NFt4}
          />
        </div>
        */}
      </div>

      {/* right side section */}

       <div className="col-span-1 h-full w-full rounded-xl 2xl:col-span-3">


        <TopCreatorTable
          extra="mb-5"
          tableData={tableDataTopCreators}
          columnsData={tableColumnsTopCreators}
        />
        {/*<HistoryCard />*/}
      </div> 
    </div>
  );
};

export default Marketplace;
