import React, { useState } from "react";
import PostLand from "./PostLand";
import PostHouse from "./PostHouse";
import PostedProperties from "./PostedProperties";
import ShowHouses from "./ShowHouses";
import ShowLands from "./ShowLands";
import Contacts from "./Contacts";
import Wishlist from "./Wishlist";
import Messages from "./Messages";
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
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  HomeIcon,
  UserIcon,
  ArrowUpIcon,
  HomeModernIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

 
export default function UserDashboard() {
    const [open, setOpen] = useState(0);
    const [activeComponent, setActiveComponent] = useState(null);
  
    const handleOpen = (value) => {
      setOpen(open === value ? 0 : value);
    };
  
    const handleComponentChange = (componentName) => {
      setActiveComponent(componentName);
    };
 
    return (
        <div className="relative h-full w-full"  >
        <div > 
        <Card className="fixed inset-0 max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5  ">
        <div className="mb-2 p-4 ">
            <Typography variant="h5" color="blue-gray">
            Dream Home
            </Typography>
        </div>
        <List>
            <Accordion
            open={open === 1}
            icon={
                <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
                />
            }
            >
            <ListItem className="p-0" selected={open === 1}>
                <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                <ListItemPrefix>
                    <HomeIcon className="h-5 w-5" />
                </ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto font-normal">
                    Properties
                </Typography>
                </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
                <List className="p-0">
                <ListItem onClick={()=>handleComponentChange("ShowHouses")}>
                    <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Houses
                </ListItem>
                <ListItem onClick={()=>handleComponentChange("ShowLands")}>
                    <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Lands
                </ListItem>
                </List>
            </AccordionBody>
            </Accordion>
            <Accordion
            open={open === 2}
            icon={
                <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
                />
            }
            >
            <ListItem className="p-0" selected={open === 2}>
                <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
                <ListItemPrefix>
                    <UserIcon className="h-5 w-5" />
                </ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto font-normal">
                    Agents
                </Typography>
                </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
                <List className="p-0">
                <ListItem>
                    <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Architects
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Contractors
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Interior Designers
                </ListItem>
                </List>
            </AccordionBody>
            </Accordion>
            <Accordion
            open={open === 3}
            icon={
                <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
                />
            }
            >
            <ListItem className="p-0" selected={open === 3}>
                <AccordionHeader onClick={() => handleOpen(3)} className="border-b-0 p-3">
                <ListItemPrefix>
                    <ArrowUpIcon className="h-5 w-5" />
                </ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto font-normal">
                    Post Property
                </Typography>
                </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
                <List className="p-0">
                <ListItem onClick={()=>handleComponentChange("PostLand")}>
                    <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Land
                </ListItem>
                <ListItem onClick={()=>handleComponentChange("PostHouse")}>
                    <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    House
                </ListItem>
                </List>
            </AccordionBody>
            </Accordion>
            <hr className="my-4 border-blue-gray-50" />
            <ListItem onClick={() => handleComponentChange("PostedProperties")}>
            <ListItemPrefix>
                <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Posted Properties
            <ListItemSuffix>
                <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
            </ListItemSuffix>
            </ListItem>
            <ListItem onClick={() => handleComponentChange("Wishlist")}>
            <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            WishList
            <ListItemSuffix>
                <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
            </ListItemSuffix>
            </ListItem>
            <ListItem onClick={() => handleComponentChange("Contacts")}>
            <ListItemPrefix>
                <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Contacts
            <ListItemSuffix>
                <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
            </ListItemSuffix>
            </ListItem>
            <ListItem onClick={() => handleComponentChange("Messages")}>
            <ListItemPrefix>
                <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Messages
            <ListItemSuffix>
                <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
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
            {activeComponent === "ShowLands" && <ShowLands/>}
            {activeComponent === "ShowHouses" && <ShowHouses />}
            {activeComponent === "PostLand" && <PostLand />}
            {activeComponent === "PostHouse" && <PostHouse />}
            {activeComponent === "PostedProperties" && <PostedProperties />}
            {activeComponent === "Contacts" && <Contacts />}
            {activeComponent === "Wishlist" && <Wishlist />}
            {activeComponent === "Messages" && <Messages />}
        </div>
        </div>
    );
}