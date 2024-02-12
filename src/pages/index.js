// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './components/profile'
import List from './qcomps/list_keys_id'
import RecipeList from "./qcomps/recipes"
import MenuBar from "@/pages/qcomps/menuBar";
import Gallery from "@/pages/qcomps/state";

export default function Home() {
  return (
    <div className={styles.main}>
        <Gallery />
    </div>
  )
}
