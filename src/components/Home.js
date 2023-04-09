import link from '../assets/link.png'
export function Home(){

    return (
        <div className="pt-3 pb-5 main-div" id="home"> 
           <div className="row mt-4 justify-content-center">
            <div className="col-10 ">
                <div className="row">
                  <p className="sub-heading">Sachin Malik - Software Engineer / Full-Stack Developer </p>
                </div>
                <div className="row mt-3 mt-md-0">
                    <h2 className="home-main-heading">A <span className="gradient-text ">passionate minimilist</span> creating full-stack Apps for web & mobile.</h2>
                </div>
                <div className="row mt-4 mt-md-5">
                  <p className="sub-heading">
                  I'm Sachin Malik, a Delhi-based Software Engineer / Developer with over one year of experience. I specialize in creating modern UIs for web and mobile applications using React.JS, Next.JS and Redux</p>
                </div>
                <div className="d-md-block row mt-2">
                  <p className="sub-heading">
                    <span className="d-none d-md-inline-block">I’m currently working at NCR Corporation, learning & growing every single day. </span> Wanna connect? Feel free to block my 
                    <span ><a className='calendar-text' href='https://topmate.io/sachin_malik' target="_blank" rel="noreferrer"><span>calendar</span></a></span>
                    <img className='calendar-icon' src={link} alt='Loading'/>
                  </p> 
                  </div>
            </div>
           </div>
        </div>
    )
}



// https://drive.google.com/file/d/1LYHXlTt6BAedFsuYLkvy3Pdotaa014wB/view