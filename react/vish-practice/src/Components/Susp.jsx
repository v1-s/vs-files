import React, { Suspense } from "react";
const LazyComponent = React.lazy(() => import("../Components/Funcform"));
const OtherComponent = React.lazy(() => import("../Components/Todolist"));

function MySuspenseComponent() {
  return (
    <>
      <h1>My Component</h1>
      <Suspense fallback={<div>Loading LazyComponent...</div>}>
        <LazyComponent />
      </Suspense>
      <Suspense fallback={<div>Loading OtherComponent...</div>}>
        <OtherComponent />
      </Suspense>
    </>
  );
}

export default MySuspenseComponent;



// import React, { Suspense, useState } from "react";
// const LazyComponent = React.lazy(() => import("../Components/Funcform"));
// const OtherComponent = React.lazy(() => import("../Components/Todolist"));

// function MySuspenseComponent() {
//   const [loadingComponent, setLoadingComponent] = useState(null);

//   return (
//     <>
//       <h1>My Component</h1>
//       <Suspense
//         fallback={
//           loadingComponent === "LazyComponent" ? (
//             <div>Loading LazyComponent...</div>
//           ) : loadingComponent === "OtherComponent" ? (
//             <div>Loading OtherComponent...</div>
//           ) : (
//             <div>Loading...</div>
//           )
//         }
//       >
//         <LazyComponent onLoad={() => setLoadingComponent(null)} onError={() => setLoadingComponent("LazyComponent")} />
//         <OtherComponent onLoad={() => setLoadingComponent(null)} onError={() => setLoadingComponent("OtherComponent")} />
//       </Suspense>
//     </>
//   );
// }

// export default MySuspenseComponent;