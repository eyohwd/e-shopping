import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import {mobile} from "../responsive"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



const Container = styled.div`
height: 60px;
${mobile({height: "50px"})}
`;
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
align-items: center;
${mobile({padding: "10px 0px"})}
`;
const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`;
const Language = styled.span`
font-size: 14px;
cursor: pointer;
${mobile({display: "none"})}
`;
const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`;
const Input = styled.input`
border: none;
${mobile({width: "45px"})}
`;
const Center = styled.div`
flex: 1;
text-align: center;
`;
const Logo = styled.h1`
font-weight: bold;
text-align: center;
${mobile({fontSize:"15px"})}
`;
const Right= styled.div`
flex: 1;
display: flex;
align-item: center;
justify-content: flex-end;
${mobile({ flex: 2, justifyContent: "center"})}
`;
const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
${mobile({fontSize: "9px", marginLeft: "5px"})}

`;

const Navbar = () => {
 const quantity = useSelector((state)=>state.cart.quantity)
  
  return (
    <Container>
     <Wrapper>
      <Left>
        <Language>EN</Language>
        <SearchContainer>
          <Input placeholder="search"/>
          <Search style = {{color:"gray", fontSize: 16}}/>
        </SearchContainer>
        </Left>
      <Center><Logo>LEKHO.</Logo></Center>
      <Right>
      <Link to="/">
      <MenuItem>HOME</MenuItem>
      </Link>
      <Link to="/register">
      <MenuItem>REGISTER</MenuItem>
      </Link>
      <Link to="/login">
      <MenuItem>SIGN IN</MenuItem>
      </Link>
      <Link to="/cart">
        <MenuItem>
        <Badge badgeContent={quantity} color="primary">
      <ShoppingCartOutlined />
    </Badge>
        </MenuItem>
        </Link>
      </Right>


     </Wrapper>
    </Container>
  );
}

export default Navbar;
