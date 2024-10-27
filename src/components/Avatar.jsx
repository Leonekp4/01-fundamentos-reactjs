import styles from './Avatar.module.css';

export function Avatar({ hasBorder = true, src }) {
    return (
        // <img className={styles.avatar} src={props.src} /> sem o uso da componente
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
             src={src} 
        />
    );
}

// {props.hasBorder ? styles.avatarWithBorder : styles.avatar}
// Foi utilizado um booleado  para verificar se o componente tem a borda ou não.
// const hasBorder = props.hasBorder !== false; para uso no booleano