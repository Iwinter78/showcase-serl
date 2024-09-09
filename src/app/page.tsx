import * as React from "react"
import Link from 'next/link'
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { cn } from "@/lib/utils"
import { Icon } from "lucide-react"

export default function Home() {
  return (
    <NavigationMenuPrimitive.Root className="flex">
      <NavigationMenuPrimitive.Item>
        <NavigationMenuPrimitive.Trigger className={navigationMenuTriggerStyle()}>
          <Link href="/index">
            Home
          </Link>
        </NavigationMenuPrimitive.Trigger>
      </NavigationMenuPrimitive.Item>
      <NavigationMenuPrimitive.Item>
      <div className="flex w-full max-w-sm items-end space-x-2">
        <Input type="search" placeholder="Search" />
        <Button type="submit">Search</Button>
      </div>
      </NavigationMenuPrimitive.Item>
    </NavigationMenuPrimitive.Root>
  )
}