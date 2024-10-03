'use client'
import React, { useState } from 'react'
import QrCode from 'react-qr-code'
import { IoMdSettings } from 'react-icons/io'
import Link from 'next/link'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { Button } from '@/components/ui/button'
import { IContent } from '@/types/content'

export default function Settings({ article }: { article: IContent }) {
  const [showQRCode, setShowQRCode] = useState(false)
  const [showMetaData, setShowMetaData] = useState(false)

  const generateQRCode = () => {
    setShowQRCode(true)
  }

  const closeModal = () => {
    setShowQRCode(false)
  }

  const generateMetaData = () => {
    setShowMetaData(true)
  }

  const closeMetaData = () => {
    setShowMetaData(false)
  }

  return (
    <>
      <div className='absolute right-0 top-0'>
        <DropdownMenu>
          <DropdownMenuTrigger className='text-4xl'>
            <IoMdSettings />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href={`/kiosk/${article.title}`}>Kiosk mode</Link>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={generateQRCode}>
              Generate QR Code
            </DropdownMenuItem>
            <DropdownMenuItem onClick={generateMetaData}>
              Metadata
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {showQRCode && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'
          onClick={closeModal}
        >
          <div
            className='rounded-lg bg-white p-6 shadow-lg'
            onClick={(e) => e.stopPropagation()}
          >
            <QrCode value={document?.location?.href} />
            <Button className='mt-2.5 w-full' onClick={closeModal}>
              Close
            </Button>
          </div>
        </div>
      )}
      {showMetaData && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'
          onClick={closeMetaData}
        >
          <div
            className='rounded-lg bg-white p-6 shadow-lg'
            onClick={(e) => e.stopPropagation()}
          >
            <section>
              <p className='text-black'>Tags: {article.tags.join(',')} </p>
              <p className='text-black'>Date of publication: {article.date} </p>
            </section>
            <Button className='mt-2.5 w-full' onClick={closeMetaData}>
              Close
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
