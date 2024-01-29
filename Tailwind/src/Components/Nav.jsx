import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons'
import {navLinks, AnothernavLinks} from '../constants/index';
import { useState } from 'react';

const Nav = () => {
    const [toggle, settoggle] = useState(false);
  return (
    <header className=' padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container lg:pr-6'>
            <a href="/">
                <img src={headerLogo} alt="Logo" width={130} height={29}/>
            </a>
            <ul className=' flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {navLinks.map((items)=>(
                    <li key={items.label}>
                        <a href={items.href} className='fonts-montserrat leading-normal text-lg text-slate-gray' >
                            {items.label}
                        </a>
                    </li>
                ))}
            </ul>
            <ul  className='flex justify-center items-center gap-1 max-lg:hidden'>
                    <li className='fonts-montserrat leading-normal text-lg cur text-slate-gray'>
                        <a href={AnothernavLinks[0].href}>{AnothernavLinks[0].label}</a>
                    </li>
                    <li className='fonts-montserrat leading-normal text-lg cur text-slate-gray'>
                        <a href={AnothernavLinks[1].href}>/ {AnothernavLinks[1].label}</a>
                    </li>
            </ul>
            <div className=' lg:hidden  block relative' ><img src={hamburger} alt="" width={25} height={25} onClick={()=> {settoggle(!toggle)}} />
            <div className= {`${toggle?`DropDown`:`DropDownHide`}`}>
            <ul onClick={()=> {settoggle(!toggle)}} className=' flex-1 flex  flex-col gap-4 items-center'>
                {navLinks.map((items)=>(
                    <li key={items.label}>
                        <a href={items.href} className='fonts-montserrat leading-normal text-lg text-black hover:text-gray-500 cursor-pointer' >
                            {items.label}
                        </a>
                    </li>
                ))}
                <ul  className=' flex-1 flex  flex-col gap-4 items-center '>
                    <li className='fonts-montserrat leading-normal text-lg text-black  hover:text-gray-500 cursor-pointer' href={AnothernavLinks[0].href} >{AnothernavLinks[0].label}</li>
                    <li className='fonts-montserrat leading-normal text-lg text-black  hover:text-gray-500 cursor-pointer' href={AnothernavLinks[1].href} > {AnothernavLinks[1].label}</li>
            </ul>
            </ul>
            </div>
            </div>
        </nav>
        
    </header>
  )
}

export default Nav