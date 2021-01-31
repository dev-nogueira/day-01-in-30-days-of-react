import styled from 'styled-components';
import { motion } from 'framer-motion'

export const Container = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.14);
`;

export const Color = styled(motion.div)`
  background-color: ${props => props.bgc};
  border-radius: 5px;
  min-width: 250px;
  margin: 5px;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
  padding: 20px 60px;
`;

export const Button = styled(motion.button)`
  background-color: #ff477e;
  border-radius: 5px;
  margin: 5px;
  cursor: pointer;
  min-width: 250px;
  font-weight: bold;
  font-size: 18px;
  color: black;
  box-shadow: 0px 1px 10px 0px rgba(0,0,0,0.2);
  border: none;
  padding: 20px 65px;
`;
