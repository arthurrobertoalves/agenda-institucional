import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#65BC7C',
    flex: 1,
  },

  overlay: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopStartRadius: width * 0.12,
    borderTopEndRadius: width * 0.12,
    paddingTop: height * 0.02,
    marginTop: height * 0.12,
  },

  title: {
    color: '#fff',
    fontFamily: 'BBHHegarty',
    fontSize: width * 0.075,
    textAlign: 'center',
    marginVertical: height * 0.03,
  },

  text: {
    fontFamily: 'RedHatDisplay',
    textAlign: 'center',
    fontSize: width * 0.06,
    marginVertical: height * 0.02,
  },

  text2: {
    fontFamily: 'RedHatDisplay',
    textAlign: 'center',
    color: '#aaa',
    fontSize: width * 0.045,
    marginBottom: height * 0.02,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


