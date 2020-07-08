import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { lighten } from 'polished';

export const Container = styled.div`
    background-color: #fff;
    border-radius: 5px;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Button = styled(Link)`
    background-color: #c00;
    padding: 8px;
    color: #fff;
    border: 1px solid #000;
    border-radius: 5px;
    
    svg {
        margin-right: 5px;
    }    

    text-decoration: none;
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 500;
`;

export const Table = styled.table`
    border-collapse: collapse;
    margin-top: 30px;
    border-radius: 5px;
    width: 100%;

    thead {
        tr {
            background-color: #1e2739;
            color: #ff9473;

            th {
                padding: 20px;
                text-align: left;
            }
        }
    }

    tbody {
        tr {
            background-color: #464951;
            color: #fff;
            transition: 0.2s;

            td {
                padding: 20px;

                svg {
                    & + svg {
                        margin-left: 10px;
                    }
                }
            }


            &:nth-child(odd) {
                background-color: #323C50;

                &:hover{
                    background-color: ${ lighten(0.1, '#323C50')};
                }
            }

            &:nth-child(even) {
                background-color: #2C3446;

                &:hover{
                    background-color: ${ lighten(0.2, '#2C3446')};
                }
            }
        }
    }
`;
