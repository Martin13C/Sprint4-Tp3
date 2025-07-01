import React from 'react'

function MsjConfirmacion({ msjConfirmar, msjCancelar }) {

    return (
        <section className="fixed inset-0 flex items-center justify-center bg-white/50 backdrop-blur z-50 opacity-100">

            <div className='bg-gray-50 rounded-xl shadow-xl w-11/12 max-w-md overflow-hidden'>

                <header className=' bg-red-600  opacity-90 animate-pulse text-black flex justify-around items-center p-4 '>
                    <h1 className='gap-3 text-xl font-bold flex items-center'>
                        Atencion
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-exclamation-diamond" viewBox="0 0 16 16">
                            <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.48 1.48 0 0 1 0-2.098zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z" />
                            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
                        </svg>
                    </h1>

                </header>

                <div className='p-6'>
                    <h2 className='text-lg'>
                        Se borrara toda la lista de productos del carrito, dejandolo Vacio
                    </h2>
                    <h2 className='flex justify-center text-lg'><span className=''>¿Estas seguro?</span></h2>

                    <div className='flex justify-center items-center gap-4 mt-4'>
                        <button
                            onClick={msjConfirmar}
                            className='bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition-colors duration-200 flex items-center'>
                            Aceptar
                        </button>


                        <button
                            onClick={msjCancelar}
                            className='bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-lg transition-colors duration-200 flex items-center'>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default MsjConfirmacion