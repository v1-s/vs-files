import List from "./List"
export default function Hello({places}){
    // const {name,location,occupation,dynasty}=person;
   
    return(
      <>
   <h1> Hello</h1>
   {places.map((place)=>(<List place={place.name} location={place.loc}/>))}
        {/* <h1>Hello {name} from {location} doing {occupation}{dynasty}</h1> */}
      {/* {name.map((num,index)=>( <h1 key={index}>{num}{place} {number}</h1>))} */}
    {/* {name.map((num,index)=>(<h1 key={index}>{num}{place}{number}</h1>)) */}
      </>
    )
}