import "./skill.css";
import skills from "../../../../data/skills.json";
import history from "../../../../data/history.json";
import { getIconUrl } from "../../../../utils";

function Skill(){
  return (
    <div className="container" id="experience">
      <h2 className="title">我的經歷</h2>
      <div className="content">
        <div className="skills">
          {skills.map((skill, id) => {
            return (
              <div key={id} className="skill">
                <div className="skillImageContainer">
                  <img src={getIconUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className="history">
          {history.map((historyItem, id) => {
            return (
              <li key={id} className="historyItem">
                {/* <img
                  src={getIconUrl(historyItem.imageSrc)}
                  alt={`${historyItem.describe} Logo`}
                /> */}
                <div className="historyItemDetails">
                  <h3>{`${historyItem.role}`}</h3>
                  <h2>{`${historyItem.describe}`}</h2>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default Skill;