import { StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },

  header: {
    backgroundColor: '#65BC7C',
    paddingTop: Platform.OS === 'ios' ? 50 : 40,
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  welcomeText: {
    color: '#fff',
    fontFamily: 'BBHHegarty',
    fontSize: 24,
    fontWeight: 'bold',
  },

  subtitle: {
    color: '#fff',
    fontFamily: 'RedHatDisplay',
    fontSize: 14,
    opacity: 0.9,
  },

  profileButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#fff',
  },

  profileImage: {
    width: '100%',
    height: '100%',
  },

  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: 15,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    fontFamily: 'RedHatDisplay',
  },

  searchButton: {
    padding: 5,
  },

  searchButtonText: {
    fontSize: 20,
  },

  categoriesContainer: {
    marginTop: 5,
  },

  categoryChip: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },

  categoryChipActive: {
    backgroundColor: '#fff',
  },

  categoryText: {
    color: '#fff',
    fontFamily: 'RedHatDisplay',
    fontSize: 14,
  },

  categoryTextActive: {
    color: '#65BC7C',
    fontWeight: '600',
  },

  eventsContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  eventsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },

  eventsTitle: {
    fontFamily: 'BBHHegarty',
    fontSize: 20,
    color: '#333',
    fontWeight: 'bold',
  },

  seeAllText: {
    fontFamily: 'RedHatDisplay',
    fontSize: 14,
    color: '#65BC7C',
    fontWeight: '600',
  },

  eventsList: {
    paddingBottom: 100,
  },

  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },

  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 5,
  },

  navItemActive: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 5,
  },

  navIcon: {
    fontSize: 20,
    marginBottom: 3,
  },

  navText: {
    fontFamily: 'RedHatDisplay',
    fontSize: 12,
    color: '#999',
  },

  navTextActive: {
    fontFamily: 'RedHatDisplay',
    fontSize: 12,
    color: '#65BC7C',
    fontWeight: '600',
  },
});