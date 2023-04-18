import { styled } from "@stitches/react";
import { after } from "node:test";

export const HeaderContainer = styled('header', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1em 1.2em',
    marginBottom: '2em',
    background: '#fff',
    color: '#000',
});

export const Logo = styled('img', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '200px',
    maxHeight: '150px',
    width: 'auto',
    height: 'auto',
});

export const LinkItems = styled('ul', {
    display: 'flex',
    listStyle: 'none',
    /*     color: '#00000',
        textDecoration: 'none',
        padding: '5px',
        transition: '.4s',
        borderBottom: '2px solid transparente', */
});
/* 
link_items a: hover {
    border-color:#fff;
} */

export const Lista = styled('li', {
    marginRight: '1.3em',

});



export const FooterContainer = styled('footer', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#333',
    height: '150px',
    marginTop: '2em',
});

export const FooterSpan = styled('span', {
    fontWeight: 'bold',
    color: '#fff',
})



