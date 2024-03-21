import { Text, View } from "react-native"

interface Props {
    label: string;
    children: React.ReactNode;
}

const DetailsSections: React.FunctionComponent<Props> = (props) => {

  const { label, children } = props

  return (
    <View style={{gap: 10}}> 
        <Text style={{fontSize: 25, fontWeight: "500"}}>{label}</Text>
        {children}
    </View>
  )
}



export default DetailsSections