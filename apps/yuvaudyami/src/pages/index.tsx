import Head from 'next/head'
import { useEffect } from 'react'
import Hero from '../components/home/Hero'
import Blog from '../components/home/Blog'
import Marque from '../components/programs/Marque'
import ProgramCard from '../components/home/ProgramCard'
import { Accordion } from '@material-tailwind/react'
import AccordionTest from '../components/home/AccordianTest'
import Notice from '../components/home/Notice'
import { useFetcher } from '../services/api'

export default function Home() {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const url = 'course'
  //     const result = await useFetcher({ method: 'GET', url })
  //     console.log('result', result)
  //   }
  //   fetchData()
  // }, [])

  return (
    <div>
      <Hero />
      <Notice />
      <Blog />
      <Marque />
      <ProgramCard />
      <AccordionTest />
    </div>
  )
}
