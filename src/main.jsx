import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import Bodyimg from './components/Bodyimg'
import Header from './components/Header'
import Counter from './components/Counter'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <main>
      <Header/>
      <div className="Bodyimgs" style={{display:"flex",gap:'1'}}>
       <Bodyimg title='one' desc="desc-one" image='https://picsum.photos/300/400'/>
       <Bodyimg title='two' desc="desc-two" image='https://picsum.photos/300/400'/>
       <Bodyimg title='three' desc="desc-three" image='https://picsum.photos/300/400'/>
       <Bodyimg title='four' desc="desc-four" image='https://picsum.photos/300/400'/>
      </div>
      <Counter/>
    </main>
  </React.StrictMode>,
)
