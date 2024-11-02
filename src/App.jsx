import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/sidebar"

import styles from './App.module.css'

import './global.css'
import { Avatar } from "./components/Avatar"

// Adicionando ineratividade nos segintes elementos:
// author: {avatar_url: "", name: "", role: "" }
//publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      AvatarUrl: 'https://avatars.githubusercontent.com/u/155823563?v=4',
      name: 'Leone Santana',
      role: 'Web Developer'
    },

    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW  Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
      { type: 'link', content:  '👉 jane.design/doctorcare', },
    ],

    publishedAt:  new Date('2024-10-30 19:55:20'),

  },

  {
    id: 2,
    author: {
      AvatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocktseat'
    },

    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW  Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
      { type: 'link', content:  '👉 jane.design/doctorcare', },
    ],

    publishedAt:  new Date('2024-10-31 16:35:59'),
    
  },
];

// Iteração

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
             
        <Sidebar />

        <main>

          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}

          {/* 
          O "Post" foi excluido para adionar o "cost posts"
          <Post 
            author="Leone Santana" 
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum quasi exercitationem     veritatis. Voluptate iusto officia tenetur id? Vero, ab suscipit nesciunt ullam libero delectus vitae     beatae et rem nam assumenda!" 
          />

          <Post 
            author="Gabriel Buzzi"
            content="Um novo poste muito legal"
          /> */}
        </main>

      </div>     
    </div>
  )
}

