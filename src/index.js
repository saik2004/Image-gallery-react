import ReactDom from "react-dom/client"
import "./style.css"
import man1 from "./assests/man 1.jpg"
import man2 from "./assests/man 2.jpg"
import man3 from "./assests/man 3.jpg"
import woman1 from "./assests/woman 1.jpg"


const root = ReactDom.createRoot(document.getElementById("root"))

function SearchBar(){
  return(
    <>
   <div className="container">
      <div className="input_container">
            <input className="input" type="text" placeholder="Search..."/> 
            <p>🔍︎</p>
      </div>

    {
        chatDetails.map((items)=>{
          return(
            <div>
             <Gallery image={items.image} name={items.name} time={items.time} text={items.text}></Gallery>
             </div>
             )
            })
    }
  </div> 
    </>
  )
}

function Gallery(props){
  return(
         <div style={{backgroundColor:"white",marginTop:"10px",padding:"10px",borderRadius:"4px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
               <img style={{width:"50px",height:"60px",borderRadius:"40%"}} src={props.image} alt=""/>

               <div >
                <h1 style={{fontSize:"20px"}}>{props.name}</h1>
                <p style={{fontSize:"14px"}}>{props.text}</p>
               </div>
            </div>

            <div>
              <p>{props.time}</p>
              <p>★</p>
            </div>
        </div>
        )
      }


const chatDetails = [
  {
    name:"Sai",
    text:"Hey, Joel Im here to help you please...",
    time:"11.20",
    image: man1
  },
  {
    name:"Narane",
    text:"I will Send All Documents As Soon...",
    time:"12:26",
    image: man2
  },
  {
    name:"Subash",
    text:"Are You Going To Buisness Trip Next Week?...",
    time:"8:26",
    image: man3
  },
  {
    name:"Geetika",
    text:"I missed you at School Today!",
    time:"6:16",
    image: woman1
  },
  {
    name:"Akash",
    text:"Can You Join My Party?",
    time:"8:30",
    image: man1
  },
   {
    name:"Vasanth",
    text:"When You Comming For Dinner",
    time:"8:30",
    image: man2
  }
]






root.render(
  <>
    <SearchBar></SearchBar>
  </>
)


