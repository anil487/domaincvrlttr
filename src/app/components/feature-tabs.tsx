'use client'
 
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const data = [
    {href:"/tools/hostingplan",title:"Hosting Plans"},
    {href:"/tools/vatcal",title:"VAT Calculator"},
    {href:"/tools/ipchecker",title:"IP Checker"},

]
const FeatureTabs = () => {
    const pathname = usePathname()

  return (
   
    <div>
        {data.map((item,index)=>
        item.href !== pathname &&
        <Link href={item.href} key={index}><Button className='bg-blue-600 hover:bg-blue-800'>{item.title}</Button></Link>
        )
        }
    </div>
    
  )
}

export default FeatureTabs