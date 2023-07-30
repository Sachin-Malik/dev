import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import code from '../../assets/code.png';
import download from '../../assets/download.png';


export default function SocialCards() {
   return (
      <div className='row justify-content-center mb-5'>
         <div className='col-10 col-md-11 p-0'>
            <a href='https://www.linkedin.com/in/sachin-malik-65b603197/' target="_blank" rel="noreferrer"><img className='my-icon' src={linkedin} title='LinkedIn Profile' alt='Loading' /></a>
            <a href='https://github.com/Sachin-Malik' target="_blank" rel="noreferrer"><img className='my-icon' src={github} title='GitHub Profile' alt='Loading' /></a>
            <a href='https://drive.google.com/file/d/1lMAJxQBnNuGl0wUYeS_XodtQ08Mvkwd8/view?usp=share_link' target="_blank" rel="noreferrer">
               <img className='my-icon' src={download} title='My Resume' alt='Loading' />
            </a>
            <a href='https://leetcode.com/intruder_110/' target="_blank" rel="noreferrer"><img className='my-icon' src={code} title='LeetCode Profile' alt='Loading' /></a>
         </div>
      </div>
   )
}