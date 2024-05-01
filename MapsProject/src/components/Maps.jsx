import React, { useRef, useState } from 'react'
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import Header from './Header';
import { OpenStreetMapProvider } from "leaflet-geosearch"
import MyMap from './MyMap';


const Maps = () => {
  const mapProvider = new OpenStreetMapProvider();
  const position = [31.776759181885886, 35.23454539627485];
  const [input,setinput]=useState("")
  const [pos, setPos] = useState(position)
  const userSearch = useRef();
  const locationSearch = async () => {
    setinput(userSearch.current.value)
    // const inputValue = userSearch.current.value
    const cities = await mapProvider.search({ query: input })
    console.log(cities);
    if (cities.length > 0)
      setPos([cities[0].y, cities[0].x])

  }
  const handleSubmit = (e) => {
    e.preventDefault()
    locationSearch();
  }

  return (
    <>
      <Header />
      <div>
        <form className='flex justify-center ' onSubmit={handleSubmit}>
          <input className='border border-black ' ref={userSearch} type="text" />
          <button className='btn btn-info ' type='submit'>Search</button>
        </form>
      </div>
      <div>
        <MapContainer center={position} zoom={11} style={{
          height: '400px', width:
            '100%'
        }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <ahref="https://www.openstreetmap.org/copyright">OpenStreetMap</a>contributors'
          />
          {/* <Marker position={pos}>
            <Tooltip className='font-bold'> הכותל המערבי \ ירושלים</Tooltip>
          </Marker> */}
          {/* <Marker position={position2}>
            <Tooltip className='font-bold'> ציון רחל אימנו \ ירושלים</Tooltip>
          </Marker>
          <Marker position={position3}>
            <Tooltip className='font-bold'> ציון שמואל הנביא \ ירושלים</Tooltip>
          </Marker> */}
          < MyMap position={pos} pop={input} tool={input}/>

        </MapContainer>
      </div>
    </>

  )
}

export default Maps