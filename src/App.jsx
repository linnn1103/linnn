import './App.css'
import Sidebar from './assets/components/Sidebar'
import { getImageUrl } from "./utils";
function App() {

  return (
    <section className="container">
      <Sidebar />
      <div className="content">
        <h1 className="title">Hi,我是1innn</h1>
        <p className="description">
        1innn 結合了 linnn 的發音和 1 的數字，代表者程式的背後都是由0和1組成的。
        象徵者我對程式的熱愛，也象徵者我對於程式的堅持。
        
        我是一個程式開發者、開源貢獻者、同時也是一個社群參與者。 
        參加過許多相關競賽，目前的興趣是資安。         
        </p>
      </div>
      <img
        src={getImageUrl("wife.png")}
        alt="Hero image of me"
        className="heroImg"
      />
    </section>
  )
}

export default App
