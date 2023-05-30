import { useState } from 'react';
import { styled } from '@/styles/stitches.config';
import { revistas, congressos, dissertacoes, teses } from './ListaPublicacoes';
import React from 'react';


export default function MySearch() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchBy, setSearchBy] = useState('both');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        const allData = [...revistas, ...congressos, ...dissertacoes, ...teses];

        const results = allData.filter((item) => {
            const searchTermLowerCase = searchTerm.toLowerCase();

            if (searchBy === 'title') {
                return item.title.text.toLowerCase().includes(searchTermLowerCase);
            } else if (searchBy === 'author') {
                return item.author.toLowerCase().includes(searchTermLowerCase);
            } else if (searchBy === 'both') {
                return (
                    item.title.text.toLowerCase().includes(searchTermLowerCase) ||
                    item.author.toLowerCase().includes(searchTermLowerCase)
                );
            }

            return false;
        });

        setSearchResults(results);
    };

    const handleClose = () => {
        setSearchTerm('');
        setSearchBy('both');
        setSearchResults([]);
    };

    return (
        <Container>
            <InputContainer>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Pesquisar"
                />
                <Button onClick={handleSearch}>Buscar</Button>
            </InputContainer>
            <CheckboxContainer>
                <Label>
                    <input
                        type="checkbox"
                        checked={searchBy === 'title'}
                        onChange={() =>
                            setSearchBy(searchBy === 'title' ? 'both' : 'title')
                        }
                    />
                    Pesquisar por título
                </Label>
                <Label>
                    <input
                        type="checkbox"
                        checked={searchBy === 'author'}
                        onChange={() =>
                            setSearchBy(searchBy === 'author' ? 'both' : 'author')
                        }
                    />
                    Pesquisar por autor
                </Label>
            </CheckboxContainer>

            {searchResults.map((item) => (
                <ResultContainer key={item.id}>
                    <h3>
                        <a
                            href={item.title.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            dangerouslySetInnerHTML={{ __html: item.title.text }}>

                        </a>
                    </h3>
                    <p>{item.author}</p>
                </ResultContainer>
            ))}
            {searchResults.length > 0 && (
                <CloseButton>
                    <button onClick={handleClose}><a>Fechar busca</a></button>
                </CloseButton>
            )}
        </Container>
    );
}

const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
});

const InputContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',

    input: {
        padding: '8px 12px',
        fontSize: '16px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        width: '400px',
        marginRight: '20px',

        '::placeholder': {
            color: '#ccc',
        }
    }
});

const CheckboxContainer = styled('div', {
    display: 'flex',
    marginTop: '10px',
    marginRight: '100px',
    marginBottom: '50px',
});

const Label = styled('label', {
    fontFamily: 'Libre Franklin, sans-serif',
    color: '#555555',
    fontWeight: '400',
    letterSpacing: '.05rem',
    fontSize: '16px',
    marginRight: '30px',

    input: {
        marginRight: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',

        '::placeholder': {
            color: '#999',
        },
    },
});

const Button = styled('button', {
    padding: '8px 16px',
    backgroundColor: '#8A8A8A',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    fontFamily: 'Libre Franklin, sans-serif',
    textTransform: 'uppercase',
    opacity: '0.7',

    '&:hover': {
        opacity: '1',
        transition: '.3s ease',
    },
});

const ResultContainer = styled('div', {
    marginBottom: '20px',

    h3: {
        textDecoration: 'none',
        fontFamily: 'Libre Franklin, sans-serif',
        letterSpacing: '.05rem',
        fontSize: '18px',
        fontWeight: '500',
        color: '#555555',
        lineHeight: '2.2rem',
        padding: '0px',

        '&:hover': {
            color: '#DA291C',
            transition: '.3s ease',
            fontWeight: '600',
        },

        a: {
            color: 'inherit',
            textDecoration: 'none',
        },
    },

    p: {
        fontFamily: 'Libre Franklin, sans-serif',
        color: '#555555',
        fontSize: '15px',
        lineHeight: '2.2rem',
        fontWeight: '400',
        letterSpacing: '.05rem',
        padding: '0px',
        marginLeft: '25px',
    }
});

const CloseButton = styled('div', {
    padding: '10px 0em 40px 0em',

    button: {
        padding: '1em 3em 1em 3em',
        background: '#8A8A8A',
        opacity: '0.7',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '10px',
        boxShadow: '0px 3px 7px 0px rgba(0, 0, 0, 0.3)',
    },

    a: {
        color: 'white',
        textDecoration: 'none',
        fontFamily: 'Libre Franklin, sans-serif',
        fontSize: '16px',
        fontWeight: '600',
        letterSpacing: '.05rem',
        textTransform: 'uppercase',
    },

    ':hover': {
        color: 'white',
        background: '#555555',
        opacity: '1',
        transition: '.3s ease',
    },
});
