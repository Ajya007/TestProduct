
type alignTypes = "items-start" | "items-end"  | 'items-center'

interface TitleProps {
    title?: string;
    subTitle?: string;
    align?: alignTypes
}



const TitleBlock = ({ title = 'Section Title', subTitle = 'Section Sub Title', align = "items-center" }: TitleProps) => {
    return (
        <div data-testid="title-block"className={`${align} flex flex-col gap-3.5 justify-center`} >
            <h1 className="text-4xl font-semibold">{title}</h1>
            <h2 className="text-2xl font-medium">{subTitle}</h2>
        </div>
    )
}

export default TitleBlock