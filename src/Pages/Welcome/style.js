import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: height * 0.05,
  },

  image: {
    width: width * 0.8,
    height: width * 0.8,
    alignSelf: 'center',
  },

  title: {
    fontSize: width * 0.06,
    textAlign: 'center',
    fontFamily: 'BBHHegarty',
    color: '#333',
    marginVertical: height * 0.04,
  },

  button: {
    gap: 12,
    paddingHorizontal: width * 0.1,
  },
});
