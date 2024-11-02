import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'
import { useState } from 'react'


export function Post({ author, publishedAt, content }) {
    const [comments, setComments] = useState([
        'Poste muito bacana, hien?!'
    ])

    const [newCommentText, setNewCommentText] =  useState('')


    const publisheDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'hs'", {locale: ptBR })

    const publisheDateRelativeToNow = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true})

    function handleCreateNewComment() {
        event.preventDefault()
       
        setComments([...comments, newCommentText]);
        setNewCommentText('')
    }

    function handleNewCommentChange() {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Este campo é obrigatório')
    }

    function deleteComment(commenToDelete){
        const commentWithouDeletedOne = comments.filter(comment => {
            return comment !== commenToDelete
        })

        setComments(commentWithouDeletedOne);
    }

    const isNewCommentEmpty = newCommentText.length == 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>

                    <Avatar src={author.AvatarUrl} />

                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publisheDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publisheDateRelativeToNow}                        
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type == 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type == 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe o seu feedback</strong>

                <textarea 
                    name="comment"
                    placeholder='Deixe um commentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
               
                {comments.map(comment => {
                    return (
                        <Comment 
                            key={comment} 
                            content={comment} 
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>
        </article>
    )
}