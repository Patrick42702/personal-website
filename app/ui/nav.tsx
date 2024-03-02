function Menu() {
    const menu = [
        { name: "About", link: "/" },
        { name: "Projects", link: "#projects" },
        { name: "Skills", link: "#skills" },
        { name: "Contact", link: "#contact" },
    ];

    return (
        <ul className="md:flex md:items-center
        md:pb-0 pb-12 md:static
        md:z-auto z-[-1]
        left-0 w-full md:w-auto
        md:pl-0 transition-all ">
            {menu.map(item => (
                <li
                    key={item.name}
                    className="text-center md:ml-8">
                    <a href={item.link}
                        className=""
                    >
                        {item.name}
                    </a>
                </li>
            ))}
        </ul>
    )
}

export function Nav() {
    return (
        <nav>
            <div className='md:flex items-center justify-between
             bg-cyan-900 px-20 py-8 md:h-[100px]'>
                <h1 className='text-3xl flex-1'>Patrick Muller</h1>
                <Menu />
            </div>
        </nav>

    )
}