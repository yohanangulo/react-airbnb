export default function Challengue({img, name, phoneNum, email}) {

  return (
    <div className='mb-[100px]'>
      <img width={"220px"} src={img} alt="" />
      <h3>my name is {name}</h3>
      <div>
        <img src="" alt="" />
        <p>{phoneNum}</p>
      </div>
      <div >
        <img src="" alt="" />
        <p>(mail icon) {email}</p>
      </div>
    </div>
  )
}