import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/155823563?v=4" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Leone Santana</strong>
                            <time title="23 de Outubro ás 22:23h" dateTime='2024-10-23 22:23:08'>Públicado cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar cometário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Apaludir <span>20</span>
                    </button>
                </footer>

            </div>
        </div>
    )
}