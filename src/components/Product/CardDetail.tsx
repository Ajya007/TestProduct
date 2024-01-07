import { useState } from 'react'
import { CardDetailsProps } from './type'



const CardDetails = ({ id,  accordContent }: CardDetailsProps) => {

    const [openId, setOpenId] = useState<number>(0)
    return (
        <div className='bg-primary-yellow-light'>
            {accordContent.map(item => <div onClick={() => {
                if (openId == item.id) { setOpenId(0) } else {
                    setOpenId(item.id)
                }
            }} key={item.id}>{item.title}

                {item.id == openId &&
                    <div key={item.id}>{item?.bodyText}</div>}
            </div>)}

        </div>
    )
}

export default CardDetails