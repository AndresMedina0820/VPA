import styled from 'styled-components';

// Components Bootstrap
import Container from 'react-bootstrap/Container';

export const ContainetCustom = styled(Container)`
    width: calc(100% - ${(props) => props.toggle ? '15rem' : '5rem'});
    height: 100%;
    margin-left: ${(props) => props.toggle ? '15rem' : '5rem'};
    padding: 2rem;
    transition: .5s;
`;
