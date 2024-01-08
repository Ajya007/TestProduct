import { CardData } from 'components/Product/type'
import React from 'react'
import productStore from 'store'
import { memo } from 'react'

interface ModalProps {
  cardData: CardData[]
}

const Modal: React.FC<ModalProps> = ({ cardData }) => {
  const { activeId, openModal, updateOpenModal } = productStore()
  const handleCloseModal = () => {
    updateOpenModal(false)
  }

  return (
    <>
      {openModal && (
        <div className='fixed z-50 inset-0 flex items-center justify-center'>
          <div
            onClick={handleCloseModal}
            className='absolute inset-0 bg-gray-800 opacity-75'
          ></div>
          <div className='bg-white w-96 p-4 rounded shadow-lg z-10'>
            <div className='mb-4'>
              {cardData
                .filter((item) => item.id === activeId)
                ?.map((item) => (
                  <div key={item.id}>
                    <div className='flex flex-col gap-5 p-2'>
                      <div className=' flex justify-between'>
                        <div className='flex  gap-5 items-center w-full'>
                          <p>{item?.logo}</p>
                          <h1 className='heading-font'>{item?.headerText}</h1>
                        </div>
                        <div
                          onClick={handleCloseModal}
                          className='text-2xl cursor-pointer p-1'
                        >
                          x
                        </div>
                      </div>
                      <div>
                        <h1 className='text-32 text-primary-black font-semibold	'>
                          {item?.product?.title}
                        </h1>
                        <p className='p-detai-font'> {item?.product?.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div className='flex justify-end'>
              <button className='primary-blue-btn' onClick={handleCloseModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default memo(Modal)
