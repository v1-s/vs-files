export default function Hello({name,place,number}){

    return(
      <>
     
      {number.map((num,index)=>( <h1 key={index}>{name}{place} {num}</h1>))}
  
      </>
    )
}