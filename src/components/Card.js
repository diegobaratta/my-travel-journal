import React from 'react'

export default function Card(props) {
    
    return (
        <div className='card'>
            <img className='card--img' src={props.imageUrl} />
            <div className='card--info'>
                <p className='card--location'>
                    <img src='../images/path.png' /> 
                    <strong>{props.location}</strong>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </p>
                <h1>{props.title}</h1>
                <small>{props.startDate} - {props.endDate}</small>
                <p>{props.description}</p>
            </div>
        </div>
    )
} 