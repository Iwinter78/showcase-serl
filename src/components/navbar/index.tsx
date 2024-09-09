"use client";

import { Fragment } from "react";
import Link from 'next/link'
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { Input } from "@/components/ui/input"
import { store } from "@/store";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

export default function Navbar() {
    return (
        <Fragment>
            <NavigationMenuPrimitive.Root className="flex justify-between items-center">
                <NavigationMenuPrimitive.Item>
                    <NavigationMenuPrimitive.Trigger className={navigationMenuTriggerStyle()}>
                    <Link href="/">
                        Home
                    </Link>
                    </NavigationMenuPrimitive.Trigger>
                </NavigationMenuPrimitive.Item>
                <NavigationMenuPrimitive.Item>
                    <div className="flex items-end justify-end">
                        <div className="flex w-full max-w-sm items-end space-x-2">
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Filter on" />
                            </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Groups</SelectLabel>
                                        <SelectItem value="student">Student</SelectItem>
                                        <SelectItem value="teacher">Teacher</SelectItem>
                                        </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Input type="text" id='search' onChange={(e) => {
                                store.setState(prev => ({ ...prev, search: e.target.value }))
                            }} placeholder="Search"/>
                        </div>
                    </div>
                </NavigationMenuPrimitive.Item>
            </NavigationMenuPrimitive.Root>
        </Fragment>
    )
}