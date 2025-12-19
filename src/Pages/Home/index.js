import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { supabase } from '../../lib/supabase';

export default function Home() {
  const [user, setUser] = useState(null);

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

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Olá {user ? user.user_metadata.name : 'Carregando...'}</Text>
        <Text style={styles.subtitle}>Veja os últimos eventos relacionados a você!</Text>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItemActive}>
          <Text style={styles.navIcon}>🏠</Text>
          <Text style={styles.navTextActive}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>📅</Text>
          <Text style={styles.navText}>Meus Eventos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>➕</Text>
          <Text style={styles.navText}>Criar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>⚙️</Text>
          <Text style={styles.navText}>Config</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
