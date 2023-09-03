'use client'

import SectionTitle from "./components/SectionTitle";
import Banner from "./components/homePage/Banner";
import PropularProperty from "./components/homePage/PropularProperty";
import RecentPublished from "./components/homePage/RecentPublished";


export default function Home() {
  return (
    <main className="">
      <div>
   
        <div>
          <Banner></Banner>
          <SectionTitle title={'Popular Property'} subTitle={'Now You choose by your wish'}> </SectionTitle>
          <PropularProperty></PropularProperty>
          <RecentPublished></RecentPublished>
         
        </div>
      </div>
    </main>
  )
}
