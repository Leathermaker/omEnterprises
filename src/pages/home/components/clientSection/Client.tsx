import React, { useState, useEffect } from "react";
import airtel from "../../../../assets/images/airtel.png";
import vodafone from "../../../../assets/images/vodafone.png";
import pimer from "../../../../assets/images/pimerc.png";
import bmw from "../../../../assets/images/bmw.png";
import benz from "../../../../assets/images/benz.png";
import audi from "../../../../assets/images/audi.png";
import wwics from "../../../../assets/images/wwics.png";
import ess from "../../../../assets/images/ess.png";
import usha from "../../../../assets/images/usha.webp";
import acc from "../../../../assets/images/acc.png";
import daviet from "../../../../assets/images/daviet.png";
import meg from "../../../../assets/images/meg.png";
import gadps from "../../../../assets/images/gadps.png";
import { WideScreenHandler } from "../../../../components";

const Client: React.FC = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Update screen width on resize
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const rows = [
    [
      { id: 1, name: "", color: "text-yellow-400", icon: "" },
      { id: 1, name: "", color: "text-yellow-400", icon: "" },
      { id: 1, name: "", color: "text-yellow-400", icon: "" },
      { id: 1, name: "", color: "text-yellow-400", icon: "" },
      { id: 1, name: "", color: "text-yellow-400", icon: "" },
      { id: 1, name: "", color: "text-yellow-400", icon: "" },
      { id: 1, name: "", color: "text-yellow-400", icon: "" },
      { id: 1, name: "", color: "text-yellow-400", icon: "" },
      { id: 1, name: "", color: "text-yellow-400", icon: "" },
      { id: 1, name: "", color: "text-yellow-400", icon: "" },
    ],
    [
      { id: 1, name: "", color: "text-yellow-400", icon: "" },
      { id: 1, name: "", color: "text-yellow-400", icon: "" },
      { id: 1, name: "", color: "text-red", icon: airtel },
      { id: 2, name: "React", color: "text-cyan-400", icon: vodafone },
      { id: 9, name: "Remix", color: "text-white", icon: benz },
      { id: 4, name: "Vue", color: "text-emerald-400", icon: bmw },
      { id: 5, name: "Remix", color: "text-blue-400", icon: audi },
      { id: 17, name: "Laravel", color: "text-red-500", icon: acc },
      { id: 1, name: "", color: "text-yellow-400", icon: "" },
      { id: 1, name: "", color: "text-yellow-400", icon: "" },
    ],
    [
      { id: 9, name: "Remix", color: "text-white", icon: "" },
      { id: 14, name: "Drama", color: "text-green-400", icon: "" },
      { id: 10, name: "Metro", color: "text-green-400", icon: wwics },
      { id: 3, name: "Angular", color: "text-pink-500", icon: pimer },
      { id: 11, name: "GraphQL", color: "text-blue-400", icon: ess },
      { id: 19, name: "Firebase", color: "text-orange-500", icon: meg },
      { id: 18, name: "Nest", color: "text-red-400", icon: daviet },
      { id: 12, name: "Webpack", color: "text-orange-500", icon: usha },
      { id: 13, name: "Signal", color: "text-red-500", icon: gadps },
      { id: 9, name: "Remix", color: "text-white", icon: "" },
    ],
    [
      { id: 1, name: "", color: "text-yellow-400", icon: "" },
      { id: 1, name: "", color: "text-yellow-400", icon: "" },
      { id: 1, name: "", color: "text-yellow-400", icon: "" },
      { id: 1, name: "", color: "text-yellow-400", icon: "" },
      { id: 1, name: "", color: "text-yellow-400", icon: "" },
      { id: 1, name: "", color: "text-yellow-400", icon: "" },
      { id: 1, name: "", color: "text-yellow-400", icon: "" },
      { id: 1, name: "", color: "text-yellow-400", icon: "" },
      { id: 1, name: "", color: "text-yellow-400", icon: "" },
      { id: 1, name: "", color: "text-yellow-400", icon: "" },
    ],
  ];

  // Determine the number of columns based on screen width
  const getGridColumns = () => {
    if (screenWidth < 640) return 2; // sm
    if (screenWidth < 768) return 3; // md
    return 10; // lg and above
  };

  // Determine margin based on screen width
  const getMargin = (rowIndex: number) => {
    if (rowIndex % 2 === 1) {
      if (screenWidth >= 1024) return { left: "-8rem", right: "-2rem" }; // lg
      if (screenWidth >= 768) return { left: "-4rem", right: "-1rem" }; // md
      return { left: "0", right: "0" }; // base
    }
    return { left: "0", right: "0" };
  };

  return (
    <WideScreenHandler>
      <div className="h-auto bg-white overflow-hidden py-12">
        <div className="mx-auto relative">
          <h1 className=" absolute z-50 -top-7 left-0 right-0 text-6xl font-bold text-OMblue bg-gradient-to-b from-OMblue/20 via-OMblue/10 to-transparent bg-clip-text text-transparent text-center ">
            CLIENTS
          </h1>
          <h1 className="text-blue-950 md:text-[3vw] sm:text-[6vw] text-[6.5vw] 3xl:text-3xl leading-[1.1] font-bold text-center md:absolute z-50 w-full">
            Clients We Have <br /> Created Results For
          </h1>
          <div className="bg-gradient-to-b from-white to-transparent w-full z-40 xl:h-[14rem] md:h-[7rem] h-0 absolute top-0 left-0" />
          <div className="bg-gradient-to-b from-white to-transparent w-full z-40 xl:h-[14rem] md:h-[7rem] h-0 absolute bottom-0 left-0 rotate-180" />
          <div className="flex flex-col gap-3 md:gap-4 relative">
            {rows.map((row, rowIndex) => {
              const margin = getMargin(rowIndex);
              return (
                <div
                  key={rowIndex}
                  className="grid gap-2 sm:gap-3 md:gap-4 overflow-hidden"
                  style={{
                    gridTemplateColumns: `repeat(${getGridColumns()}, 1fr)`,
                    marginLeft: margin.left,
                    marginRight: margin.right,
                  }}
                >
                  {row.map((item) =>
                    !item.icon && screenWidth < 768 ? null : (
                      <div key={item.id} className="relative group">
                        <div className="aspect-square flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-100 transition-all duration-300 cursor-pointer hover:shadow-lg shadow-OMblue hover:border hover:border-gray-200/50 hover:scale-95">
                          <div
                            className={`text-2xl ${item.color} p-3 sm:p-4 md:p-5`}
                          >
                            {item.icon && (
                              <img
                                src={item.icon}
                                alt={item.name}
                                className="w-full h-full object-contain mix-blend-multiply"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </WideScreenHandler>
  );
};

export default Client;
