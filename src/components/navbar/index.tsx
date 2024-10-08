'use client'

import { Fragment } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { Input } from '@/components/ui/input'
import { store } from '@/store'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '../ui/button'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <Fragment>
      {!pathname.includes('kiosk') && (
        <NavigationMenuPrimitive.Root className='flex items-center justify-between'>
          <NavigationMenuPrimitive.Item>
            <NavigationMenuPrimitive.Trigger>
              <Button variant='ghost' asChild>
                <Link href='/'>Home</Link>
              </Button>
              <Button variant='ghost' asChild>
                <Link href='/kiosk/all'>Kiosk mode</Link>
              </Button>
            </NavigationMenuPrimitive.Trigger>
          </NavigationMenuPrimitive.Item>
          {!pathname.includes('showcase') && (
            <NavigationMenuPrimitive.Item>
              <div className='flex items-end justify-end'>
                <div className='flex w-full max-w-sm items-end space-x-2'>
                  <Select
                    onValueChange={(value) => {
                      store.setState((prev) => ({ ...prev, filter: value }))
                    }}
                  >
                    <SelectTrigger className='w-[180px]'>
                      <SelectValue placeholder='Filter on' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Groups</SelectLabel>
                        <SelectItem value='all'>All</SelectItem>
                        <SelectItem value='student'>Student</SelectItem>
                        <SelectItem value='researcher'>Researcher</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Input
                    type='text'
                    id='search'
                    onChange={(e) => {
                      store.setState((prev) => ({
                        ...prev,
                        search: e.target.value,
                      }))
                    }}
                    placeholder='Search'
                  />
                </div>
              </div>
            </NavigationMenuPrimitive.Item>
          )}
        </NavigationMenuPrimitive.Root>
      )}
    </Fragment>
  )
}
