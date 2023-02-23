import React from 'react'

export default function Challengue(props) {

  console.log(props);

  return (
    <div className='mb-[100px]'>
      <img width={"220px"} src={props.img} alt="" />
      <h3>{props.name}</h3>
      <div>
        <img src="" alt="" />
        <p>{props.phoneNum}</p>
      </div>
      <div>
        <img src="" alt="" />
        <p>(mail icon) {props.email}</p>
      </div>
    </div>
  )
}