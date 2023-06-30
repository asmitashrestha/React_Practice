let Project = ({title,desc,image})=>{
    return(
      <div className="project">
            <img src={image} alt="" />
            <h2>{title}</h2>
            <p>{desc}</p>
          </div>
    )
   }

export default Project   /* alt+shift+A to do comment*/


