import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px 0px;
`;

const Avatar = styled.img`
    height: 36px;
    width: 36px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 5px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text}
`;

const Username = styled.span``;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 14px;
`;


const Comment = () => {
    return <Container>
        <Avatar src="https://img.20mn.fr/gfJltaiNQn-6iU0jEZj8_ik/768x492_lapin-mange-certaines-crottes" />
        <Details>
        <Username>Bob Rabbit<Date>2 days ago</Date></Username>
        <Text>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
 culpa qui officia deserunt mollit anim id est laborum.    
 </Text>
</Details>
    </Container>;
};

export default Comment;
