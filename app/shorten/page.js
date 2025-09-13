"use client"
import React from 'react'
import { useState } from "react"
import Link from 'next/link'

const shorten = () => {
  const [url, seturl] = useState()
  const [shorturl, setshorturl] = useState()
  const [generated, setGenerated] = useState("")

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shorturl": shorturl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        seturl("")
        setshorturl("")
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
        console.log(result)
        alert(result.message)

      })
      .catch((error) => console.error(error));
  }



  return (
    <div className='mx-auto max-w-lg bg-white text-black my-16 p-8 rounded-lg flex flex-col gap-4 shadow-xl'>
      <h1 className='font-bold text-2xl'>Generate your short URL's</h1>
      <div className='flex flex-col gap-2'>
        <input type="text" value={url} placeholder='Enter your URL' className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none" onChange={e => { seturl(e.target.value) }} />
        <input type="text" value={shorturl} className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none" placeholder='Enter preferred short URL' onChange={e => { setshorturl(e.target.value) }} />
        <button onClick={generate} className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">Generate</button>
      </div>

      {generated && <>
        <span className='font-bold text-lg'>Your Link</span> <code><Link target="_blank" href={generated}>{generated}</Link> 
      </code></> }
    </div>
  )
}

export default shorten
