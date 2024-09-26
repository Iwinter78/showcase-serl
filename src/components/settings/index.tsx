'use client'
import React, { useState } from 'react'
import QrCode from 'react-qr-code'
import { IoMdSettings } from 'react-icons/io'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { Button } from '@/components/ui/button'

export default function Settings() {
  const [showQRCode, setShowQRCode] = useState(false)

  const generateQRCode = () => {
    setShowQRCode(true)
  }

  const closeModal = () => {
    setShowQRCode(false)
  }

  return (
    <>
      <div className='absolute right-0 top-0'>
        <DropdownMenu>
          <DropdownMenuTrigger className='text-4xl'>
            <IoMdSettings />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Kiosk mode</DropdownMenuItem>
            <DropdownMenuItem onClick={generateQRCode}>
              Generate QR Code
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
    </>
  )
}
