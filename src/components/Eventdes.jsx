import Eventsdetails from "../assets/Eventsdetails.json";
import { FaTimes } from 'react-icons/fa';
export default function Eventdes({ visible, onClose, eventName }) {
  if (!visible) return null;

  console.log(Eventsdetails);
  console.log(eventName);

  const getEventIndexByName = (eventName) => {
    return Eventsdetails.findIndex(event => event.name === eventName);
  };

  const index = getEventIndexByName(eventName);
  console.log(index);

  // Get event details using the index
  const eventDetails = index !== -1 ? Eventsdetails[index] : null;

  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed top-0 h-full w-full bg-black bg-opacity-50 backdrop-blur-sm z-20 flex items-center justify-center"
    >
      <div className="flex flex-col w-[75vw] h-[75vh] overflow-y-auto">
        <div className="flex justify-between items-center text-rose-500  text-4xl lg:text-5xl p-2 rounded-3xl">
          <p className="text-4xl">{eventDetails ? eventDetails.name : "Event"}</p>
          <button onClick={onClose} className="text-3xl lg:text-4xl text-white hover:text-red-800 transition duration-300"><FaTimes size={30}/></button>
        </div>
        <div className="flex flex-col text-2xl lg:text-2xl">
          {eventDetails ? (
            <>
              <p>{eventDetails.description}</p>
              <br />
              <p>
                <strong className="text-rose-500">Date:</strong> Round 1 (Online submission): {eventDetails.date.round1}<br />
                Round 2 (Offline hackathon): {eventDetails.date.round2}
              </p>
              <p>
                <strong className="text-rose-500">Team Size:</strong> {eventDetails.teamSize}.
              </p>
              <p>
                <strong className="text-rose-500">Timings:</strong> {eventDetails.timings}.
              </p>
              <p>
                <strong className="text-rose-500">Venue:</strong> {eventDetails.venue}
              </p>
              <p>
                <strong className="text-rose-500" >Price Pool:</strong> {eventDetails.pricePool}
              </p>
              <p>
                <strong className="text-rose-500" >POC:</strong> {eventDetails.poc.name} {eventDetails.poc.contact}
              </p>
              {eventDetails.contacts && eventDetails.contacts.length > 0 && (
                <p>
                  <strong className="text-rose-500">Contact:</strong> {`${eventDetails.contacts[0]}, ${eventDetails.contacts[1]}`}
                </p>
              )}

            </>
          ) : (
            <p>Event details not found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
