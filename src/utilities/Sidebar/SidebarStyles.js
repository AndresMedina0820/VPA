import styled from 'styled-components';

export const SideBar = styled.div`
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
