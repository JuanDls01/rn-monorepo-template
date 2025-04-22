import { View, Text } from 'react-native';
import { styles } from "./card.styles";

export interface CardProps {
  children: React.ReactNode
};

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Card Component</Text>
      {children}
    </View>
  );
};

export default Card;