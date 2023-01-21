import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/About.module.css'
import data from '../data/employees.json'
import { useState } from 'react'
import Card1 from '../components/Card1'
import Link from 'next/link'

export default function About() {
    console.log(data)
    const [information, setInformation] = useState([...data])
    return (
        <>
        <div className={styles.code}>About Page</div>
        <main className={styles.main}>
            <div className={styles.description}></div>
         <div className={styles.grid}>
         <div className={styles.childA}>
            <div className={styles.pickle}>
            <div>Employee #1:</div>
            {
                information && information.map((info, about) => {
                    if (info.employeeName === "Steve Smith") {
                        return (
                            <Card1 key={about} 
                            employee={info.employeeName}
                            age={info.employeeAge}
                            degree={info.degree}
                            depart={info.department} 
                            colour="white" font="20px" />
                        )
                    }
                })
            }
            </div>
         </div>
         <div className={styles.childB}>
            <div className={styles.pickle}>
            <div>Employee #2</div>
            {
                information && information.map((info, about) => {
                    if (info.employeeName === "Sandy Bitters") {
                        return (
                            <Card1 key={about} 
                            employee={info.employeeName} 
                            age={info.employeeAge}
                            degree={info.degree} 
                            depart={info.department}
                            colour="white" font="20px" />
                        )
                    }
                })
            }
            </div>
         </div>
         <div className={styles.childC}>
            <div className={styles.pickle}>
            <div>Employee #3</div>
            {
                information && information.map((info, about) => {
                    if (info.employeeName === "Randy Botts") {
                        return (
                            <Card1 key={about} 
                            employee={info.employeeName} 
                            age={info.employeeAge}
                            degree={info.degree} 
                            depart={info.department}
                            colour="white" font="20px" />
                        )
                    }
                })
            }
            </div>
         </div>
         </div>
        </main>
        <script>
        var up = document.getElementById('GFG_UP');
        up.innerHTML = "Click on the button to add image element";
        var down = document.getElementById('GFG_DOWN');
          
        function GFG_Fun() {
            var img = document.createElement('img');
            img.src =
'https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png';
            document.getElementById('body').appendChild(img);
            down.innerHTML = "Image Element Added.";
        </script>
            
         
            
            </>
               )
}