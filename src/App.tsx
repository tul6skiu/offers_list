import { useState } from 'react'
import './App.css'
import type { EtsyItem } from './Types';
import etsyData from './data/etsy.json';
import Listing from './Listing';


const data: EtsyItem[] = etsyData;

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Listing items={data} />
    </>
  )
}

export default App
