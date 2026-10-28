import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './style';
import { supabase } from '../../lib/supabase';

const CATEGORIAS = ['Todos', 'Palestras', 'Workshops', 'Esportes', 'Cultura'];

// Eventos de exemplo enquanto a listagem real não existe.
const EVENTOS = [
  { id: 1, titulo: 'Semana de Tecnologia', categoria: 'Palestras', dia: '12', mes: 'NOV', hora: '19:00', local: 'Auditório Central', participantes: 120 },
  { id: 2, titulo: 'Workshop de Git e GitHub', categoria: 'Workshops', dia: '14', mes: 'NOV', hora: '14:00', local: 'Laboratório 3', participantes: 35 },
  { id: 3, titulo: 'Torneio de Vôlei Interturmas', categoria: 'Esportes', dia: '18', mes: 'NOV', hora: '16:30', local: 'Quadra Poliesportiva', participantes: 80 },
  { id: 4, titulo: 'Noite Cultural', categoria: 'Cultura', dia: '22', mes: 'NOV', hora: '20:00', local: 'Pátio Principal', participantes: 200 },
  { id: 5, titulo: 'Feira de Profissões', categoria: 'Palestras', dia: '27', mes: 'NOV', hora: '09:00', local: 'Ginásio', participantes: 150 },
];

const NAV = [
  { label: 'Home', icon: 'home', iconOff: 'home-outline', ativo: true },
  { label: 'Meus Eventos', icon: 'calendar', iconOff: 'calendar-outline' },
  { label: 'Criar', icon: 'add-circle', iconOff: 'add-circle-outline' },
  { label: 'Config', icon: 'settings', iconOff: 'settings-outline' },
];

export default function Home() {
  const [user, setUser] = useState(null);
  const [busca, setBusca] = useState('');
  const [categoria, setCategoria] = useState('Todos');

  useEffect(() => {
    async function pegarUsuario() {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error("Erro ao pegar usuário:", error.message);
        return;
      }

      if (data.user) {
        setUser(data.user);
      }
    }

    pegarUsuario();
  }, []);

  const eventos = EVENTOS.filter(
    (e) =>
      (categoria === 'Todos' || e.categoria === categoria) &&
      e.titulo.toLowerCase().includes(busca.trim().toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Olá {user ? user.user_metadata.name : 'Carregando...'}</Text>
        <Text style={[styles.subtitle, { marginBottom: 16 }]}>Veja os últimos eventos relacionados a você!</Text>

        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={20} color="#999" />
          <TextInput
            style={[styles.searchInput, { marginLeft: 8 }]}
            placeholder="Buscar eventos"
            placeholderTextColor="#999"
            value={busca}
            onChangeText={setBusca}
          />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={[styles.categoriesContainer, { marginHorizontal: -20 }]}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        >
          {CATEGORIAS.map((c) => (
            <TouchableOpacity
              key={c}
              style={[styles.categoryChip, categoria === c && styles.categoryChipActive]}
              onPress={() => setCategoria(c)}
            >
              <Text style={[styles.categoryText, categoria === c && styles.categoryTextActive]}>{c}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.eventsContainer}>
        <View style={styles.eventsHeader}>
          <Text style={styles.eventsTitle}>Próximos eventos</Text>
          <Text style={styles.seeAllText}>Ver todos</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.eventsList}>
          {eventos.map((e) => (
            <TouchableOpacity key={e.id} style={styles.eventCard} activeOpacity={0.8}>
              <View style={styles.eventDate}>
                <Text style={styles.eventDay}>{e.dia}</Text>
                <Text style={styles.eventMonth}>{e.mes}</Text>
              </View>
              <View style={styles.eventInfo}>
                <Text style={styles.eventName} numberOfLines={1}>{e.titulo}</Text>
                <View style={styles.eventRow}>
                  <Ionicons name="time-outline" size={14} color="#999" />
                  <Text style={styles.eventMeta}>{e.hora}</Text>
                  <Ionicons name="location-outline" size={14} color="#999" style={{ marginLeft: 10 }} />
                  <Text style={styles.eventMeta} numberOfLines={1}>{e.local}</Text>
                </View>
                <View style={styles.eventRow}>
                  <Ionicons name="people-outline" size={14} color="#999" />
                  <Text style={styles.eventMeta}>{e.participantes} participantes</Text>
                  <View style={styles.eventTag}>
                    <Text style={styles.eventTagText}>{e.categoria}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
          {eventos.length === 0 && <Text style={styles.emptyText}>Nenhum evento encontrado.</Text>}
        </ScrollView>
      </View>

      <View style={styles.bottomNav}>
        {NAV.map((n) => (
          <TouchableOpacity key={n.label} style={n.ativo ? styles.navItemActive : styles.navItem}>
            <Ionicons
              name={n.ativo ? n.icon : n.iconOff}
              size={24}
              color={n.ativo ? '#65BC7C' : '#999'}
              style={{ marginBottom: 3 }}
            />
            <Text style={n.ativo ? styles.navTextActive : styles.navText}>{n.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
