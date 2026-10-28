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

  eventCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },

  eventDate: {
    width: 56,
    height: 64,
    borderRadius: 12,
    backgroundColor: '#E8F5EC',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },

  eventDay: {
    fontFamily: 'BBHHegarty',
    fontSize: 22,
    color: '#65BC7C',
  },

  eventMonth: {
    fontFamily: 'RedHatDisplay',
    fontSize: 12,
    color: '#65BC7C',
    fontWeight: '600',
  },

  eventInfo: {
    flex: 1,
  },

  eventName: {
    fontFamily: 'RedHatDisplay',
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
    marginBottom: 6,
  },

  eventRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },

  eventMeta: {
    fontFamily: 'RedHatDisplay',
    fontSize: 12,
    color: '#777',
    marginLeft: 4,
    flexShrink: 1,
  },

  eventTag: {
    marginLeft: 'auto',
    backgroundColor: '#E8F5EC',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 10,
  },

  eventTagText: {
    fontFamily: 'RedHatDisplay',
    fontSize: 11,
    color: '#65BC7C',
    fontWeight: '600',
  },

  emptyText: {
    fontFamily: 'RedHatDisplay',
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    marginTop: 30,
  },
});