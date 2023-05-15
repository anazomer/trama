import { createStitches } from '@stitches/react';
import { useEffect, useState } from 'react';
import Button from '../Elements/SearchButton';

const { styled} = createStitches({

});

const Search = styled('span', {

});


function MySearch() {
    const [scrolled, setScrolled] = useState(false);




    return (
        <Search scrolled={scrolled}>

            <Button text='A' to='A' />
            <Button text='B' to='B' />
            <Button text='C' to='C' />
            <Button text='D' to='D' />
            <Button text='E' to='E' />
            <Button text='F' to='F' />
            <Button text='G' to='G' />
            <Button text='H' to='H' />
            <Button text='I' to='I' />
            <Button text='J' to='J' />
            <Button text='K' to='K' />
            <Button text='L' to='L' />
            <Button text='M' to='M' />
            <Button text='N' to='N' />
            <Button text='O' to='O' />
            <Button text='P' to='P' />
            <Button text='Q' to='Q' />
            <Button text='R' to='R' />
            <Button text='S' to='S' />
            <Button text='T' to='T' />
            <Button text='U' to='U' />
            <Button text='V' to='V' />
            <Button text='W' to='W' />
            <Button text='X' to='X' />
            <Button text='Y' to='Y' />
            <Button text='Z' to='Z' />
        </Search>
    );
}


export default MySearch;