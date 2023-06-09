import SectionInfo from "../sectionInfo/SectionInfo";
import TimeLineItem from "./TimeLineItem";
import { TimeLineData } from "./TimeLineData";
import './timelineStyle.css'


const workSectionInfo = {
  sectionInfoHeader: 'Experience',
  sectionInfoContent: `Companies, I've had the pleasure to work with`
}
const directionMap = ['right', 'left'];
function TimeLine() {

  return (
    <div id="experience">
      <SectionInfo data={workSectionInfo} />
      <div className="row justify-content-center space-100">
        <div className="col-12 col-md-10 px-0">
          <section>
            <div className="py-5">
              <div className="main-timeline">
                {
                  TimeLineData.map((item, index) => {
                    return <TimeLineItem key={index} data={item} floatDirection={directionMap[index % 2]} />
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