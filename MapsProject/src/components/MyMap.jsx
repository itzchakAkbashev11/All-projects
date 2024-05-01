import React from 'react'
import { Marker, Popup, Tooltip, useMap } from 'react-leaflet'

const MyMap = (props) => {
    const map =useMap();
    map.flyTo(props.position);

  return (
    <div>
        <Marker position={props.position}>
            <Popup>
            <a target='_blank'href="#">{props.pop}</a>
            </Popup>
            <Tooltip>
                {props.tool}
            </Tooltip>
        </Marker>
    </div>
  )
}

export default MyMap