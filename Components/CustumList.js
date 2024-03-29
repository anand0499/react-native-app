import { FlatList,View,Text } from "react-native"
import CustomLanguage from "./CustomLanguages"

const CustomList = ({ onChangeLanguage,style }) => {

    const onPressHandler = (item) => {
        onChangeLanguage(item)
    }

    return (
        <FlatList
            data={CustomLanguage}
            renderItem={({ item }) => {
                return (
                    <View>
                        <Text style={style} onPress={() => onPressHandler(item)} >{item.lang}</Text>
                    </View>
                )
            }}
            keyExtractor={(item) => item.code}
        />
    )
}




export default CustomList