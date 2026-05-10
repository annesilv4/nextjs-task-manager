import Style from "./DefaultButton.module.css";


interface Props
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const DefaultButton = ({
    children,
    ...props
}: Props) => {
    return (
        <button
            className={Style.button}
            {...props}
        >
            {children}
        </button>
    );
};

export default DefaultButton;