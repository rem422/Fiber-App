
interface Props {
    text: string,
    className?: string,
    clicked?: () => void
}

const Button = ({text, className, clicked}: Props) => {
  return <button className={className} onClick={clicked}>{text}</button>
}

export default Button