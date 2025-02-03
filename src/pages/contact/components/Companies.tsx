import React from 'react'
import { motion } from 'motion/react';
import airtel from "../../../assets/images/airtel.png";
import vodafone from "../../../assets/images/vodafone.png";
import pimer from "../../../assets/images/pimerc.png";
import bmw from "../../../assets/images/bmw.png";
import benz from "../../../assets/images/benz.png";
import audi from "../../../assets/images/audi.png";
import wwics from "../../../assets/images/wwics.png";
import ess from "../../../assets/images/ess.png";
import usha from "../../../assets/images/usha.webp";
import acc from "../../../assets/images/acc.png";
import daviet from "../../../assets/images/daviet.png";
import meg from "../../../assets/images/meg.png";
import gadps from "../../../assets/images/gadps.png";


const Companies:React.FC = () => {
    const clientLogos = [
        airtel,
        vodafone,
        pimer,
        bmw,
        benz,
        audi,
        wwics,
        ess,
        usha,
        acc,
        daviet,
        meg,
        gadps,
      ];

      
  return (
    <div className='w-full  xl:w-8/12 lg:w-9/12 md:w-10/12  '>
         <div className="relative flex  items-center overflow-x-hidden mt-12 ">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
          {/* Right gradient overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10"></div>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
            className="flex flex-shrink-0   gap-8"
          >
            {[...clientLogos, ...clientLogos, ...clientLogos].map(
              (logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`Partner logo ${index}`}
                  className="md:h-12 h-6"
                />
              )
            )}
          </motion.div>

          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
            className="flex  flex-shrink-0    gap-8"
          >
            {[...clientLogos, ...clientLogos, ...clientLogos].map(
              (logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`Partner logo ${index}`}
                  className="md:h-12 h-6 flex flex-shrink-0"
                />
              )
            )}
          </motion.div>
        </div>
    </div>
  )
}

export default Companies