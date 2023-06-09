function Project({ project }) {
  return (
    <div className='row justify-content-center my-3 project-card hide '>
      <div className='col-12 col-md-10' style={{ position: 'relative' }}>
        <div className="row g-0 justify-content-around m-3">
          <div className="col-md-5 align-self-center">
            <a href={project.projectImageUrl} target="_blank" rel="noreferrer">
              <img src={project.projectImage} className="img-fluid  project-image" alt="..." />
            </a>
          </div>
          <div className="col-md-6 align-self-center p-3 shadow text-center">
            <h2 className="project-title mt-3 mt-md-0">{project.projectTitle}</h2>
            <p>{project.projectContent}</p>
            <p>{project.projectTechStack}</p>
            <p>
              {
                project.projectLinks.map((item, index) => {
                  return <a key={index} href={item.projectLinkUrl} target="_blank" title={item.iconTitle} rel="noreferrer"><img className='my-icon' src={item.projectLinkIcon} alt='Loading' /></a>
                })
              }
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-2 col-md-1 project-card__separator my-3 my-md-5"></div>
        </div>
      </div>
    </div>
  )
}

export default Project 