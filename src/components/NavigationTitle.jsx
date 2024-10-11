import React from 'react'

export default function NavigationTitle(props) {
    const title = props.title;
  return (
    

        <div>
            <h1 className="text-5xl text-center font-bold">
              <span className="text-fuchsia-600">&lt;</span>
              <span className="text-orange-500">{title}</span> 
              <span className="text-fuchsia-600">/&gt;</span>
            </h1>
        </div>
        
    );
}


