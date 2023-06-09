import Image from "next/image";
import { IoMdMail, } from "react-icons/io";
import Logo from '../../public/icons/logo.svg';

const Footer = () => {
    return (
        <footer id="footer" className="flex flex-row lg:footer items-center p-4 bg-slate-50 text-neutral-content justify-around">
            <div className="flex flex-row items-center lg:items-center lg:grid-flow-col">
                <Image alt="G" height={40} width={40} color="gray" src={Logo} />
                <p className="text-xs pl-2 text-gray-700">© {new Date().getFullYear()} | Grupo 11</p>
            </div>
            <div className="flex flex-row lg:grid-flow-col">
                <a href="mailto:g.silva48@pucpr.edu.br" className="mr-2">
                    <IoMdMail size={18} color="gray" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;