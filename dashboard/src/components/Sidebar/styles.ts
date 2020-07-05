import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #c00;
    min-height: 100%;
    width: 200px;
`;

export const List = styled.ul`
    margin-top: 20px;
    padding: 10px;
    list-style: none;
`;

export const ListItem = styled.li`
    display: flex;
    align-content: center;
    border-bottom: 1px solid #fff;
    padding: 10px;

    a {
        color: #fff;
        text-decoration: none;
    }

    span {
        font-size: 12px;
    }
    
    svg {
        margin-right: 10px;
    }
`;