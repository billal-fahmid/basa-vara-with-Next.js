'use client'

import SectionTitle from "./components/SectionTitle";
import Banner from "./components/homePage/Banner";
import PropularProperty from "./components/homePage/PropularProperty";


export default function Home() {
  return (
    <main className="">
      <div>
   
        <div>
          <Banner></Banner>
          <SectionTitle title={'Popular Property'} subTitle={'Now You choose by your wish'}> </SectionTitle>
          <PropularProperty></PropularProperty>
        </div>
      </div>
    </main>
  )
}
