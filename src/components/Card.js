import React from 'react'

export default function Card(props) {
    
    return (
        <div className='card'>
            <img className='card--img' src={props.imageUrl} alt="Can't load" />
            <div className='card--info'>
                <p className='card--location'>
                    <img src='../images/path.png'  alt="Can't load" /> 
                    <strong>{props.location}</strong>
                    <a href={props.googleMapsUrl} target='_blank' rel="noreferrer">View on Google Maps</a>
                </p>
                <h1>{props.title}</h1>
                <small>{props.startDate} - {props.endDate}</small>
                <p>{props.description}</p>
            </div>
        </div>
    )
} 