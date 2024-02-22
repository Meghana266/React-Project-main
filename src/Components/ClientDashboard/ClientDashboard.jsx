import React, { useState } from "react";
import Profile from "./Profile";
import ContactRequest from "./ContactRequest";
import ContactApproved from "./ContactApproved";
import ChangePassword from "./ChangePassword";
import Notifications from "./Notifications";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  KeyIcon,
  BellAlertIcon,
  PhoneArrowDownLeftIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

 
export default function ClientDashboard() {
    const [open, setOpen] = useState(0);
    const [activeComponent, setActiveComponent] = useState(null);
  
    const handleOpen = (value) => {
      setOpen(open === value ? 0 : value);
    };
  
    const handleComponentChange = (componentName) => {
      setActiveComponent(componentName);
    };

    const navigation = [
        { name: 'Dashboard', href: '#', current: true },
        { name: 'Team', href: '#', current: false },
        { name: 'Projects', href: '#', current: false },
        { name: 'Calendar', href: '#', current: false },
      ]
      
      function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
      
 
    return (
        
        <div className="relative h-full w-full"  >
            
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>

        <div > 
        <Card className="fixed inset-0 max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5  ">
        <div className="mb-2 p-4 ">
            <Typography variant="h5" color="blue-gray">
            Dream Home
            </Typography>
        </div>
        <List>
            <hr className="my-4 border-blue-gray-50" />
            <ListItem onClick={()=> handleComponentChange("Profile")}>
            <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Profile
            <ListItemSuffix>
                <Chip value="" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
            </ListItemSuffix>
            </ListItem>
            <ListItem onClick={()=> handleComponentChange("ContactRequest")}>
            <ListItemPrefix>
                <PhoneArrowDownLeftIcon className="h-5 w-5" />
            </ListItemPrefix>
            Contact Request
            <ListItemSuffix>
                <Chip value="5" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
            </ListItemSuffix>
            </ListItem>
            <ListItem onClick={()=> handleComponentChange("ContactApproved")}>
            <ListItemPrefix>
                <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Contact Approved
            <ListItemSuffix>
                <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
            </ListItemSuffix>
            </ListItem>
            <ListItem onClick={()=> handleComponentChange("ChangePassword")}>
            <ListItemPrefix>
                <KeyIcon className="h-5 w-5" />
            </ListItemPrefix>
            Change Password
            <ListItemSuffix>
                <Chip value="" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
            </ListItemSuffix>
            </ListItem>
            <ListItem onClick={()=>handleComponentChange("Notifications")}>
            <ListItemPrefix>
                <BellAlertIcon className="h-5 w-5" />
            </ListItemPrefix>
            Notifications
            <ListItemSuffix>
                <Chip value="12" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
            </ListItemSuffix>
            </ListItem>
            <ListItem>
            <ListItemPrefix>
                <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
            </ListItem>
        </List>
        </Card>
        </div>
        <div className="w-3/4 p-4 " style={{marginLeft: '20rem'}}> 
        {activeComponent==="Profile" && <Profile />}  
        {activeComponent==="ContactRequest" && <ContactRequest />}    
        {activeComponent==="ContactApproved" && <ContactApproved />} 
        {activeComponent==="ChangePassword" && <ChangePassword />} 
        {activeComponent==="Notifications" && <Notifications />} 
        </div>
        </div>
    );
}