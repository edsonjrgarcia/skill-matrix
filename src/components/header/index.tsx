import { useState } from 'react';
import { Content, HeaderContainer, NavMenu, ProfileAvatar, ProfileContainer, ProfileInfoContainer, ProfileName, ProfileRole, Title } from './styles'


export const Header = ({ children }) => {
    return (
        <HeaderContainer>
            <Content>
                <Title>SkillMatrix</Title>
                <NavMenu>
                    <ul>
                        <li>Home</li>
                        <li>Skills</li>
                        <li>Statistic</li>
                    </ul>
                </NavMenu>
                <ProfileContainer>
                    <ProfileAvatar />
                    <ProfileInfoContainer>
                        <ProfileName>Edson Garcia</ProfileName>
                        <ProfileRole>Dev Pleno</ProfileRole>
                    </ProfileInfoContainer>
                </ProfileContainer>
                {children}
            </Content>
        </HeaderContainer>
    )
}