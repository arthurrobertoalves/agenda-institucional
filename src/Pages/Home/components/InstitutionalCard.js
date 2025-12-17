import { View, Text, StyleSheet } from 'react-native';

export default function InstitutionalCard() {

  const institutions = [
    {
      id: 'usp',
      orgName: 'USP',
      code: 'USP001',
      countEvents: 2
    },
    {
      id: 'puc',
      orgName: 'PUC',
      code: 'PUC-RJ-001',
      countEvents: 2
    },
    {
      id: 'ufrj',
      orgName: 'UFRJ',
      code: 'Uf-RJ-001',
      countEvents: 21
    },
  ];

  return (
    <View>
      {institutions.map((item) => (
        <View style={styles.card} key={item.id}>

          <View style={styles.header}>
            <View>
              <Text style={styles.name}>{item.orgName}</Text>
              <Text style={styles.code}>{item.code}</Text>
            </View>

            <View style={styles.badge}>
              <Text style={styles.badgeText}>VER</Text>
            </View>
          </View>

          <Text style={styles.hint}>
            {item.countEvents} Novos eventos
          </Text>

        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#65BC7C',
    borderRadius: 20,
    padding: 18,
    marginBottom: 16,
    elevation: 4,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  name: {
    fontFamily: 'RedHatDisplay',
    fontSize: 18,
    fontWeight: '700',
    color: '#FFF',
  },

  code: {
    fontFamily: 'RedHatDisplay',
    fontSize: 12,
    color: '#EAF6EF',
    marginTop: 2,
  },

  badge: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },

  badgeText: {
    fontFamily: 'RedHatDisplay',
    fontSize: 11,
    fontWeight: '700',
    color: '#65BC7C',
  },

  hint: {
    fontFamily: 'RedHatDisplay',
    fontSize: 13,
    color: '#EAF6EF',
    marginTop: 12,
  },
});