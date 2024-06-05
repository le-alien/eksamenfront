import "../index.css"

type Props = {
    val: string,
}

export const Footer: React.FC<Props> = (props: Props) => {
    
    return (
        <div className="flex content-center">
            <span className="text-red-600">{props.val}</span>
        </div>
    )
}

export default Footer;

