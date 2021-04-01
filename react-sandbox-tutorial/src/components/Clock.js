import React from 'react'

function Clock() {


    const date = new Date()
    const dateHour = date.getHours()
    const dateMinute = date.getMinutes()

    let time

    const styles = {
        fontSize:25,
    }


    if (dateHour <= 12) {
        time = 'Good Morning!'
        styles.color = '#F1FA98'

    } else if (dateHour >= 12 && time < 20) {
        time = 'Good Afternoon'
        styles.color = '#BABA31'

    } else {
        time = 'Good Night'
        styles.color = '#FAC3B0'
    }


    return(
        <div>
        <h1 style={styles}>{time}</h1>
        <p>The time is {dateHour}:{dateMinute}</p>
        </div>
    )

}

export default Clock