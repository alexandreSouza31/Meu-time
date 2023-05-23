import { Link } from "react-router-dom";

function LinkButton({ to, text }) {//to- pra onde vai o link. text- vai mudar o texto baseado onde irei usá-lo.
    //ou seja, muda a url e o nome do link dinamicamente
    return (
        <Link to={to}>
            {text}
        </Link>
    )
}

export default LinkButton