import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import data from '../data/education.json'
import { useState } from 'react'
import Card from '../components/card'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  console.log(data);
  const [information, setInformation] = useState ([...data])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="pages/style.css"></link>
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            <Link href="about">About</Link>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
            </a>
          </div>
        </div>

        <div className={styles.grid}>

          <div className='parent'>Business Degrees:</div>
         {
          information && information.map((info, index) => {
            if(info.department.toLowerCase() === "business") {
            return(
              <Card key={index} degree={info.degree} colour="red" font="10px"/>
            )
            }
          })
         }
         <div>Computing Degrees:</div>
         {
          information && information.map((info, index) => {
            if(info.department.toLowerCase() === "computing") {
            return(
              <Card key={index} degree={info.degree} colour="blue" font="30px"/>
            )
            }
          })
         }

        </div>
      </main>
    </>
  )
}
