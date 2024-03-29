import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import PostBox from '../components/PostBox'
import Feed from '../components/Feed'

const Home: NextPage = () => {
  return (
    <div className="my-7 mx-auto max-w-5xl">
      <Head>
        <title>Reddit is coming ... </title>
      </Head>
      
      {/* Post Box */}
      <PostBox />

      <div className='flex'>
        <Feed />
      </div>
    </div>
  )
}

export default Home
