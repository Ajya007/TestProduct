export interface AccordContent {
    id: number;
    title: string;
    bodyText: string;
    logo: React.ReactNode;
}

export interface CardData {
    id: number;
    headerText: string;
    logo: React.ReactNode;
    bodyText: string;
    buttonText: string;
    accordContent: AccordContent[];
}

export interface CardProps {
    active?: number,
    id?: number,
    logo?: React.ReactNode,
    headerText?: string,
    bodyText?: string,
    buttonText?: string,
    setActive: React.Dispatch<React.SetStateAction<number | undefined>>,
    accordContent: AccordContent[]
}


export interface CardDetailsProps {
    id?: number,
    accordContent: AccordContent[]


}