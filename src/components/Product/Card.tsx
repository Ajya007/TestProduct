import React from 'react'
import { CardProps } from './type'
import { SVGS } from 'assets/images/svgs/index'
import CardDetails from './CardDetail'
import productStore from 'store'

const Card: React.FC<CardProps> = ({
  id,
  product,
  active,
  logo,
  headerText,
  bodyText,
  buttonText,
  setActive,
  accordContent,
}) => {
  const { ArrowDownIcon } = SVGS
  const { updateOpenModal, updateActiveId } = productStore()
  const handleCardClick = () => {
    setActive(active === id ? 0 : id)
  }

  const modalHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()
    updateActiveId(id)
    updateOpenModal(true)
  }

  return (
    <div>
      <div onClick={handleCardClick} className='product-card-style'>
        <div className='flex gap-4 justify-between flex-col h-full'>
          <div className='flex gap-4 md:justify-start flex-col md:px-6 md:pt-6 md:pb-0 px-8 pt-6 pb-6'>
            <div className='flex gap:5 items-center w-full h-12'>
              <div className=' flex md:flex-row-reverse gap-5 md:justify-between  items-center w-full'>
                <p>{logo}</p>
                <h1 className='heading-font'>{headerText}</h1>
              </div>
              <div className='md:hidden text-primary-blue-shade text-xl'>
                {id === active ? '-' : '+'}
              </div>
            </div>
            <p className='md:block hidden'>{bodyText}</p>
          </div>
          <div className='md:block hidden'>
            <button
              className={`${
                id === active && `-translate-y-6p bg-primary-yellow-dark `
              } primary-grey-btn`}
              type='button'
              onClick={(e) => modalHandler(e)}
            >
              <p className='text-base font-medium'>{buttonText}</p>
              <ArrowDownIcon />
            </button>
            <div
              style={{ width: '151px', height: '56px' }}
              className={`${
                !(id === active) && 'hidden'
              } absolute left-0 z-3 bottom-0 bg-primary-blue-shade rounded-tr-32`}
            ></div>
          </div>
        </div>
      </div>
      <div
        className={`card-detail-style-sm ${
          !(id === active)
            ? 'z-1'
            : 'z-4 pt-8 pb-10  rounded-tr-2xl rounded-tl-2xl '
        } `}
      >
        <CardDetails
          product={product}
          hide={!(id === active)}
          accordContent={accordContent}
          id={id}
        />
      </div>
    </div>
  )
}

export default Card
