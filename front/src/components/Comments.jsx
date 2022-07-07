import React from "react";
import styled from "styled-components";
import Comment from "../components/Comment";

const Container = styled.div``;

const NewComment = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

const Avatar = styled.img`
    height: 36px;
    width: 36px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 5px;
`;

const Input = styled.input`
    margin-left: 10px;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.soft};
    background-color: transparent;
    color: ${({ theme }) => theme.text};
    outline: none;
    width: 100%;
    font-size: 14px;
`;

const Comments = () => {
    return (
        <Container>
            <NewComment>
                <Avatar src="https://avatars.githubusercontent.com/u/69431755?v=4" />
                <Input placeholder="Add a comment here..."></Input>
            </NewComment>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
        </Container>
    );
};

export default Comments;
