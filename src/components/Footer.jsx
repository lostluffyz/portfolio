import { FaGithub, FaInstagram, FaReact } from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri"

const links = [
    { href: 'https://react.dev/', icon: <FaReact/>},
    { href: 'https://github.com/lostluffyz', icon: <FaGithub/>},
    { href: 'https://instagram.com/lostzangetsu', icon: <FaInstagram/>},
    { href: 'https://tailwindcss.com/', icon: <RiTailwindCssFill/>},
]

const Footer = () => {
  return (
    <footer className='w-screen bg-violet-300 py-4 text-black'>
        <div className='container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row'>
            <p className='text-center text-sm md:text-left'>
                &copy; lostluffyz. All rights reserved
            </p>

            <div className='flex justify-center gap-4 md:justify-start'>
                {links.map((link) => (
                    <a key={link} href={link.href} target="_blank" rel="noopener noreferrer" className="text-black transition-colors duration-500 ease-in-out hover:text-white">
                        {link.icon}
                    </a>
                ))}
            </div>

            <a href="https://github.com/lostluffyz" className="text-center text-sm hover:underline md:text-right">
                Give it a Star ⭐
            </a>
        </div>
    </footer>
  )
}

export default Footer