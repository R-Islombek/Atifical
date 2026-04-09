import Logo from "./images/logo.png";

const Header = () => {
    return (
        <header className="bg-[hsla(219,84%,7%,1)]">
            <div className="container mx-auto p-8 flex items-center justify-between">
                <a href="/" aria-label="Bosh sahifa">
                    <img src={Logo} alt="Sayt logotipi" className="pointer w-80 h-14"  />
                </a>

                <nav aria-label="Asosiy navigatsiya">
                    <ul className="flex gap-10">
                        <li><a className="text-white hover:text-[#3A68B8] transition-colors" href="/">Home</a></li>
                        <li><a className="text-white hover:text-[#3A68B8] transition-colors" href="/about">About</a></li>
                        <li><a className="text-white hover:text-[#3A68B8] transition-colors" href="/services">Services</a></li>
                        <li><a className="text-white hover:text-[#3A68B8] transition-colors" href="/blog">Blog</a></li>
                        <li><a className="text-white hover:text-[#3A68B8] transition-colors" href="/contact">Contact</a></li>
                    </ul>
                </nav>

                <span>
                    <a className="px-10 py-2 bg-[#3A68B8] rounded-xl text-white hover:bg-[#2c5090] transition-colors" href="/signin">Sign In</a>
                </span>
            </div>
        </header>
    )
}

export default Header