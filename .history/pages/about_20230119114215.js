import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import data from '../data/employees.json'

export default function About() {
    return(
        <div>About page</div>
    )
}
<div className={styles.grid}>

<div>Business Degrees:</div>
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