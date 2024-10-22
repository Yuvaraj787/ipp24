import React from 'react'

export default function NavigationTitle(props) {
    const title = props.title;
  return (
    

        <div>
            <h1 className=" text-2xl my-10 lg:mt-20 sm:text-4xl md:text-6xl lg:text-5xl tracking-wider text-center font-semibold ">
              <span className="text-blue-500">&lt;</span>
              <span className="text-fuchsia-600">{title}</span> 
              <span className="text-blue-500">/&gt;</span>
            </h1>
        </div>
        
    );
}


