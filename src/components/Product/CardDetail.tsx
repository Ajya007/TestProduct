import { useState } from 'react'
import { CardDetailsProps } from './type'
import { SVGS } from 'assets/images/svgs'
import productStore from 'store'

const CardDetails = ({
  id,
  hide,
  accordContent,
  product,
}: CardDetailsProps) => {
  const { AccordianArrowIcon } = SVGS
  const { updateOpenModal, updateActiveId } = productStore()
  const [openId, setOpenId] = useState<number>(0)
  const modalHandler = () => {
    updateActiveId(id)
    updateOpenModal(true)
  }

  return (
    <div className={`${hide && 'hidden'} md:flex md:gap-16`}>
      <div className='max-w-465 md:py-8'>
        <h1 className='text-32 text-primary-black font-semibold	'>
          {product?.title}
        </h1>
        <p className='text-xl mt-6 text-primary-black font-normal'>
          {' '}
          {product?.detail}
        </p>
        <button
          onClick={modalHandler}
          className='-ml-6 hidden md:block mt-12 bg-primary-orange rounded-40 border h-16 w-262 border-solid border-primary-black  text-xl text-primary-black'
        >
          {product?.buttonText}
        </button>
      </div>

      <div className='mt-10 mb-10 md:mt-0 md:mb-0 w-full'>
        <div className='flex flex-col gap-6'>
          {accordContent.map((item) => (
            <div
              onClick={() => {
                openId === item?.id ? setOpenId(0) : setOpenId(item?.id)
              }}
              key={item?.id}
              className='flex flex-col gap-6'
            >
              <div>
                <div className='flex justify-between items-center cursor-pointer'>
                  <div className='flex gap-4 items-center'>
                    {item.logo}
                    <p className='text-18 font-medium'>{item.title}</p>
                  </div>
                  <div
                    className={`${
                      item?.id === openId
                        ? 'rotate-180 ease-in-out transition duration-300'
                        : ''
                    } `}
                  >
                    <AccordianArrowIcon />{' '}
                  </div>
                </div>

                {item?.id === openId && (
                  <div className='p-6' key={item?.id}>
                    {item?.bodyText}
                  </div>
                )}
              </div>
              <div className='w-full h-1p bg-primary-black'></div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <button
          onClick={modalHandler}
          className=' md:hidden bg-primary-orange rounded-40 border h-16 w-262 border-solid border-primary-black  text-xl text-primary-black'
        >
          {product?.buttonText}
        </button>
      </div>
    </div>
  )
}

export default CardDetails
