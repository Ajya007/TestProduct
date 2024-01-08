import { SVGS } from 'assets/images/svgs'
import TitleBlock from 'components/TitleBlock'
import { CardData } from './type'
import Card from './Card'
import { useState } from 'react'
import CardDetails from './CardDetail'
import Modal from 'components/Modal'

const Product = () => {
  const [active, setActive] = useState<number | undefined>(1)
  const {
    CardOneIcon,
    CardTwoIcon,
    CardThreeIcon,
    CardFourIcon,
    AccordOneNFiveIcon,
    AccordTwoNFourIcon,
    AccordThreeIcon,
  } = SVGS
  //dummy data can be fetched from backend accordingly
  const cardData: CardData[] = [
    {
      id: 1,
      headerText: 'Card 1',
      logo: <CardOneIcon />,
      bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      buttonText: 'Discover',
      product: {
        title: 'Product1',
        detail:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque risus id ante maximus blandit.',
        buttonText: 'Discover Product',
      },
      accordContent: [
        {
          id: 1,
          title: 'Accordion One',
          bodyText: 'lorem ipsum one',
          logo: <AccordOneNFiveIcon />,
        },
        {
          id: 2,
          title: 'Accordion Two',
          bodyText: 'lorem ipsum Two',
          logo: <AccordTwoNFourIcon />,
        },
        {
          id: 3,
          title: 'Accordion Three',
          bodyText: 'lorem ipsum three',
          logo: <AccordThreeIcon />,
        },
        {
          id: 4,
          title: 'Accordion Four',
          bodyText: 'lorem ipsum four',
          logo: <AccordTwoNFourIcon />,
        },
        {
          id: 5,
          title: 'Accordion Five',
          bodyText: 'lorem ipsum five',
          logo: <AccordOneNFiveIcon />,
        },
      ],
    },
    {
      id: 2,
      headerText: 'Card2 that goes 2 Lines',
      logo: <CardTwoIcon />,
      bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      buttonText: 'Discover',
      product: {
        title: 'Product2',
        detail:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque risus id ante maximus blandit.',
        buttonText: 'Discover Product',
      },
      accordContent: [
        {
          id: 1,
          title: 'Accordion One',
          bodyText: 'lorem ipsum one',
          logo: <AccordOneNFiveIcon />,
        },
        {
          id: 2,
          title: 'Accordion Two',
          bodyText: 'lorem ipsum Two',
          logo: <AccordTwoNFourIcon />,
        },
        {
          id: 3,
          title: 'Accordion Three',
          bodyText: 'lorem ipsum three',
          logo: <AccordThreeIcon />,
        },
        {
          id: 4,
          title: 'Accordion Four',
          bodyText: 'lorem ipsum four',
          logo: <AccordTwoNFourIcon />,
        },
        {
          id: 5,
          title: 'Accordion Five',
          bodyText: 'lorem ipsum five',
          logo: <AccordOneNFiveIcon />,
        },
      ],
    },
    {
      id: 3,
      headerText: 'Card 3',
      logo: <CardThreeIcon />,
      bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      buttonText: 'Discover',
      product: {
        title: 'Product3',
        detail:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque risus id ante maximus blandit.',
        buttonText: 'Discover Product',
      },
      accordContent: [
        {
          id: 1,
          title: 'Accordion One',
          bodyText: 'lorem ipsum one',
          logo: <AccordOneNFiveIcon />,
        },
        {
          id: 2,
          title: 'Accordion Two',
          bodyText: 'lorem ipsum Two',
          logo: <AccordTwoNFourIcon />,
        },
        {
          id: 3,
          title: 'Accordion Three',
          bodyText: 'lorem ipsum three',
          logo: <AccordThreeIcon />,
        },
        {
          id: 4,
          title: 'Accordion Four',
          bodyText: 'lorem ipsum four',
          logo: <AccordTwoNFourIcon />,
        },
        {
          id: 5,
          title: 'Accordion Five',
          bodyText: 'lorem ipsum five',
          logo: <AccordOneNFiveIcon />,
        },
      ],
    },
    {
      id: 4,
      headerText: 'Card4 that goes 2 Lines',
      logo: <CardFourIcon />,
      bodyText: 'Lorem ipsum dolor sit amet.',
      buttonText: 'Discover',
      product: {
        title: 'Product4',
        detail:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque risus id ante maximus blandit., consectetur adipiscing elit.',
        buttonText: 'Discover Product',
      },
      accordContent: [
        {
          id: 1,
          title: 'Accordion One',
          bodyText: 'lorem ipsum one',
          logo: <AccordOneNFiveIcon />,
        },
        {
          id: 2,
          title: 'Accordion Two',
          bodyText: 'lorem ipsum Two',
          logo: <AccordTwoNFourIcon />,
        },
        {
          id: 3,
          title: 'Accordion Three',
          bodyText: 'lorem ipsum three',
          logo: <AccordThreeIcon />,
        },
        {
          id: 4,
          title: 'Accordion Four',
          bodyText: 'lorem ipsum four',
          logo: <AccordTwoNFourIcon />,
        },
        {
          id: 5,
          title: 'Accordion Five',
          bodyText: 'lorem ipsum five',
          logo: <AccordOneNFiveIcon />,
        },
      ],
    },
  ]
  return (
    <div className='wrapper'>
      <div className='mt-12'>
        <TitleBlock />

        <div className='flex flex-wrap gap-3 items-start justify-center mt-8'>
          {cardData?.map((item) => (
            <Card
              product={item.product}
              accordContent={item?.accordContent}
              active={active}
              key={item?.id}
              setActive={setActive}
              id={item.id}
              logo={item?.logo}
              headerText={item?.headerText}
              bodyText={item?.bodyText}
              buttonText={item?.buttonText}
            />
          ))}
        </div>
        {cardData
          .filter((item) => item.id === active)
          .map((item) => (
            <div key={item.id}>
              <div
                className={`${
                  item.id === active &&
                  'mt-10 hidden md:px-16 md:py-12 md:block bg-primary-yellow-light rounded-40'
                }`}
              >
                <CardDetails
                  product={item.product}
                  accordContent={item.accordContent}
                  id={item?.id}
                />
              </div>
            </div>
          ))}
        <Modal cardData={cardData} />
      </div>
    </div>
  )
}

export default Product
