import React,{useContext,useEffect,useState} from 'react';
import {SidebarContext} from '../contexts/SidebarContext';
import {CartContext} from '../contexts/CartContext';
import {BsBag} from 'react-icons/bs';
import {Link} from 'react-router-dom';
import Logo from '../img/logo.svg';

const Header = () => {
  const[isActive,setIsActive]=useState(false);
  const {isOpen,setIsOpen}=useContext(SidebarContext);
  const {itemAmount}=useContext(CartContext);
  //event listener
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY> 60 ? setIsActive(true) :setIsActive(false);
    });
  });
  return (
 <header className={`${isActive?'bg-white py-4 shadow-md' : 'bg-white py-4'} fixed w-full z-10 transition-all`}>
    <div className='container mx-auto flex items-center justify-between h-full'>
      <Link to={'/'}>
        <div className=''>
          <img className='w-[40px]' src={Logo} alt='' />
        </div>
      </Link>
      {/*cart*/}
      <div onClick={()=>setIsOpen(!isOpen)}
        className='cursor-pointer flex'>
      <BsBag className='text-2xl relative'/>
      </div>
      <div className='bg-red-500 absolute -bottom-3 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center '>
        {itemAmount}
      </div>
   </div>
 </header>);
};

export default Header;
