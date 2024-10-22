import Header from '@/components/Header';
import NavigationTitle from '@/components/NavigationTitle';
import EventExplain from '@/components/EventExplain';
import Contact from '@/components/Contact';
import { useEffect } from 'react';
import { events } from './../data/events';
import { useState } from 'react';

export default function Events() {
 
    document.title = 'ISTA | Events';

  


  const [currentEvent, setCurrentEvent] = useState(null);


  return (
    <div>
      <Header />
      <h1 className='text-blue-500 text-center sm:text-3xl text-2xl mt-6'>Our Events - 2024</h1>
      <NavigationTitle title="Tech Events" />
      

      <div className='flex flex-row gap-5 flex-wrap justify-center mx-2 '>
        {events.map(event => (
          <EventExplain
            key={event.id}
            title={event.name}
            description={`Join us for the ${event.name} and showcase your talents!`}
            date={event.date}
            time={event.time}
            venue={event.location}
            prize={event.price}
            members={event.members}
            contact={event.contact}
            registerLink={event.register}
          />
        ))}
      </div>

      <section id="contact">
        <NavigationTitle title="CONTACT" />
        <Contact />
      </section>
    </div>
  );
}
