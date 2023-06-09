import github from '../../assets/github.png'
import live from '../../assets/live.png';
import star from '../../assets/star.png';
import youtube_snip from '../../assets/youtube_snip_.png'
import getplaced_snip from '../../assets/getplaced_snip.JPG'
import classifier_snip from '../../assets/classifier_snip.jpg'



export const projectsData = [
    {
        projectImage: youtube_snip,
        projectImageUrl: 'https://sachin-malik.github.io/Youtube_Clone',
        star: star,
        projectTitle: "Youtube-Clone",
        projectContent: "Pixel perfect clone of Youtube's UI and Search and Play Functionality that can handle 1000 concurrent users.",
        projectTechStack: "React.JS, Redux, YouTubeAPI & Github Pages",
        projectLinks: [
            {
                projectLinkIcon: live,
                projectLinkUrl: 'https://sachin-malik.github.io/Youtube_Clone',
                iconTitle: 'Check out Live Demo',
            },
            {
                projectLinkIcon: github,
                projectLinkUrl: 'https://sachin-malik.github.io/Get-Placed/',
                iconTitle: 'Check out GitHub Repo',
            }
        ]
    },
    {
        projectImage: getplaced_snip,
        projectImageUrl: 'https://sachin-malik.github.io/Get-Placed/',
        projectTitle: "Get Placed",
        projectContent: "A web application written in vanilla stack which provides resources for student to help them to ace their placements.",
        projectTechStack: "HTML, CSS, Jquery & Bootstrap",
        projectLinks: [
            {
                projectLinkIcon: live,
                projectLinkUrl: 'https://sachin-malik.github.io/Get-Placed/',
                iconTitle: 'Check out Live Demo',

            },
            {
                projectLinkIcon: github,
                projectLinkUrl: 'https://github.com/Sachin-Malik/Get-Placed',
                iconTitle: 'Check out GitHub Repo',

            }
        ]
    },
    {
        projectImage: classifier_snip,
        projectTitle: "Music Genre Classifier",
        projectImageUrl: 'https://github.com/Sachin-Malik/Music-Genre-Classifier/tree/master/Music%20Genre%20Classification',
        projectContent: "A machine learning model (ANN) that classifies music audio files into 1 of 10 catergory using their frequency level features  ",
        projectTechStack: "Python, ANN, Librosa & GTZan",
        projectLinks: [
            {
                projectLinkIcon: github,
                projectLinkUrl: 'https://github.com/Sachin-Malik/Music-Genre-Classifier/tree/master/Music%20Genre%20Classification',
                iconTitle: 'Check out GitHub Repo',

            }
        ]
    }
]