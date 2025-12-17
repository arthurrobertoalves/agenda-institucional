import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    flex: 1,
    backgroundColor: '#65BC7C',
  },

  header: {
    padding: 28,
    paddingTop: 56,
  },

  institution: {
    fontFamily: 'BBHHegarty',
    fontSize: 30,
    color: '#fff',
  },

  date: {
    fontFamily: 'RedHatDisplay',
    fontSize: 14,
    color: '#EAF6EF',
    marginTop: 6,
  },

  overlay: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: 22,
  },

  cardHighlight: {
    backgroundColor: '#65BC7C',
    borderRadius: 20,
    padding: 20,
    marginBottom: 18,
    elevation: 4,
  },

  cardLabel: {
    fontFamily: 'RedHatDisplay',
    fontSize: 11,
    letterSpacing: 1,
    color: '#DFF5E8',
  },

  eventTitle: {
    fontFamily: 'RedHatDisplay',
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    marginTop: 6,
  },

  eventTime: {
    fontFamily: 'RedHatDisplay',
    fontSize: 14,
    color: '#EAF6EF',
    marginTop: 4,
  },

  row: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 18,
  },

  card: {
    flex: 1,
    backgroundColor: '#F4F6F8',
    borderRadius: 18,
    padding: 16,
    elevation: 2,
  },

  cardTitle: {
    fontFamily: 'RedHatDisplay',
    fontSize: 13,
    color: '#555',
  },

  cardValue: {
    fontFamily: 'RedHatDisplay',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 6,
  },

  list: {
    marginTop: 8,
  },

  listTitle: {
    fontFamily: 'RedHatDisplay',
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 12,
  },

  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#EEE',
  },

  listTime: {
    fontFamily: 'RedHatDisplay',
    fontWeight: '600',
    marginRight: 12,
  },

  listText: {
    fontFamily: 'RedHatDisplay',
    fontSize: 14,
  },
});
