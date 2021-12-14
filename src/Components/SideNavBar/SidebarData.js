import React from 'react'
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import {FaGraduationCap} from 'react-icons/fa'

export const SidebarData = [
    {
        title : 'Home',
        path: 'home',
        icon: <AiIcons.AiFillHome />,
        className: 'nav-text',
    },
    {
        title : 'About Me',
        path: 'about',
        icon: <BsIcons.BsFillInfoCircleFill />,
        className: 'nav-text',
    },
    {
        title : 'Experience',
        path: 'exp',
        icon: <BsIcons.BsCode />,
        className: 'nav-text',
    },
    {
        title : 'Education and Certtifications',
        path: 'edu',
        icon: <FaGraduationCap />,
        className: 'nav-text',
    },
    {
        title : 'Contact',
        path: 'contact',
        icon: <AiIcons.AiFillContacts />,
        className: 'nav-text',
    },
]