import Header from '@/components/Header';
import NavigationTitle from '@/components/NavigationTitle';
import EventExplain from '@/components/EventExplain';
export default function Events() {
  return (
    <div>
      <Header />
      <h1 className='text-rose-300 text-center text-5xl mt-6'>Our Events - 2024</h1>
      <NavigationTitle title="Tech Events"></NavigationTitle> 
      <div>
        <EventExplain />
      </div>
    </div>
  )
}
