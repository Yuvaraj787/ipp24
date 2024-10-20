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
      <h1 className='text-rose-300 text-center text-5xl mt-6'>Our Events - 2024</h1>
      <NavigationTitle title="Tech Events" />
      
      {/* Mapping through events and passing event data as props */}
      <div className='flex flex-col gap-5'>
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
