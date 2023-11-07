import styled from "styled-components";


export const HeaderContainer = styled.header`
    width: 100%;
    min-height: 4rem;
    //background: #0F1526;
    display: flex;
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    padding: 0.75rem 2rem;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 600;
`;

export const NavMenu = styled.nav`
    min-width: 500px;
    height: 48px;
    background: #0F1526;
    border-radius: 24px;
    display: flex;
    align-items: center;
    border: #0F1526;

    >ul{
        margin: 0;
        width: 100%;
        
        text-decoration: none;
       
        display: flex;
        justify-content: space-around;

        font-size: 1.25rem;
        font-weight: 400;

        li:hover{
            font-weight: 600;
            transition: all .4s ease-in-out;
            cursor: pointer;
        
        }
        li:first-of-type{
            font-weight: 600;
        }
    }
`;

export const ProfileContainer = styled.div`
    width: 196px;
    height: 56px;
    background: #0F1526;
    border-radius: 28px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    
    cursor: pointer;
`;

export const ProfileAvatar = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 100%;
    background: #F2F2F2;
`;
export const ProfileInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: .25rem;

`;
export const ProfileName = styled.span`
    font-size: 1rem;
    font-weight: 500;
`;

export const ProfileRole = styled.span`
    font-size: .725rem;
`;