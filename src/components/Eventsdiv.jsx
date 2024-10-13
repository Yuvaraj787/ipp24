import eventsimage from "@/assets/eventsimage.jpeg"
import Eventdes from "./Eventdes"
import { useState } from "react"
export default function Eventsdiv() {

  const [showEvents,setEvents]= useState(false);
  const [eventName, setEventName] = useState("");

  const handleOnClose = ()=>setEvents(false);
  return (
    <>
   <div className="flex flex-col lg:flex-row justify-center items-center ">
    <div className="basis-1/3 flex flex-col">
     <div className="mx-4 flex justify-center  flex-col items-center">
        <h1 className="text-5xl py-6 text-indigo-700 ">HACKTHON</h1>
          <button onClick={() => {
          setEvents(true);
          setEventName("Sparkathon"); 
        }} className="text-2xl pb-2 text-slate-300 hover:underline">Sparkathon</button>
        </div>
        <div className="mx-4 flex flex-col justify-center text-4xl text-indigo-700 items-center">
        <h1 className="text-5xl py-6 text-indigo-700 ">WORKSHOP</h1>
        <a href="#" className="text-2xl pb-2 text-slate-300 hover:underline">design workshop</a>
        </div>
        </div>
      <div className="mx-4 basis-1/3 flex flex-col justify-center text-4xl text-indigo-700 items-center">
      <h1 className="text-5xl py-6 text-indigo-700 ">TECHNICAL</h1>
      <div className="flex flex-row gap-10">
        <div className="flex flex-col ">
        <button onClick={() => {
          setEvents(true);
          setEventName("TalentQuest (recruitment by Codestax.Ai)");}} 
          className="text-2xl pb-2 text-slate-300 hover:underline">TalentQuest</button>
        
        <button onClick={() => {
          setEvents(true);
          setEventName("Sequel");}} 
          className="text-2xl pb-2 text-slate-300 hover:underline">Sequel</button>        
        <button onClick={() => {
          setEvents(true);
          setEventName("AI Arena");}} 
          className="text-2xl pb-2 text-slate-300 hover:underline">AI Arena</button>        
        
        <button onClick={() => {
          setEvents(true);
          setEventName("B Tech -Bingo");}} 
          className="text-2xl pb-2 text-slate-300 hover:underline">B Tech -Bingo</button>
        </div>
        <div className="flex flex-col">
        <button onClick={() => {
          setEvents(true);
          setEventName("WEB Dev Team");}} 
          className="text-2xl pb-2 text-slate-300 hover:underline">WEB Dev Team</button>
        <button onClick={() => {
          setEvents(true);
          setEventName("CSAU Event");}} 
          className="text-2xl pb-2 text-slate-300 hover:underline">CSAU Event</button>        
        <button onClick={() => {
          setEvents(true);
          setEventName("ACM Event");}} 
          className="text-2xl pb-2 text-slate-300 hover:underline">ACM Event</button>        
       <button onClick={() => {
          setEvents(true);
          setEventName("Code Flip");}} 
          className="text-2xl pb-2 text-slate-300 hover:underline">Code Flip</button>
        
        </div>
      </div>

        </div>
        <div className="mx-4 basis-1/3 flex flex-col justify-center text-4xl text-indigo-700 items-center">
        <h1 className="text-5xl py-6 text-indigo-700 "> NON-TECHNICAL</h1>
          <button onClick={() => {
          setEvents(true);
          setEventName("The Great Escape");}} 
          className="text-2xl pb-2 text-slate-300 hover:underline">The Great Escape</button>
        <button onClick={() => {
          setEvents(true);
          setEventName("Xplore");}} 
          className="text-2xl pb-2 text-slate-300 hover:underline">Xplore</button>        
        <button onClick={() => {
          setEvents(true);
          setEventName("Back To School");}} 
          className="text-2xl pb-2 text-slate-300 hover:underline">Back To School</button>        
       <button onClick={() => {
          setEvents(true);
          setEventName("General Quiz (In Collaboration with QA)");}} 
          className="text-2xl pb-2 text-slate-300 hover:underline">General Quiz</button>
        </div>
       
       
   </div>
   <Eventdes onClose={handleOnClose} visible={showEvents} eventName={eventName} />
   </>
  
   

  )
}
