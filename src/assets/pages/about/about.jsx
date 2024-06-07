import Sidebar from "../../components/Sidebar";
import  "./about.css";
import Skill from "./comp/skill";
import Whoami from "./comp/whoami";
function  About() {
  return (
    <div>
        <Sidebar />
        <Whoami />
        <Skill />
    </div>
  );
}
export default About;
