import React, { Suspense } from "react";
import { ClipLoader } from "react-spinners";

// Dynamically import the Spline component using React.lazy
const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function ThreeD() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Suspense fallback={<ClipLoader color="#36d7b7" size={50} />}>
        <Spline
          className="w-full h-full "
         scene="https://prod.spline.design/EMw44iVHv6WFAdzS/scene.splinecode"
        />
      </Suspense>
    </div>
  );
}
