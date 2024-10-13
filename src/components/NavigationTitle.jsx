import React from 'react'

export default function NavigationTitle(props) {
    const title = props.title;
  return (
    

        <div>
            <h1 className=" text-5xl my-10 lg:mt-20 sm:text-5xl md:text-6xl lg:text-7xl  text-center font-bold">
              <span className="text-fuchsia-600">&lt;</span>
              <span className="text-orange-500">{title}</span> 
              <span className="text-fuchsia-600">/&gt;</span>
            </h1>
        </div>
        
    );
}


