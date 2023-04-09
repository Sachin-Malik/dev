import SectionInfo from "./sectionInfo/SectionInfo";
import TimeLineItem from "./TimeLine/TimeLineItem";
import { TimeLineData } from "./TimeLine/TimeLineData";


const workSectionInfo = {
    sectionInfoHeader:'Experience',
    sectionInfoContent:`Companies, I've had the pleasure to work with`
}

const directionMap = ['right','left'];
function TimeLine(){
  
  return (
      <div id="experience">
        <SectionInfo data={workSectionInfo}/>
        <div className="row justify-content-center space-100">
            <div className="col-12 col-md-10 px-0">
            <section>
              <div class="py-5">
                <div class="main-timeline">
                 {
                  TimeLineData.map((item,index)=>{
                    return <TimeLineItem data={item} floatDirection={directionMap[index%2]}/>
                  })
                 }
                </div>
              </div>
            </section>
        </div>
        </div>
      </div>
  )
}
export default TimeLine;