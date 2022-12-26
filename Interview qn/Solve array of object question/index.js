/*Interview Question 1: How to Get Passengers' Names
Interview Question 2: How to Get Vegetarian/Vegan Singers
Interview Question #3: How to Sort Passengers by Connecting Flights
pc-Freecodecamp
link-https://www.freecodecamp.org/news/javascript-coding-interview-practice/

*/

const passengers = [
  {
    id: 1,
    passengerName: "Freddie Mercury",
    isVegetarianOrVegan: false,
    connectedFlights: 2,
  },
  {
    id: 2,
    passengerName: "Amy Winehouse",
    isVegetarianOrVegan: true,
    connectedFlights: 4,
  },
    {
    id: 3,
    passengerName: "Kurt Cobain",
    isVegetarianOrVegan: true,
    connectedFlights: 3,
  },
     {
    id: 3,
    passengerName: "Michael Jackson",
    isVegetarianOrVegan: true,
    connectedFlights: 1,
  },
];

const pname1=passengers.sort((p1,p2)=>
    p1.connectedFlights - p2.connectedFlights
)
const pname2=pname1.sort((p1,p2)=>(
    p2.connectedFlights - p1.connectedFlights
    ))
    const pname3=pname2.map((elem)=>(
        elem.passengerName
        ))
console.log(pname3)


const pname=[];
passengers.forEach((elem)=>{
    if(elem.isVegetarianOrVegan){
        pname.push(elem.passengerName)
    }
})
console.log(pname)

const passengersName=passengers.filter((elem,index)=>(
       elem.isVegetarianOrVegan 
    ))
    const pName=passengersName.map((elem)=>(
        elem.passengerName
        ))
console.log(pName)





