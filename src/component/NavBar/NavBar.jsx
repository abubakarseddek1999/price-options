import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu,AiFillCloseCircle } from 'react-icons/Ai';

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Dashboard', path: '/dashboard' }
    ];



    return (
        <nav className="text-b p-6  bg-yellow-200">
            <div className="md:hidden" onClick={()=>setOpen(!open)}>
                {
                    open === true ? <AiFillCloseCircle/>: <AiOutlineMenu className="text-2xl " />
                }
               

            </div>
            <ul className={`md:flex duration-1000 absolute md:static
            ${open ? 'top-16':'hidden'}
            bg-yellow-200 px-6`}>
                {
                    routes.map(route => <Link key={route.id}
                        route={route}></Link>)
                }
            </ul>

        </nav>
    );
};

export default NavBar;