import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import data from '../data/education.json'
import { useState } from 'react'
import Card from '../components/card'
import Link from 'next/link'

export default function About() {
    return(
        <div>About page</div>
    )
}
<div>Employees:</div>
{
information && information.map((info, about) => {
  if(info.employeeName.toLowerCase() === "Steve Smith") {
  return(
    <Card key={about} degree={info.degree} colour="red" font="10px"/>
  )
  }
})
}
<div>Computing Degrees:</div>
{
information && information.map((info, about) => {
  if(info.employeeName.toLowerCase() === "Sandy Bitters") {
  return(
    <Card key={about} degree={info.degree} colour="blue" font="30px"/>
  )
  }
})
};