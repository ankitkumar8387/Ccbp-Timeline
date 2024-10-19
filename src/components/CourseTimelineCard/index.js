// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, duration, description, tagsList, title} = courseDetails

  return (
    <div className="course-container">
      <div className="title-duration-container">
        <h1 className="heading">{courseTitle}</h1>
        <div className="clock-container">
          <AiFillClockCircle className="clock-image" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="unordered-list">
        {tagsList.map(eachItem => (
          <li key={eachItem.id} className="list-item">
            <p className="course-name">{eachItem.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default CourseTimelineCard
