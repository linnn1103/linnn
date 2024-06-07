import  "./whoami.css";
import { getIconUrl } from "../../../../utils";
import { getImageUrl } from "../../../../utils";
function  Whoami() {
  return (
        <section className="container "id="about">
        <h2 className="title">About</h2>
        <div className="content">
            <img
            src={getImageUrl("wife.png")}
            alt="That's me!"
            className="aboutImage"
            />
            <ul className="aboutItems">
            <li className="aboutItem">
                <img src={getIconUrl("about/cursor.png")} alt="Cursor icon" />
                <div className="aboutItemText">
                <h3>Frontend Developer</h3>
                <p>
                    我是一位前端開發的學習者，如你看到的一樣，這網頁就是我做的，
                    雖然不是很完美，但我仍在製作的過程中學習。
                </p>
                </div>
            </li>
            {/* <li className="aboutItem">
                <img src={getIconUrl("about/serverIcon.png")} alt="Server icon" />
                <div className="aboutItemText">
                <h3>Backend Developer</h3>
                <p>
                    I have experience developing fast and optimised back-end systems
                    and APIs
                </p>
                </div>
            </li> */}
            <li className="aboutItem">
                <img src={getIconUrl("about/ui.png")} alt="UI icon" />
                <div className="aboutItemText">
                <h3>UI Designer</h3>
                <p>
                    我也是一位UI設計的學習者，我盡可能的讓這個網頁看起來更好看、簡潔，讓使用者有更好的體驗。
                </p>
                </div>
            </li>

            <li className="aboutItem">
                <img src={getIconUrl("about/coding.png")} alt="你沒看到就是我沒找到或我畫不出來" />
                <div className="aboutItemText">
                <h3>Python Developer</h3>
                <p>
                    我也會透過Python開發一些小程式，雖然大部分都很沒用，但很有趣。
                    如果想你，可以在我的Github上找到這些程式。
                </p>
                </div>
            </li>
            </ul>
        </div>
        
        </section>
  );
}
export default Whoami;
