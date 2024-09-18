'use client'
import React, { useState } from 'react';
import QrCode from 'react-qr-code';
import { usePathname } from 'next/navigation';

import { IoMdSettings } from 'react-icons/io'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button"

export default function Settings() {

  const getPath = usePathname();

  const domain = 'http://localhost:3000'; // See if this can be dynamic
  const url = `${domain}${getPath}`;

  const [showQRCode, setShowQRCode] = useState(false);

  const generateQRCode = () => {
      setShowQRCode(true);
  }

  const closeModal = () => {
    setShowQRCode(false);
}

  return (
    <>
        <div className='absolute top-0 right-0'>
            <DropdownMenu>
                <DropdownMenuTrigger className='text-4xl'><IoMdSettings /></DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>
                        Kiosk mode
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={generateQRCode}>
                        Generate QR Code
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
        {showQRCode && 
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50' onClick={closeModal}>
                    <div className='bg-white p-6 rounded-lg shadow-lg' onClick={(e) => e.stopPropagation()}>
                        <QrCode value={url} />
                        <Button className='w-full mt-2.5' onClick={closeModal}>Close</Button>
                    </div>
                </div>
            }
    </>
  )
}