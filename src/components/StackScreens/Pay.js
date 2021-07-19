import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Heading from "../Common/Heading";
import { material } from "react-native-typography";

export default function Pay() {
  return (
    <View style={style.container}>
      {/* <View style={style.heading}>
        <Heading name="Pay" />
      </View> */}
      <View style={style.para1}>
        <Text style={material.subheading}>Somadome session at </Text>
        <Text style={material.subheading}>MODRN SANCTUARY </Text>
        <Text style={[material.subheading]}>WEDNESDAY DECEMBER 9TH , 2020</Text>
        <Text style={material.subheading}>@ 4.30 PM </Text>
      </View>
      <View style={style.para2}>
        <Text style={material.subheading}>PAYMENT INFORMATION </Text>
        <Text style={material.subheading}>
          CC 3: ****2098 Exp Date: 01/21 cvv: 373{" "}
        </Text>
        <View style={style.millingContainer}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View>
              <Text style={material.subheading}>Street:   </Text>
            </View>
            <TextInput
              style={{ height: 30, margin: 2, borderWidth: 1, width: 150 }}
            />
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View>
              <Text style={material.subheading}>City:       </Text>
            </View>
            <TextInput
              style={{ height: 30, margin: 2, borderWidth: 1, width: 150 }}
            />
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View>
              <Text style={material.subheading}>State:     </Text>
            </View>
            <TextInput
              style={{ height: 30, margin: 2, borderWidth: 1, width: 150 }}
            />
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View>
              <Text style={material.subheading}>Zip:         </Text>
            </View>
            <View>
              <TextInput
                underlineColorAndroid="transparent"
                style={{
                  height: 30,
                  margin: 2,
                  borderWidth: 1,
                  width: 150,
                }}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={style.para3}>
        <Text style={[material.display1, { color: "rgb(37, 150, 190)" }]}>
          TOTAL: $30{" "}
        </Text>
        <TouchableOpacity
          style={{
            height: 50,
            width: 150,
            backgroundColor: "rgb(37, 150, 190)",
            marginTop: "10%",
          }}
          onPress={() => navigation.navigate("Login")}
        >
          <Text
            style={{
              fontSize: 18,
              color: "white",
              textAlign: "center",
              paddingTop: 12,
            }}
          >
            Pay
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(37, 150, 190)",
  },
  para1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
  },
  para2: {
    flex: 1.5,
    marginLeft: 40,
    marginTop: 20,
    justifyContent: "center",
  },
  para3: {
    flex: 1,
    alignItems: "center",
  },
  millingContainer: {
    marginTop: 30,
    flex: 1,
  },
});
