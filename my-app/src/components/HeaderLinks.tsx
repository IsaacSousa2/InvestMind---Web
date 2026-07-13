export default function HeaderLinks(){

    return(
        <div>
            <nav className="flex flex-col gap-4 text-(--link) font-medium text-sm md:flex-row">
                <a href="aparehos" className="hover:text-white transition duration-300 ease-in-out cursor-pointer">Sobre nós</a>
                <a href="aparehos" className="hover:text-white transition duration-300 ease-in-out cursor-pointer">Serviços</a>
                <a href="aparehos" className="hover:text-white transition duration-300 ease-in-out cursor-pointer">Contato</a>
            </nav>
        </div>
    );

}