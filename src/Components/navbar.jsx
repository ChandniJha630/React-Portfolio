import  cursor from '../assets/cursor.png'
function Navbar(){
  return(
    <>
  
        <ul className='flex nav-text text-xl justify-end gap-12 justify-items-center butterfly'>
        <li className="hover:text-white hover:shadow-xl hover:backdrop-brightness-200 pl-5 pr-5 pt-5 pb-5"> About</li>
        <li className="hover:text-white hover:shadow-xl hover:backdrop-brightness-200 pl-5 pr-5 pt-5 pb-5">Project</li>
        <li className="hover:text-white hover:shadow-xl hover:backdrop-brightness-200 pl-5 pr-5 pt-5 pb-5">Skills</li>
        <li className="hover:text-white hover:shadow-xl hover:backdrop-brightness-200 pl-5 pr-5 pt-5 pb-5">Blogs</li>
        <li className="hover:text-white hover:shadow-xl hover:backdrop-brightness-200 pl-5 pr-5 pt-5 pb-5">Contact</li>
        </ul>
       
    </>
  );
}
export default Navbar;