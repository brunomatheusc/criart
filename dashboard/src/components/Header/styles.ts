import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding-left: 200px;
    padding-right: 20px;
    background-color: #fff;
    min-width: 100%;
    min-height: 80px;
    border-bottom: 2px solid #1e2739;
`;

export const Title = styled.h1`
    padding-left: 20px;
    font-size: 24px;
    font-weight: bold;
`;

export const UserInfo = styled.div`
    display: flex;
    align-items: center;

    h1 {
        font-size: 20px;
        font-weight: 500;
        color: #323C50;
        margin-left: 10px;
    }

    svg {
        & + svg {
            margin-left: 10px;
        }
    }
`;
