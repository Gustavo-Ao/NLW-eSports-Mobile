import { ImageBackground } from 'react-native';

import { styles } from './styles';
import backGroudImg from "../../assets/background-galaxy.png";

interface Props {
    children: React.ReactNode
}

export function Background({ children }: Props) {
  return (
    <ImageBackground defaultSource={backGroudImg} source={backGroudImg} style={styles.container}>
        {children}
    </ImageBackground>
  );
}