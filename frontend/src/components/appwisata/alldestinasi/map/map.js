import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const Map = ({data}) => {
    // const data = [ 
    //   {
    //     lat : -2.5478741, 
    //     lang: 106.3506705
    //   },
    //   {
    //     lat : -2.6105791, 
    //     lang: 106.5252453
    //   },
    // ];
    const icons = L.icon({ iconUrl: "https://i.postimg.cc/h4b7wG7D/danau.png", iconSize: [18, 18],});

  return (
    <>
  <MapContainer className='w-[100%] h-[60vh] sm:h-[40vh] -z-10 sm:z-0 outline-none rounded-md'  center={[-2.3578741, 106.8506700]} zoom={8}>
  <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />
      {(
        data.length && (
          data.map((datas, index) => (
          <Marker key={index} position={[datas.lat, datas.lang]} icon={icons}>
            <Popup>
              <h1 className='text-xl text-center'>{datas.wisata}.<br/> <span className='text-sm'>jl.Raya Air Bara</span></h1>
              <button className='mt-4 bg-blue-400 rounded-md w-full py-1'><a href='https://www.google.com/maps/dir//Danau+Kaolin,+Jl.+Raya+Gadung,+Nibung,+Kec.+Koba,+Kabupaten+Bangka+Tengah,+Kepulauan+Bangka+Belitung+33782/@-2.5583328,106.3605236,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x2e3d4513bce66569:0xb60b7ec414d881df!2m2!1d106.3528592!2d-2.5478741!3e0'>Telusuri Map</a></button>
            </Popup>
          </Marker>
          ))
        )
      )
      }
</MapContainer>
</>
  )
}

export default Map