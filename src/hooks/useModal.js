import { useState } from "react"
import { useCart } from "../context/CartContext"


export const useModalj = () => {
    // llamado de hook en otro hook 
    const { clearProductList } = useCart()

    const [isModalOpen, setIsModalOpen] = useState(false)

  const onOpenModal = () => setIsModalOpen(true)

  const onClose = () => setIsModalOpen(false)

     const [msjConfirm, setMsjConfirm] = useState(false)


  const msjMostrar = () => {
    setMsjConfirm(true)
  }

  const msjConfirmar = () => {
    clearProductList();
    setMsjConfirm(false)
  }

  const msjCancelar = () => {
    setMsjConfirm(false)
  }

  return { isModalOpen, onOpenModal, onClose, msjConfirm,setMsjConfirm, msjMostrar, msjConfirmar, msjCancelar }
}

export default useModalj