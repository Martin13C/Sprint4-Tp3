import { useTheme } from "../../context/ThemeContext";
import ThemeButton from "./ThemeButton"

function Modo() {
 const { toggleDarkMode } = useTheme();

    return (
        <div onClick={toggleDarkMode} className='bg-gray-100/80 dark:bg-gray-950 w-full h-[5vh] flex items-center justify-center backdrop-blur gap-3'>

            <h2 className='select-none text-gray-800 text-sm dark:text-gray-200 sm:text-base md:text-lg lg:text-xl '>
                Cambio Modo
            </h2>
            <ThemeButton />
        </div>
    )
}

export default Modo