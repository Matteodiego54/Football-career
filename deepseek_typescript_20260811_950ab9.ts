import AsyncStorage from '@react-native-async-storage/async-storage';
import { SQUADRE, generaGiocatori, Classifica, Partita, Giocatore } from '../data/database';

export interface GameState {
  giornata: number;
  budget: number;
  squadraSelezionata: number;
  partite: Partita[];
  trasferimenti: any[];
  classifica: Classifica;
  giocatori: Giocatore[];
}

const STORAGE_KEY = 'football_manager_save';

let gameState: GameState = {
  giornata: 0,
  budget: 50000000,
  squadraSelezionata: 1,
  partite: [],
  trasferimenti: [],
  classifica: {},
  giocatori: generaGiocatori(),
};

function initClassifica() {
  const classifica: Classifica = {};
  for (const squadra of SQUADRE) {
    classifica[squadra.id] = {
      nome: squadra.nome,
      partite: 0,
      vittorie: 0,
      pareggi: 0,
      sconfitte: 0,
      golFatti: 0,
      golSubiti: 0,
      punti: 0,
    };
  }
  return classifica;
}
gameState.classifica = initClassifica();

export async function loadGame(): Promise<boolean> {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    if (data) {
      const parsed = JSON.parse(data);
      gameState = { ...gameState, ...parsed };
      return true;
    }
    return false;
  } catch (error) {
    console.error('Errore caricamento:', error);
    return false;
  }
}

export async function saveGame(): Promise<boolean> {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(gameState));
    return true;
  } catch (error) {
    console.error('Errore salvataggio:', error);
    return false;
  }
}

export function getState(): GameState {
  return gameState;
}

export function setState(newState: Partial<GameState>) {
  gameState = { ...gameState, ...newState };
}

export function getSquadra(id: number) {
  return SQUADRE.find(s => s.id === id);
}

export function getGiocatoriSquadra(id: number) {
  return gameState.giocatori.filter(g => g.squadra_id === id);
}

export function getClassifica() {
  const arr = Object.values(gameState.classifica);
  arr.sort((a, b) => {
    if (b.punti !== a.punti) return b.punti - a.punti;
    return (b.golFatti - b.golSubiti) - (a.golFatti - a.golSubiti);
  });
  return arr;
}

export function calcolaForza(id: number): number {
  const giocatori = getGiocatoriSquadra(id);
  if (giocatori.length === 0) return 50;
  giocatori.sort((a, b) => b.ovr - a.ovr);
  const top = giocatori.slice(0, 11);
  const sum = top.reduce((acc, g) => acc + g.ovr, 0);
  return Math.round(sum / top.length);
}

export function resetGame() {
  gameState.giornata = 0;
  gameState.budget = 50000000;
  gameState.partite = [];
  gameState.trasferimenti = [];
  gameState.giocatori = generaGiocatori();
  gameState.classifica = initClassifica();
}

// ============================================================
// FUNZIONI DI SIMULAZIONE
// ============================================================

export function simulaGiornata(): Partita[] {
  if (gameState.giornata >= 38) return [];

  gameState.giornata++;
  const squadreIds = SQUADRE.map(s => s.id);
  const mischiate = [...squadreIds].sort(() => Math.random() - 0.5);
  const risultati: Partita[] = [];

  for (let i = 0; i < mischiate.length; i += 2) {
    if (i + 1 >= mischiate.length) break;
    const casa = mischiate[i];
    const ospite = mischiate[i + 1];

    const fCasa = calcolaForza(casa);
    const fOspite = calcolaForza(ospite);

    const attesiCasa = Math.max(0, (fCasa / 100) * 2.5 - (fOspite / 100) * 1.2) * 1.1;
    const attesiOspite = Math.max(0, (fOspite / 100) * 2.5 - (fCasa / 100) * 1.2);

    let gCasa = Math.round(attesiCasa + (Math.random() - 0.5) * 1.5);
    let gOspite = Math.round(attesiOspite + (Math.random() - 0.5) * 1.5);
    gCasa = Math.max(0, gCasa);
    gOspite = Math.max(0, gOspite);

    // Aggiorna classifica
    const c = gameState.classifica;
    if (c[casa]) {
      c[casa].partite++;
      c[casa].golFatti += gCasa;
      c[casa].golSubiti += gOspite;
      if (gCasa > gOspite) { c[casa].vittorie++; c[casa].punti += 3; }
      else if (gCasa === gOspite) { c[casa].pareggi++; c[casa].punti += 1; }
      else { c[casa].sconfitte++; }
    }
    if (c[ospite]) {
      c[ospite].partite++;
      c[ospite].golFatti += gOspite;
      c[ospite].golSubiti += gCasa;
      if (gOspite > gCasa) { c[ospite].vittorie++; c[ospite].punti += 3; }
      else if (gOspite === gCasa) { c[ospite].pareggi++; c[ospite].punti += 1; }
      else { c[ospite].sconfitte++; }
    }

    // Statistiche giocatori
    for (const id of [casa, ospite]) {
      const gol = id === casa ? gCasa : gOspite;
      const giocatori = getGiocatoriSquadra(id);
      for (const g of giocatori) {
        g.minuti = (g.minuti || 0) + 90;
        if (Math.random() < 0.15 && gol > 0) g.gol = (g.gol || 0) + 1;
        if (Math.random() < 0.12 && gol > 1) g.assist = (g.assist || 0) + 1;
      }
    }

    risultati.push({
      giornata: gameState.giornata,
      squadra_casa: casa,
      squadra_ospite: ospite,
      gol_casa: gCasa,
      gol_ospite: gOspite,
    });
  }

  gameState.partite = [...gameState.partite, ...risultati];
  return risultati;
}