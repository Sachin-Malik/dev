function Project({project}){
  return (
    <div className='row justify-content-center mt-5 project-card '>
    <div className='col-12 col-md-10'>
            <div className="row g-0 justify-content-around gradient-border m-3">
                <div className="col-md-6 align-self-center">
                    <a href={project.projectImageUrl} target="_blank" rel="noreferrer">
                      <img src={project.projectImage} className="img-fluid  project-image" alt="..." />
                    </a>
                </div>
              <div className="col-md-6 align-self-center p-3 shadow text-center">
                 <h2 className="project-title">{project.projectTitle}</h2>
                 <p>{project.projectContent}</p>
                 <p>{project.projectTechStack}</p>
                 <p> 
                   {
                    project.projectLinks.map(item=>{
                        return  <a href={item.projectLinkUrl} target="_blank" title='Checkout Code' rel="noreferrer"><img className='my-icon' src={item.projectLinkIcon} alt='Loading'/></a>
                    })
                   }
                 </p>
              </div>
            </div>
       </div>
    </div>
  )
}

export default Project 