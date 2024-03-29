
function TimeLineItem({ data, floatDirection }) {
  return (
    <div className={`timeline timeline-item  ${floatDirection} hide`}>
      <div className="card">
        <div className="card-body p-4">
          <h3 className="card-title project-title gradient-text">{data.companyName}</h3>
          <p>{data.companyDuration}</p>
          <p className="">{data.companyWorkContent}</p>
          {
            data.companyWorkStack.map((item, index) => {
              return <a key={index} href='#blank' rel="noreferrer"><img className='my-icon' src={item} alt='Loading' /></a>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default TimeLineItem;