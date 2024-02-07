// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './qcomps/profile_mistake'
import MyComp from "@/pages/qcomps/firstcomp"
import Bio from "./qcomps/bios"
import TodoList from "@/pages/qcomps/todos";
import Gallery from "@/pages/qcomps/gallery_props";


export default function Home() {
  return (
    <div className={styles.main}>
        <Gallery />
    </div>
  )
}
