import link from '../../assets/link.png'
export function Home() {

  // const angle = (cx, cy, ex, ey) => {
  //   let dx = ex - cx;
  //   let dy = ey - cy;

  //   const rad = Math.atan2(dy, dx);
  //   const deg = (rad * 180) / Math.PI;
  //   return deg;
  // }
  // useEffect(() => {
  //   document.addEventListener('mousemove', (e) => {
  //     const clientX = e.clientX;
  //     const clientY = e.clientY;

  //     const anchor = document.getElementById('black_cat');
  //     const rect = anchor.getBoundingClientRect();
  //     const anchorY = rect.top + rect.height / 2;
  //     const anchorX = rect.left + rect.width / 2;
  //     const angleDeg = angle(clientX, clientY, anchorX, anchorY);
  //     console.log(angleDeg)

  //     const eyes = document.querySelectorAll('.eye');
  //     eyes.forEach((eye) => {
  //       eye.style.transform = `rotate(${angleDeg}deg)`
  //     })

  //   })
  // }, [])


  return (
    <div className=" p-0 pt-3 pb-3  main-div container-fluid" id="home">
      <div className="row mt-4 justify-content-center">
        <div className="col-10 p-0">
          <div className="row">
            <p className="sub-heading">Sachin Malik - Software Engineer / Full-Stack Developer </p>
          </div>
          <div className="row mt-3 mt-md-0">
            <h2 className="home-main-heading">A <span className="gradient-text ">passionate minimilist</span> creating full-stack Apps for web & mobile.</h2>
          </div>
          <div className="row mt-4">
            <div className="sub-heading" style={{ marginBottom: '20px' }}>
              <span className="d-none d-md-inline" >I'm Sachin Malik, a Delhi-based Software Engineer / Developer with over one year of experience.</span>
              <span className='d-inline'>I specialize in creating modern UIs for web and mobile applications using React.JS, Next.JS and Redux.</span>
            </div>
          </div>
          <div className="d-md-block row mt-2">
            <p className="sub-heading">
              <span className="d-none d-md-inline">I’m currently working at NCR Corporation, learning & growing every single day. </span> Wanna connect? Feel free to block my
              <span ><a className='calendar-text' href='https://topmate.io/sachin_malik' target="_blank" rel="noreferrer"><span>calendar</span></a></span>
              <img className='calendar-icon' src={link} alt='Loading' />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}



// https://drive.google.com/file/d/1LYHXlTt6BAedFsuYLkvy3Pdotaa014wB/view