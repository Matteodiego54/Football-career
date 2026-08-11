import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  getState,
  getSquadra,
  getClassifica,
  calcolaForza,
  simulaGiornata,
  resetGame,
  saveGame,
} from '../store/gameStore';

export default function DashboardScreen() {
  const [state, setState] = useState(getState());

  useEffect(() => {
    const interval = setInterval(() => {
      setState(getState());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const squadra = getSquadra(state.squadraSelezionata);
  const classifica = getClassifica();
  const pos = classifica.findIndex(s => s.nome === squadra?.nome) + 1;
  const stats = state.classifica[state.squadraSelezionata];

  const handleSimulaGiornata = () => {
    if (state.giornata >= 38) {
      Alert.alert('🏆 Stagione completata! Premi Reset.');
      return;
    }
    const risultati = simulaGiornata();
    setState(getState());
    
    let msg = `📊 Giornata ${state.giornata}\n\n`;
    for (const r of risultati) {
      const casa = getSquadra(r.squadra_casa);
      const ospite = getSquadra(r.squadra_ospite);
      msg += `${casa?.nome} ${r.gol_casa} - ${r.gol_ospite} ${ospite?.nome}\n`;
    }
    Alert.alert('📊 Risultati', msg);
    saveGame();
  };

  const handleReset = () => {
    Alert.alert(
      '🔄 Reset',
      'Sei sicuro di voler resettare il gioco? Tutti i dati andranno persi!',
      [
        { text: 'Annulla', style: 'cancel' },
        {
          text: 'Reset',
          style: 'destructive',
          onPress: () => {
            resetGame();
            setState(getState());
            Alert.alert('✅ Reset completato!');
          },
        },
      ]
    );
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.grid}>
        <View style={styles.card}>
          <Text style={styles.cardLabel}>🏆 Campionato</Text>
          <Text style={styles.cardValue}>Serie A</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardLabel}>📊 Posizione</Text>
          <Text style={[styles.cardValue, styles.gold]}>{pos > 0 ? pos + '°' : '-'}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardLabel}>⚽ Gol Fatti</Text>
          <Text style={[styles.cardValue, styles.green]}>{stats?.golFatti || 0}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardLabel}>🛡️ Gol Subiti</Text>
          <Text style={[styles.cardValue, styles.red]}>{stats?.golSubiti || 0}</Text>