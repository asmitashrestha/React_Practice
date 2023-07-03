let Bodyimg = ({title,desc,image})=>{
  
    return(
      <div className="project">
            <img src={image} alt="" />
            <h2>{title}</h2>
            <p>{desc}</p>
            <button style={{backgroundColor:"blue", color:"white",marginRight:"5px", padding:"10px"}}>edit</button>
            <button style={{backgroundColor:"red", color:"white", padding:"10px"}}>delete</button>
          </div>
    )
   }

export default Bodyimg   /* alt+shift+A to do comment*/


