import Style from "./Title.module.css";

type TitleProps = {
    title: string;
}

const Title = ({ title }: TitleProps) => {
    return (
        <h2 className={Style.title}>{title}</h2>
    )
}

export default Title;