import styled from "styled-components";

export const StyledGameList = styled.div`

    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    width: fit-content;
    flex-wrap: wrap;

    a{
        text-decoration: none;
        color: black;
        :active, :hover{
            color: black;
        }
    }

    .box{
        height: 300px;
        width: 300px;
        align-items: center;
        background-color: cadetblue;
        border-radius: 10px;
        transition: transform 0.3s ease;

        img{
            width:100%;
            height: 80%;
            border-radius: 10px;
        }

        p{
            width: 100%;
            height: 20%;
            display: flex;
            justify-content: center;
            margin: 0;
        }

        :hover{
            transform: scale(1.1) ;
        }
    }
`