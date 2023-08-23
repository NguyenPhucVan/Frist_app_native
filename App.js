import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const ten = "Nguyen phuc van";
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chào mừng tới với {"\n"} REACT NAVTIVE</Text>

      <View style={[{ width: "90%", margin: 10 }]}>
        <Button
          title="Nhấn vào đây"
          onPress={() => Alert.alert(`chao ban ${ten}`)}
          color="#569797"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 50,
    justifyContent: "center",
    alignContent: "center",
  },
  title: {
    color: "#000",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
