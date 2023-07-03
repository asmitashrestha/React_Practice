import Button from "./Button"

let Bodyimg = ({title,desc,image})=>{
  
    return(
      <div className="project">
            <img src={image} alt="" />
            <h2>{title}</h2>
            <p>{desc}</p>
            <Button/>
          </div>
    )
   }

export default Bodyimg   /* alt+shift+A to do comment*/


