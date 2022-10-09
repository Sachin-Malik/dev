import instagram from '../assets/instagram.png'
import github from '../assets/github.png'
import twitter from '../assets/twitter.png'
import linkedin from '../assets/linkedin.png'
import code from '../assets/code.png'


export default function SocialCards(){
    return (
       <div className='row justify-content-center mb-5'>
       <div className='col-10'>
       <a href='https://www.linkedin.com/in/sachin-malik-65b603197/' target="_blank" rel="noreferrer"><img className='my-icon' src={linkedin} alt='Loading'/></a>
       <a href='https://github.com/Sachin-Malik' target="_blank" rel="noreferrer"><img className='my-icon' src={github} alt='Loading'/></a>
       <a href='https://twitter.com/SachinM66777739' target="_blank" rel="noreferrer"><img className='my-icon' src={twitter} alt='Loading'/></a>
       <a href='https://leetcode.com/intruder_110/' target="_blank" rel="noreferrer"><img className='my-icon' src={code} alt='Loading'/></a>
       </div>
      </div>
    )
}