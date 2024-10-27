import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/sidebar"

import styles from './App.module.css'

import './global.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
             
        <Sidebar />

        <main>
          <Post 
            author="Leone Santana" 
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum quasi exercitationem     veritatis. Voluptate iusto officia tenetur id? Vero, ab suscipit nesciunt ullam libero delectus vitae     beatae et rem nam assumenda!" 
          />

          <Post 
            author="Gabriel Buzzi"
            content="Um novo poste muito legal"
          />
        </main>

      </div>     
    </div>
  )
}

