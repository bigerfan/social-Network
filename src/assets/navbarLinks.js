import {MdOutlineDynamicFeed} from 'react-icons/md'
import {CiCirclePlus} from 'react-icons/ci'
import { IoIosSearch } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5";

export const navbarLinks = [
    {
        pathName :'/feed',
        navName:'Feed',
        icon:<MdOutlineDynamicFeed/>
    },
    {
        pathName :'/create',
        navName:'Create',
        icon:<CiCirclePlus/>

    },
    {
        pathName :'/search',
        navName:'Search',
        icon:<IoIosSearch/>
    },

]