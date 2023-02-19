import React from "react";
import styles from './style.module.css'
import { Leaderboard } from "./database";

export default function Profile() {
    return(
        <div id="profile">
<div className={styles.topRanked}>
    {Leaderboard.sort((a, b ) => b.powerRanking - a.powerRanking ).slice(0,3).map((value, index) =>(
                <div className={styles.topFlex} key={index}>
                    <div className={styles.topItem}>
                        <img src={value.img} alt=""/>
                        <div className={styles.topInfo}>
                            <h3 className={styles.topName}>{value.name}</h3>
                            <span className={styles.topStack}>{value.stack}</span>
                        </div>
                    </div>
                    <div className={""}>
                        <span className={styles.topScore}>{value.powerRanking}</span>
                    </div>
                </div>
    ))}
</div>
        <div className={styles.downRanking}>
           {Leaderboard.sort((a, b ) => b.powerRanking - a.powerRanking ).slice(3).map((value, index) =>(
                <div className={styles.flex} key={index}>
                    <div className={styles.item}>
                        <img src={value.img} alt=""/>
                        <div className={styles.info}>
                            <h3 className={styles.name}>{value.name}</h3>
                            <span className={styles.stack}>{value.stack}</span>
                        </div>
                    </div>
                    <div className={styles.mark}>
                        <span className={styles.score}>{value.powerRanking}</span>
                    </div>
                </div>
                ))}
        </div>
           </div>
    ) 
}