import Button from 'react-bootstrap/Button';
import "../styles/wisata1.css";

const ButtonItem = ({buttonLink, title, style}) => {
    return (
        <Button style={style} href={buttonLink} className="ton">{title}</Button> 
    )
}

export default ButtonItem;
