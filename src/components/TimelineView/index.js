// Write your code here
import './index.css'
import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props
  const renderTimeLineCard = items => {
    if (items.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={items.id} projectDetails={items} />
    }
    return <CourseTimelineCard key={items.id} courseDetails={items} />
  }
  return (
    <div className="chrono-container">
      <h1 className="main-heading">My Journey of CCBP 4.0</h1>
      <Chrono items={timelineItemsList} mode="VERTICAL_ALTERNATING">
        {timelineItemsList.map(eachItem => renderTimeLineCard(eachItem))}
      </Chrono>
    </div>
  )
}
export default TimelineView
