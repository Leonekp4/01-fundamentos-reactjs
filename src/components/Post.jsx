import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>

                    <Avatar src="https://avatars.githubusercontent.com/u/155823563?v=4" />

                    {/*
                    Foi substituido pela compodente "Avatar", que será utilizado em mais de um lugar.

                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/155823563?v=4" /> */}

                    <div className={styles.authorInfo}>
                        <strong>Leone Santana</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="23 de Outubro ás 22:23h" dateTime='2024-10-23 22:23:08'>Públicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 <a href="">jane.design/doctorcare</a></p>
                <p>
                    <a href="">#novoprojeto</a>{' '}
                    <a href="">#nlw</a>{' '}
                    <a href="">#rocketseat</a>
                </p>

            </div>

            <form className={styles.commentForm}>
                <strong>Deixe o seu feedback</strong>

                <textarea 
                    placeholder='Deixe um commentário'
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}