import github from '../../assets/github.png'
import play from '../../assets/play.png'
import youtube_snip from '../../assets/youtube_snip.JPG'
import getplaced_snip from '../../assets/getplaced_snip.JPG'
import classifier_snip from '../../assets/classifier_snip.jpg'


export const projectsData = [
    {
        projectImage:youtube_snip,
        projectImageUrl:'https://sachin-malik.github.io/youtube-clone',
        projectTitle:"Youtube-Clone",
        projectContent:"Clone YouTube's basic search and play videos functionalaties using offical YouTube API that can handle 1000 concurrent users",
        projectTechStack:"React.JS, Redux, YouTubeAPI & Github Pages",
        projectLinks: [
            {
                projectLinkIcon:play,
                projectLinkUrl:'https://sachin-malik.github.io/youtube-clone'
            },
            {
                projectLinkIcon:github,
                projectLinkUrl:'https://sachin-malik.github.io/Get-Placed/'
            }
        ]
    },
    {
        projectImage:getplaced_snip,
        projectImageUrl:'https://sachin-malik.github.io/Get-Placed/',
        projectTitle:"Get Placed",
        projectContent:"A web application written in vanilla stack which provides resources for student to help them to ace their placements.",
        projectTechStack:"HTML, CSS, Jquery & Bootstrap",
        projectLinks: [
            {
                projectLinkIcon:play,
                projectLinkUrl:'https://sachin-malik.github.io/Get-Placed/'
            },
            {
                projectLinkIcon:github,
                projectLinkUrl:'https://github.com/Sachin-Malik/Get-Placed'
            }
        ]
    },
    {
        projectImage:classifier_snip,
        projectTitle:"Music Genre Classifier",
        projectImageUrl:'https://github.com/Sachin-Malik/Music-Genre-Classifier/tree/master/Music%20Genre%20Classification',
        projectContent:"A machine learning model (ANN) that classifies music audio files into 1 of 10 catergory using their frequency level features  ",
        projectTechStack:"Python, ANN, Librosa & GTZan",
        projectLinks: [
            {
                projectLinkIcon:github,
                projectLinkUrl:'https://github.com/Sachin-Malik/Music-Genre-Classifier/tree/master/Music%20Genre%20Classification'
            }
        ]
    }
]