'use client'
import React, { use, useState } from 'react';
import QrCode from 'react-qr-code';
import { usePathname } from 'next/navigation';

import { IoMdSettings } from 'react-icons/io'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"


export default function Settings() {

  const getPath = usePathname();
  console.log(getPath);

  const domain = 'https://localhost:3000';
  const url = `${domain}/${getPath}`;

  const [showQRCode, setShowQRCode] = useState(false);

  const generateQRCode = () => {
      setShowQRCode(true);
  }

  return (
    <div className='flex justify-end'>
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
        {showQRCode && <QrCode value={url} />}
    </div>
)
}