export interface AccordContent {
    id: number;
    title: string;
    bodyText: string;
    logo: React.ReactNode;
}

export interface Product {
    title: string;
    detail: string;
    buttonText: string;
};
export interface CardData {
    id: number;
    headerText: string;
    logo: React.ReactNode;
    bodyText: string;
    buttonText: string;
    product: Product
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
    product: Product,
    accordContent: AccordContent[]
}


export interface CardDetailsProps {
    id?: number,
    accordContent: AccordContent[]
    hide?: boolean
    product: Product


}