import React from "react";
import styles from './style.module.css'
import Profile from "./Profile";


export default function Board() {
    return(
        <div className={styles.board}>
            <h1 className={styles.leaderboard}>Leaderboard</h1>

            <Profile></Profile>
        </div>


       
    )
}



// export default function Board() {
//     const handleClick = (event) =>{
//         console.log(event.target.value)

//     }
//     return(
        // <div className={styles.board}>
        //     <h1 className={styles.leaderboard}>Leaderboard</h1>

        //     <div className={styles.duration}>
        //         <button onClick={handleClick} data-id='3rd week'> 3rd week </button>
        //         <button onClick={handleClick} data-id='7th weeek'> 7th weeek </button>
        //         <button onClick={handleClick} datat-id='0'> All-Time</button>
        //     </div>
        //    <Profile></Profile>
//         // </div>
//     )
// }

// between(between)


// function between (leaderboard, between ){
//     const today =new Date();
//     const previous = new Date(today);
//     previous.setDate(previous.getDate() - 7);

//     let filter = leaderboard.filter(val => {
//         let userDate = new Date(val.date);
//         return previous <= userDate && today >= userDate;

//     })

//     console.log(filter)
// }