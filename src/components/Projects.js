import Project from './Project'
import SectionInfo from './sectionInfo/SectionInfo'
import { projectsData } from './projects/projectData'
const projectSectionInfo = {
    sectionInfoHeader:'My Work',
    sectionInfoContent:`Projects I'm most proud of`
}



export function Projects(){
    return(
    <div id="work">
        <div className='space-100'>
        <SectionInfo data={projectSectionInfo}/>
        {
            projectsData.map((project)=>{
                return <Project project={project} />
            })
        }
        </div>
    </div>
    )
}