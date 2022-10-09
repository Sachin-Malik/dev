import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'


function TimeLineItem({data,floatDirection}){
    return (
        <div className={`timeline timeline-item  ${floatDirection}`}>
        <div className="card">
          <div className="card-body p-4">
          <h3 className="card-title project-title gradient-text">{data.companyName}</h3>
            <p className='uppercase'>{data.companyDuration}</p>
            <p className="">{data.companyWorkContent}</p>
            {
              data.companyWorkStack.map((item)=>{
                 return <a href='#blank' target="_blank" rel="noreferrer"><img className='my-icon' src={item} alt='Loading'/></a>         
              })
            }
          </div>
        </div>
      </div>
    )
}

export default TimeLineItem;