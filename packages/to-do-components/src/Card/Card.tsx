import { TouchableOpacity, Text } from "react-native";
import { CardProps } from "./Card.types";
import styles from "./Card.styles";

 const Card: React.FunctionComponent<CardProps>= (props) => {

    const { title, check, leftField, cardStyles, textStyles, onPress } = props;

    return (
        <TouchableOpacity style={[styles.card, check && {backgroundColor: "#cccccc"}, cardStyles]} onPress={onPress}>
            <Text style={[styles.text, textStyles]}>
                {leftField && leftField}
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default Card;