import './App.css'
/// component imports
import Sidebar from './assets/components/Sidebar'
import { getImageUrl } from "./utils";
function App() {

  return (
    <section className="container">
      <Sidebar />
      <div className="content">
        <h1 className="title">Hi,我是Linnn</h1>
        <p className="description">
          我是一個完全自學的程式開發者，透過網路資源自學，
          嘗試開發一些有趣的小東西，雖然名次不怎麼樣，但也參加過一些競賽。目前的興趣是資安。
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
