import Button from '../../components/Button/index'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import Logo from '../../assets/logo-tana-cesta.png';



const Header = () => {
    return (
        <div className="flex flex-col w-full md:w-[95%] mt-6 md:mt-10 lg:mt-20 items-center">
            <div className='lg:hidden w-[200px] lg:w-[350px]'>
            <img src={Logo} alt="Logo Tá na Cesta" />
        </div>
            <span className="text-secondaryGreen font-outfit font-extrabold text-xl md:text-xl mt-10 lg:mt-0">PEÇA ONLINE</span>
            <span className="font-caveat text-[40px] md:text-[60px] lg:text-[100px] text-center">Frutas, Legumes e Verduras fresquinhos todos os dias!</span>
            <span className="mt-6 font-outfit font-semibold text-md text-center">
                Praticidade e conforto: Compre online e receba em casa
            </span>
            <div className="flex flex-col md:flex-row font-outfit font-semibold gap-6 mt-6 text-[14px] lg:text-[16px] text-darkFadeColor text-center">
                <span className="ring-4 ring-primaryDarkLight px-4 py-3 rounded-xl hover:ring-darkFadeColor">
                    Ingredientes frescos e de qualidade
                    </span>
                <span className="ring-4 ring-primaryDarkLight px-4 py-3 rounded-xl hover:ring-darkFadeColor">
                    Entrega rápida e eficiente
                    </span>
                <span className="ring-4 ring-primaryDarkLight px-4 py-3 rounded-xl hover:ring-darkFadeColor">
                    Mais saúde e sabor para você
                    </span>
            </div>
            <div className='mt-10 h-10'>
                <Button 
                label="Peça agora e experimente"
                className="bg-gradient-to-r from-primaryGreen via-primaryGreen to-blackNormal w-full font-outfit font-semibold px-4 md:px-8 py-4 
                text-whiteNormal rounded-xl hover:text-white hover:border-4 hover:border-scale-105"
                />
            </div>
            <div className='flex flex-row mt-20 text-5xl gap-4'>
            <FaInstagram />
            <FaFacebookSquare />
            <FaTwitterSquare />
            </div>
            
        </div>
    )
}

export default Header