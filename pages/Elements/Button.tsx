import { Link } from 'react-scroll';
import {styled} from '../../styles/stitches.config';


export const Button = (props) => {
    const { text, to } = props


    const Button = styled('button', {
        color: 'red',
    })

    return (
        <>
            <Button>
                <Link to={to}>
                    {text}
                </Link>
            </Button>
        </>
    )


}