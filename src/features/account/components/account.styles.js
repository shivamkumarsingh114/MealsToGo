import styled from "styled-components/native";
import { Button, TextInput } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import { Text } from "../../../components/typography/text.component";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/splash_screen.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0);
  padding: ${(props) => props.theme.space[5]};
  margin-top: ${(props) => props.theme.space[5]};
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[3]};
  width: 300px;
`;

export const AuthInput = styled(TextInput)`
  width: 300px;
`;
export const Title = styled(Text)`
  font-size: 30px;
`;
