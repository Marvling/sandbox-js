//Free Code Camp Youtube
//https://www.youtube.com/watch?v=DLX62G4lc44

import React from 'react'


import Header from './components/Header'
import MyInfo from './components/MyInfo'
import Footer from './components/Footer'


function MyApp() {
    return(
        <div>
        <Header />
        <MyInfo />
        <Footer />
        </div>
    )
}


/*
function MyApp() {
    return(
    <div>
        <input type="checkbox" id="horns" name="horns" />
        <label for="horns">Horns</label>
        <input type="checkbox" id="Borns" name="Borns" />
        <label for="Borns">Borns</label>
        <input type="checkbox" id="Corns" name="Corns" />
        <label for="Corns">Corns</label>
    </div>
   )
}
*/

export default MyApp