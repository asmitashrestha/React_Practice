import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import Project from './components/Classone'


let sum=2+1


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <header>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">about</a></li>
          <li><a href="#">contact</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <div>
        sum:{sum}
      </div>
      <div className="projects">
       <Project title='one' desc="desc-one" image='https://picsum.photos/300/400'/>
       <Project title='two' desc="desc-two" image='https://picsum.photos/300/400'/>
       <Project title='three' desc="desc-three" image='https://picsum.photos/300/400'/>
       <Project title='four' desc="desc-four" image='https://picsum.photos/300/400'/>
      </div>
    </main>
  </React.StrictMode>,
)
