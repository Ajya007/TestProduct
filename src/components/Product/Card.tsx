import React from 'react';
import { CardProps } from './type';
import { SVGS } from "assets/images/svgs/index"
import CardDetails from './CardDetail';

const Card: React.FC<CardProps> = ({ id, active, logo, headerText, bodyText, buttonText, setActive, accordContent }) => {
    const { ArrowDownIcon } = SVGS
    const handleCardClick = () => {
        setActive(active === id ? 0 : id);
    };


    return (
        <div>
            <div onClick={handleCardClick} className='cursor-pointer relative z-2 bg-slate-50 md:hover:-translate-y-1 md:transition ma:ease-in-out md:duration-900 md:w-266 w-347 md:h-232  h-24 border border-solid border-primary-ligh-white rounded-lg'>
                <div className='flex gap-4 justify-between flex-col h-full'>
                    <div className='flex gap-4 md:justify-start flex-col md:px-6 md:pt-6 md:pb-0 px-8 pt-6 pb-6'>
                        <div className='flex gap:5 items-center w-full h-12' >
                            <div className=' flex md:flex-row-reverse gap-5 md:justify-between  items-center w-full'>
                                <p>{logo}</p>
                                <h1 className='md:max-w-143 w-167 font-semibold text-xl'>{headerText}</h1>
                            </div>
                            <div className='md:hidden text-primary-blue-shade text-xl'>{id == active ? '-' : '+'}</div>
                        </div>
                        <p className='md:block hidden'>{bodyText}</p>
                    </div>
                    <div className='md:block hidden  bg-slate-400'>

                        <button className={`${id == active && `-translate-y-1 bg-primary-yellow-dark `} z-4 relative h-56 bg-primary-ligh-white hover:bg-primary-yellow-dark px-6 py-4 flex items-center justify-center gap-4 rounded-tr-32`} type="button" onClick={(e) => e.stopPropagation()}>
                            <p className='text-base font-medium' >{buttonText}</p>
                            <ArrowDownIcon />
                        </button>
                        <div style={{ width: "151px", height: "56px" }} className={`${!(id == active) && 'hidden'} absolute left-0 z-3 bottom-0 bg-primary-blue-shade rounded-tr-32`}></div>
                    </div>
                </div>
            </div>
            <div className='md:hidden min-h-3 -translate-y-2 relative z-1 bg-primary-yellow-light rounded-br-lg rounded-bl-lg'> {id == active && <CardDetails accordContent={accordContent} id={id} />}</div>
        </div >
    );
};

export default Card;
