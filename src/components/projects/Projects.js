import { useEffect } from 'react';
import Project from './Project'
import SectionInfo from '../sectionInfo/SectionInfo'
import { projectsData } from './projectData'
import './projectsStyle.css'
const projectSectionInfo = {
    sectionInfoHeader: 'My Work',
    sectionInfoContent: `Projects I'm most proud of`
}

export default function Projects() {

    const shuffleData = (input) => {
        const inputLen = input.length;
        let a = Math.floor(Math.random() * 100) % inputLen;
        let b = Math.floor(Math.random() * 100) % inputLen;
        let temp = input[a];
        input[a] = input[b];
        input[b] = temp;
        return input;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        })
    })

    useEffect(() => {
        const hiddenElements = document.querySelectorAll('.hide');
        hiddenElements.forEach((element) => observer.observe(element));
    }, [])

    return (
        <div id="work">
            <div className='space-100'>
                <SectionInfo data={projectSectionInfo} />
                {
                    shuffleData(projectsData).map((project, index) => {
                        return <Project key={index} project={project} lastCard={index === projectsData.length - 1} />
                    })
                }
            </div>
        </div>
    )
}