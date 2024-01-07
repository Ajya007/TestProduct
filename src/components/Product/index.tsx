import { SVGS } from 'assets/images/svgs';
import TitleBlock from 'components/TitleBlock'
import { CardData,AccordContent } from './type';
import Card from './Card';
import { useState } from 'react';

const Product = () => {
  const [active, setActive] = useState<number | undefined>(1)
  const {CardOneIcon, CardTwoIcon, CardThreeIcon, CardFourIcon, AccordOneNFiveIcon, AccordTwoNFourIcon, AccordThreeIcon} = SVGS
  //dummy data can be fetched from backend accordingly
  const cardData: CardData[] = [
    {
      id: 1,
      headerText: 'Card 1',
      logo: <CardOneIcon />,
      bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      buttonText: 'Discover',
      accordContent: [
        { id: 1, title: 'accordOne', bodyText: 'lorem ipsum one', logo: <AccordOneNFiveIcon /> },
        { id: 2, title: 'accordTwo', bodyText: 'lorem ipsum Two', logo: <AccordTwoNFourIcon /> },
        { id: 3, title: 'accordthree', bodyText: 'lorem ipsum three', logo: <AccordThreeIcon /> },
        { id: 4, title: 'accordfour', bodyText: 'lorem ipsum four', logo: <AccordTwoNFourIcon /> },
        { id: 5, title: 'accordfive', bodyText: 'lorem ipsum five', logo: <AccordOneNFiveIcon /> },
      ],
    },
    {
      id: 2,
      headerText: 'Card2 that goes 2 Lines',
      logo: <CardTwoIcon />,
      bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      buttonText: 'Discover',
      accordContent: [
        { id: 1, title: 'accordOne', bodyText: 'lorem ipsum one', logo: <AccordOneNFiveIcon /> },
        { id: 2, title: 'accordTwo', bodyText: 'lorem ipsum Two', logo: <AccordTwoNFourIcon /> },
        { id: 3, title: 'accordthree', bodyText: 'lorem ipsum three', logo: <AccordThreeIcon /> },
        { id: 4, title: 'accordfour', bodyText: 'lorem ipsum four', logo: <AccordTwoNFourIcon /> },
        { id: 5, title: 'accordfive', bodyText: 'lorem ipsum five', logo: <AccordOneNFiveIcon /> },
      ],
    },
    {
      id: 3,
      headerText: 'Card 3',
      logo: <CardThreeIcon />,
      bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      buttonText: 'Discover',
      accordContent: [
        { id: 1, title: 'accordOne', bodyText: 'lorem ipsum one', logo: <AccordOneNFiveIcon /> },
        { id: 2, title: 'accordTwo', bodyText: 'lorem ipsum Two', logo: <AccordTwoNFourIcon /> },
        { id: 3, title: 'accordthree', bodyText: 'lorem ipsum three', logo: <AccordThreeIcon /> },
        { id: 4, title: 'accordfour', bodyText: 'lorem ipsum four', logo: <AccordTwoNFourIcon /> },
        { id: 5, title: 'accordfive', bodyText: 'lorem ipsum five', logo: <AccordOneNFiveIcon /> },
      ],
    },
    {
      id: 4,
      headerText: 'Card4 that goes 2 Lines',
      logo: <CardFourIcon />,
      bodyText: 'Lorem ipsum dolor sit amet.',
      buttonText: 'Discover',
      accordContent: [
        { id: 1, title: 'accordOne', bodyText: 'lorem ipsum one', logo: <AccordOneNFiveIcon /> },
        { id: 2, title: 'accordTwo', bodyText: 'lorem ipsum Two', logo: <AccordTwoNFourIcon /> },
        { id: 3, title: 'accordthree', bodyText: 'lorem ipsum three', logo: <AccordThreeIcon /> },
        { id: 4, title: 'accordfour', bodyText: 'lorem ipsum four', logo: <AccordTwoNFourIcon /> },
        { id: 5, title: 'accordfive', bodyText: 'lorem ipsum five', logo: <AccordOneNFiveIcon /> },
      ],
    },
  ];
  return (
    <div className='wrapper'>
      <div className='mt-12'>
        <TitleBlock />
        <div className='flex flex-wrap gap-3 items-center justify-center mt-8'>

        {cardData?.map(item => <Card accordContent={item?.accordContent} active={active} key={item?.id} setActive={setActive} id={item.id} logo={item?.logo} headerText={item?.headerText} bodyText={item?.bodyText} buttonText={item?.buttonText} />)}
        </div>

      </div>
    </div>
  )
}

export default Product
