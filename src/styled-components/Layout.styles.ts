import styled from 'styled-components';

// Components Bootstrap
import Navbar from "react-bootstrap/Navbar";
import Container from 'react-bootstrap/Container';

type Props = {
    toggle: Boolean
}

export const WrapperNav = styled.div `
    width: 100%;
    height: 5rem;
    position: relative;
`

export const SideBar = styled.div<Props> `
    position: fixed;
    top: 0;
    left: 0;
    width: ${(props) => props.toggle ? '15rem' : '5rem'};
    height: 100vh;
    background-color: #5E96C9;
    z-index: 1;
    transition: .5s;
`;

export const SideBarHeader = styled.div`
    background-color: #477096;
    text-align: center;
    padding: 1rem 0;
    margin-bottom: 2rem;
    & img {
        height: 3rem;
    }
`;

export const NavbarCustom = styled(Navbar)<Props> `
    width: 100%;
    height: 5rem;
    position: fixed;
    padding: 0rem 2rem 0rem ${(props) => props.toggle ? '16rem' : '6rem'};
    z-index: 1;
    transition: .5s;
`;

export const ContainetCustom = styled(Container)<Props> `
    width: calc(100% - ${(props) => props.toggle ? '15rem' : '5rem'});
    height: 100%;
    margin-left: ${(props) => props.toggle ? '15rem' : '5rem'};
    padding: 2rem;
    transition: .5s;
`;

export const ListModules = styled.li `
    font-size: 20px;
    padding: 1rem 1.8rem;
    display: grid;
    grid-template-columns: max-content max-content;
    align-items: center;
    column-gap: 2rem;

    &:hover {
        background-color: #477096;
    }
`;
