export interface Giocatore {
  id: number;
  nome: string;
  cognome: string;
  ruolo: 'Portiere' | 'Difensore' | 'Centrocampista' | 'Attaccante';
  ovr: number;
  eta: number;
  valore: number;
  squadra_id: number;
  gol: number;
  assist: number;
  minuti: number;
  tiro: number;
  difesa: number;
  velocita: number;
  fisico: number;
  tecnica: number;
  intelligenza: number;
}

export interface Squadra {
  id: number;
  nome: string;
  stemma: string;
  allenatore: string;
  valoreTotale: number;
  stadio: string;
  città: string;
}

export interface Partita {
  giornata: number;
  squadra_casa: number;
  squadra_ospite: number;
  gol_casa: number;
  gol_ospite: number;
}

export interface Classifica {
  [squadraId: number]: {
    nome: string;
    partite: number;
    vittorie: number;
    pareggi: number;
    sconfitte: number;
    golFatti: number;
    golSubiti: number;
    punti: number;
  };
}

// ============================================================
// SQUADRE STAGIONE 2025/26 - SERIE A COMPLETA
// ============================================================

export const SQUADRE: Squadra[] = [
  // TOP 6
  { id: 1, nome: 'Inter', stemma: '🔵⚫', allenatore: 'Cristian Chivu', valoreTotale: 667, stadio: 'San Siro', città: 'Milano' },
  { id: 2, nome: 'Milan', stemma: '🔴⚫', allenatore: 'Max Allegri', valoreTotale: 429, stadio: 'San Siro', città: 'Milano' },
  { id: 3, nome: 'Juventus', stemma: '⚫⚪', allenatore: 'Luciano Spalletti', valoreTotale: 500, stadio: 'Allianz Stadium', città: 'Torino' },
  { id: 4, nome: 'Roma', stemma: '🔴🟡', allenatore: 'Gian Piero Gasperini', valoreTotale: 466, stadio: 'Olimpico', città: 'Roma' },
  { id: 5, nome: 'Napoli', stemma: '🔵⚪', allenatore: 'Antonio Conte', valoreTotale: 350, stadio: 'Diego Maradona', città: 'Napoli' },
  { id: 6, nome: 'Atalanta', stemma: '🔵⚫', allenatore: 'Gian Piero Gasperini', valoreTotale: 280, stadio: 'Gewiss', città: 'Bergamo' },
  
  // ZONA EUROPA
  { id: 7, nome: 'Lazio', stemma: '🔵⚪', allenatore: 'Marco Baroni', valoreTotale: 210, stadio: 'Olimpico', città: 'Roma' },
  { id: 8, nome: 'Fiorentina', stemma: '🔴⚪', allenatore: 'Raffaele Palladino', valoreTotale: 220, stadio: 'Artemio Franchi', città: 'Firenze' },
  { id: 9, nome: 'Como', stemma: '🔵⚪', allenatore: 'Cesc Fàbregas', valoreTotale: 180, stadio: 'Giuseppe Sinigaglia', città: 'Como' },
  { id: 10, nome: 'Bologna', stemma: '🔴⚪', allenatore: 'Vincenzo Italiano', valoreTotale: 160, stadio: 'Renato Dall\'Ara', città: 'Bologna' },
  { id: 11, nome: 'Torino', stemma: '🔴⚪', allenatore: 'Paolo Vanoli', valoreTotale: 130, stadio: 'Olimpico Grande Torino', città: 'Torino' },
  { id: 12, nome: 'Genoa', stemma: '🔴⚪', allenatore: 'Alberto Gilardino', valoreTotale: 110, stadio: 'Luigi Ferraris', città: 'Genova' },
  
  // ZONA SALVEZZA
  { id: 13, nome: 'Cagliari', stemma: '🔴⚪', allenatore: 'Davide Nicola', valoreTotale: 90, stadio: 'Unipol Domus', città: 'Cagliari' },
  { id: 14, nome: 'Udinese', stemma: '⚫⚪', allenatore: 'Kosta Runjaić', valoreTotale: 95, stadio: 'Friuli', città: 'Udine' },
  { id: 15, nome: 'Lecce', stemma: '🔴🟡', allenatore: 'Luca Gotti', valoreTotale: 80, stadio: 'Via del Mare', città: 'Lecce' },
  { id: 16, nome: 'Monza', stemma: '🔴⚪', allenatore: 'Salvatore Bocchetti', valoreTotale: 90, stadio: 'U-Power Stadium', città: 'Monza' },
  { id: 17, nome: 'Empoli', stemma: '🔵⚪', allenatore: 'Roberto D\'Aversa', valoreTotale: 70, stadio: 'Carlo Castellani', città: 'Empoli' },
  { id: 18, nome: 'Venezia', stemma: '🟢🟠', allenatore: 'Eusebio Di Francesco', valoreTotale: 75, stadio: 'Pier Luigi Penzo', città: 'Venezia' },
  { id: 19, nome: 'Frosinone', stemma: '🔵🟡', allenatore: 'Eusebio Di Francesco', valoreTotale: 65, stadio: 'Benito Stirpe', città: 'Frosinone' },
  { id: 20, nome: 'Catanzaro', stemma: '🔴🟡', allenatore: 'Fabio Caserta', valoreTotale: 55, stadio: 'Nicola Ceravolo', città: 'Catanzaro' },
];

// ============================================================
// GIOCATORI STAGIONE 2025/26 - TUTTE LE SQUADRE
// ============================================================

interface GiocatoreData {
  nome: string;
  cognome: string;
  ruolo: 'Portiere' | 'Difensore' | 'Centrocampista' | 'Attaccante';
  ovr: number;
  eta: number;
  valore: number;
}

// ==================== INTER (667M €) ====================
const INTER_GIOCATORI: GiocatoreData[] = [
  { nome: 'Yann', cognome: 'Sommer', ruolo: 'Portiere', ovr: 87, eta: 36, valore: 8 },
  { nome: 'Josep', cognome: 'Martínez', ruolo: 'Portiere', ovr: 82, eta: 27, valore: 5 },
  { nome: 'Federico', cognome: 'Dimarco', ruolo: 'Difensore', ovr: 88, eta: 27, valore: 50 },
  { nome: 'Manuel', cognome: 'Akanji', ruolo: 'Difensore', ovr: 86, eta: 30, valore: 35 },
  { nome: 'John', cognome: 'Stones', ruolo: 'Difensore', ovr: 87, eta: 31, valore: 40 },
  { nome: 'Denzel', cognome: 'Dumfries', ruolo: 'Difensore', ovr: 85, eta: 29, valore: 28 },
  { nome: 'Alessandro', cognome: 'Bastoni', ruolo: 'Difensore', ovr: 87, eta: 26, valore: 60 },
  { nome: 'Benjamin', cognome: 'Pavard', ruolo: 'Difensore', ovr: 85, eta: 29, valore: 35 },
  { nome: 'Yann', cognome: 'Bisseck', ruolo: 'Difensore', ovr: 82, eta: 24, valore: 20 },
  { nome: 'Nicolò', cognome: 'Barella', ruolo: 'Centrocampista', ovr: 90, eta: 28, valore: 70 },
  { nome: 'Hakan', cognome: 'Çalhanoğlu', ruolo: 'Centrocampista', ovr: 88, eta: 31, valore: 40 },
  { nome: 'Petar', cognome: 'Sucic', ruolo: 'Centrocampista', ovr: 84, eta: 21, valore: 30 },
  { nome: 'Kristjan', cognome: 'Asllani', ruolo: 'Centrocampista', ovr: 82, eta: 23, valore: 25 },
  { nome: 'Davy', cognome: 'Klaassen', ruolo: 'Centrocampista', ovr: 80, eta: 32, valore: 10 },
  { nome: 'Lautaro', cognome: 'Martínez', ruolo: 'Attaccante', ovr: 91, eta: 27, valore: 80 },
  { nome: 'Marcus', cognome: 'Thuram', ruolo: 'Attaccante', ovr: 88, eta: 27, valore: 55 },
  { nome: 'Moussa', cognome: 'Diouf', ruolo: 'Attaccante', ovr: 82, eta: 23, valore: 25 },
  { nome: 'Matteo', cognome: 'Lavelli', ruolo: 'Attaccante', ovr: 78, eta: 20, valore: 15 },
  { nome: 'Marko', cognome: 'Arnautović', ruolo: 'Attaccante', ovr: 82, eta: 36, valore: 10 },
];

// ==================== MILAN (429M €) ====================
const MILAN_GIOCATORI: GiocatoreData[] = [
  { nome: 'Mike', cognome: 'Maignan', ruolo: 'Portiere', ovr: 89, eta: 29, valore: 35 },
  { nome: 'Pietro', cognome: 'Terracciano', ruolo: 'Portiere', ovr: 76, eta: 22, valore: 5 },
  { nome: 'Lorenzo', cognome: 'Torriani', ruolo: 'Portiere', ovr: 72, eta: 20, valore: 3 },
  { nome: 'Fikayo', cognome: 'Tomori', ruolo: 'Difensore', ovr: 86, eta: 27, valore: 45 },
  { nome: 'Koni', cognome: 'De Winter', ruolo: 'Difensore', ovr: 78, eta: 22, valore: 12 },
  { nome: 'Matteo', cognome: 'Gabbia', ruolo: 'Difensore', ovr: 80, eta: 25, valore: 18 },
  { nome: 'Strahinja', cognome: 'Pavlovic', ruolo: 'Difensore', ovr: 82, eta: 24, valore: 25 },
  { nome: 'Bryan', cognome: 'Odogu', ruolo: 'Difensore', ovr: 74, eta: 20, valore: 6 },
  { nome: 'Pervis', cognome: 'Estupiñán', ruolo: 'Difensore', ovr: 84, eta: 27, valore: 30 },
  { nome: 'Samuele', cognome: 'Athekame', ruolo: 'Difensore', ovr: 72, eta: 19, valore: 4 },
  { nome: 'Davide', cognome: 'Bartesaghi', ruolo: 'Difensore', ovr: 70, eta: 19, valore: 3 },
  { nome: 'Luka', cognome: 'Modric', ruolo: 'Centrocampista', ovr: 88, eta: 39, valore: 20 },
  { nome: 'Samuele', cognome: 'Ricci', ruolo: 'Centrocampista', ovr: 84, eta: 23, valore: 35 },
  { nome: 'Youssouf', cognome: 'Fofana', ruolo: 'Centrocampista', ovr: 85, eta: 25, valore: 30 },
  { nome: 'Ardon', cognome: 'Jashari', ruolo: 'Centrocampista', ovr: 80, eta: 22, valore: 18 },
  { nome: 'Ruben', cognome: 'Loftus-Cheek', ruolo: 'Centrocampista', ovr: 84, eta: 29, valore: 28 },
  { nome: 'Adrien', cognome: 'Rabiot', ruolo: 'Centrocampista', ovr: 86, eta: 30, valore: 38 },
  { nome: 'Yacine', cognome: 'Adli', ruolo: 'Centrocampista', ovr: 82, eta: 24, valore: 20 },
  { nome: 'Santi', cognome: 'Giménez', ruolo: 'Attaccante', ovr: 86, eta: 24, valore: 50 },
  { nome: 'Rafael', cognome: 'Leão', ruolo: 'Attaccante', ovr: 89, eta: 25, valore: 75 },
  { nome: 'Christian', cognome: 'Pulisic', ruolo: 'Attaccante', ovr: 86, eta: 26, valore: 40 },
  { nome: 'Alexis', cognome: 'Saelemaekers', ruolo: 'Attaccante', ovr: 82, eta: 25, valore: 22 },
  { nome: 'Christopher', cognome: 'Nkunku', ruolo: 'Attaccante', ovr: 87, eta: 27, valore: 45 },
  { nome: 'Niclas', cognome: 'Fullkrug', ruolo: 'Attaccante', ovr: 84, eta: 32, valore: 25 },
  { nome: 'Mikel', cognome: 'Balentien', ruolo: 'Attaccante', ovr: 72, eta: 20, valore: 5 },
];

// ==================== JUVENTUS (500M €) ====================
const JUVENTUS_GIOCATORI: GiocatoreData[] = [
  { nome: 'Wojciech', cognome: 'Szczęsny', ruolo: 'Portiere', ovr: 86, eta: 35, valore: 20 },
  { nome: 'Mattia', cognome: 'Perin', ruolo: 'Portiere', ovr: 83, eta: 32, valore: 10 },
  { nome: 'Gleison', cognome: 'Bremer', ruolo: 'Difensore', ovr: 87, eta: 28, valore: 40 },
  { nome: 'Federico', cognome: 'Gatti', ruolo: 'Difensore', ovr: 84, eta: 26, valore: 25 },
  { nome: 'Andrea', cognome: 'Cambiaso', ruolo: 'Difensore', ovr: 85, eta: 24, valore: 30 },
  { nome: 'Danilo', cognome: 'Luiz', ruolo: 'Difensore', ovr: 84, eta: 33, valore: 18 },
  { nome: 'Juan', cognome: 'Cabal', ruolo: 'Difensore', ovr: 80, eta: 23, valore: 15 },
  { nome: 'Nicolò', cognome: 'Fagioli', ruolo: 'Centrocampista', ovr: 84, eta: 24, valore: 35 },
  { nome: 'Manuel', cognome: 'Locatelli', ruolo: 'Centrocampista', ovr: 86, eta: 27, valore: 35 },
  { nome: 'Weston', cognome: 'McKennie', ruolo: 'Centrocampista', ovr: 83, eta: 26, valore: 25 },
  { nome: 'Fabio', cognome: 'Miretti', ruolo: 'Centrocampista', ovr: 80, eta: 21, valore: 20 },
  { nome: 'Kenan', cognome: 'Yıldız', ruolo: 'Attaccante', ovr: 82, eta: 19, valore: 30 },
  { nome: 'Federico', cognome: 'Chiesa', ruolo: 'Attaccante', ovr: 88, eta: 27, valore: 50 },
  { nome: 'Dušan', cognome: 'Vlahović', ruolo: 'Attaccante', ovr: 88, eta: 25, valore: 65 },
  { nome: 'Randal', cognome: 'Kolo Muani', ruolo: 'Attaccante', ovr: 86, eta: 26, valore: 50 },
  { nome: 'Joshua', cognome: 'Zirkzee', ruolo: 'Attaccante', ovr: 84, eta: 23, valore: 40 },
  { nome: 'Samuel', cognome: 'Iling-Junior', ruolo: 'Attaccante', ovr: 80, eta: 21, valore: 18 },
];

// ==================== ROMA (466M €) ====================
const ROMA_GIOCATORI: GiocatoreData[] = [
  { nome: 'Mile', cognome: 'Svilar', ruolo: 'Portiere', ovr: 82, eta: 25, valore: 15 },
  { nome: 'Rui', cognome: 'Patrício', ruolo: 'Portiere', ovr: 80, eta: 37, valore: 5 },
  { nome: 'Gianluca', cognome: 'Mancini', ruolo: 'Difensore', ovr: 85, eta: 28, valore: 30 },
  { nome: 'Evan', cognome: 'Ndicka', ruolo: 'Difensore', ovr: 84, eta: 25, valore: 28 },
  { nome: 'Chris', cognome: 'Smalling', ruolo: 'Difensore', ovr: 82, eta: 35, valore: 10 },
  { nome: 'Leonardo', cognome: 'Spinazzola', ruolo: 'Difensore', ovr: 83, eta: 32, valore: 15 },
  { nome: 'Bryan', cognome: 'Cristante', ruolo: 'Centrocampista', ovr: 84, eta: 29, valore: 25 },
  { nome: 'Lorenzo', cognome: 'Pellegrini', ruolo: 'Centrocampista', ovr: 85, eta: 28, valore: 30 },
  { nome: 'Leandro', cognome: 'Paredes', ruolo: 'Centrocampista', ovr: 83, eta: 30, valore: 20 },
  { nome: 'Tommaso', cognome: 'Baldanzi', ruolo: 'Centrocampista', ovr: 80, eta: 21, valore: 22 },
  { nome: 'Edoardo', cognome: 'Bove', ruolo: 'Centrocampista', ovr: 82, eta: 22, valore: 25 },
  { nome: 'Paulo', cognome: 'Dybala', ruolo: 'Attaccante', ovr: 89, eta: 31, valore: 45 },
  { nome: 'Donyell', cognome: 'Malen', ruolo: 'Attaccante', ovr: 85, eta: 26, valore: 40 },
  { nome: 'Robinio', cognome: 'Vaz', ruolo: 'Attaccante', ovr: 82, eta: 23, valore: 30 },
  { nome: 'Tammy', cognome: 'Abraham', ruolo: 'Attaccante', ovr: 84, eta: 27, valore: 35 },
  { nome: 'Cristian', cognome: 'Volpato', ruolo: 'Attaccante', ovr: 78, eta: 21, valore: 15 },
];

// ==================== NAPOLI (350M €) ====================
const NAPOLI_GIOCATORI: GiocatoreData[] = [
  { nome: 'Alex', cognome: 'Meret', ruolo: 'Portiere', ovr: 84, eta: 27, valore: 20 },
  { nome: 'Pierluigi', cognome: 'Gollini', ruolo: 'Portiere', ovr: 78, eta: 29, valore: 8 },
  { nome: 'Giovanni', cognome: 'Di Lorenzo', ruolo: 'Difensore', ovr: 86, eta: 31, valore: 30 },
  { nome: 'Min-jae', cognome: 'Kim', ruolo: 'Difensore', ovr: 85, eta: 28, valore: 35 },
  { nome: 'Alessandro', cognome: 'Buongiorno', ruolo: 'Difensore', ovr: 84, eta: 25, valore: 28 },
  { nome: 'Mário', cognome: 'Rui', ruolo: 'Difensore', ovr: 80, eta: 33, valore: 10 },
  { nome: 'Mathías', cognome: 'Olivera', ruolo: 'Difensore', ovr: 82, eta: 27, valore: 18 },
  { nome: 'Frank', cognome: 'Anguissa', ruolo: 'Centrocampista', ovr: 85, eta: 29, valore: 30 },
  { nome: 'Stanislav', cognome: 'Lobotka', ruolo: 'Centrocampista', ovr: 86, eta: 30, valore: 30 },
  { nome: 'Giacomo', cognome: 'Raspadori', ruolo: 'Attaccante', ovr: 85, eta: 24, valore: 35 },
  { nome: 'Khvicha', cognome: 'Kvaratskhelia', ruolo: 'Attaccante', ovr: 88, eta: 24, valore: 60 },
  { nome: 'Victor', cognome: 'Osimhen', ruolo: 'Attaccante', ovr: 89, eta: 26, valore: 70 },
  { nome: 'Matteo', cognome: 'Politano', ruolo: 'Attaccante', ovr: 83, eta: 31, valore: 20 },
  { nome: 'Cyril', cognome: 'Ngonge', ruolo: 'Attaccante', ovr: 80, eta: 24, valore: 15 },
];

// ==================== ATALANTA (280M €) ====================
const ATALANTA_GIOCATORI: GiocatoreData[] = [
  { nome: 'Marco', cognome: 'Carnesecchi', ruolo: 'Portiere', ovr: 84, eta: 24, valore: 25 },
  { nome: 'Juan', cognome: 'Musso', ruolo: 'Portiere', ovr: 82, eta: 30, valore: 15 },
  { nome: 'Berat', cognome: 'Djimsiti', ruolo: 'Difensore', ovr: 83, eta: 31, valore: 18 },
  { nome: 'Giorgio', cognome: 'Scalvini', ruolo: 'Difensore', ovr: 84, eta: 21, valore: 30 },
  { nome: 'Caleb', cognome: 'Okoli', ruolo: 'Difensore', ovr: 80, eta: 22, valore: 15 },
  { nome: 'Davide', cognome: 'Zappacosta', ruolo: 'Difensore', ovr: 82, eta: 32, valore: 12 },
  { nome: 'Ederson', cognome: 'Santos', ruolo: 'Centrocampista', ovr: 85, eta: 25, valore: 35 },
  { nome: 'Teun', cognome: 'Koopmeiners', ruolo: 'Centrocampista', ovr: 86, eta: 26, valore: 45 },
  { nome: 'Marten', cognome: 'de Roon', ruolo: 'Centrocampista', ovr: 83, eta: 33, valore: 12 },
  { nome: 'Charles', cognome: 'De Ketelaere', ruolo: 'Attaccante', ovr: 82, eta: 23, valore: 25 },
  { nome: 'Gianluca', cognome: 'Scamacca', ruolo: 'Attaccante', ovr: 85, eta: 25, valore: 35 },
  { nome: 'Ademola', cognome: 'Lookman', ruolo: 'Attaccante', ovr: 86, eta: 27, valore: 40 },
  { nome: 'Nicolò', cognome: 'Zaniolo', ruolo: 'Attaccante', ovr: 83, eta: 25, valore: 30 },
];

// ==================== LAZIO (210M €) ====================
const LAZIO_GIOCATORI: GiocatoreData[] = [
  { nome: 'Ivan', cognome: 'Provedel', ruolo: 'Portiere', ovr: 83, eta: 30, valore: 15 },
  { nome: 'Alessio', cognome: 'Romagnoli', ruolo: 'Difensore', ovr: 84, eta: 29, valore: 25 },
  { nome: 'Nicolò', cognome: 'Casale', ruolo: 'Difensore', ovr: 82, eta: 26, valore: 18 },
  { nome: 'Elseid', cognome: 'Hysaj', ruolo: 'Difensore', ovr: 80, eta: 30, valore: 10 },
  { nome: 'Adam', cognome: 'Marušić', ruolo: 'Difensore', ovr: 81, eta: 32, valore: 12 },
  { nome: 'Daniele', cognome: 'Cataldi', ruolo: 'Centrocampista', ovr: 82, eta: 30, valore: 15 },
  { nome: 'Matías', cognome: 'Vecino', ruolo: 'Centrocampista', ovr: 81, eta: 33, valore: 10 },
  { nome: 'Kenneth', cognome: 'Taylor', ruolo: 'Centrocampista', ovr: 82, eta: 22, valore: 20 },
  { nome: 'Petar', cognome: 'Ratkov', ruolo: 'Attaccante', ovr: 80, eta: 21, valore: 18 },
  { nome: 'Ciro', cognome: 'Immobile', ruolo: 'Attaccante', ovr: 86, eta: 34, valore: 30 },
  { nome: 'Mattia', cognome: 'Zaccagni', ruolo: 'Attaccante', ovr: 83, eta: 29, valore: 22 },
];

// ==================== FIORENTINA (220M €) ====================
const FIORENTINA_GIOCATORI: GiocatoreData[] = [
  { nome: 'Pietro', cognome: 'Terracciano', ruolo: 'Portiere', ovr: 80, eta: 34, valore: 8 },
  { nome: 'Oliver', cognome: 'Christensen', ruolo: 'Portiere', ovr: 78, eta: 25, valore: 10 },
  { nome: 'Nikola', cognome: 'Milenković', ruolo: 'Difensore', ovr: 84, eta: 27, valore: 25 },
  { nome: 'Lucas', cognome: 'Martínez Quarta', ruolo: 'Difensore', ovr: 82, eta: 28, valore: 18 },
  { nome: 'Cristiano', cognome: 'Biraghi', ruolo: 'Difensore', ovr: 83, eta: 32, valore: 15 },
  { nome: 'Dodô', cognome: 'dos Santos', ruolo: 'Difensore', ovr: 81, eta: 26, valore: 14 },
  { nome: 'Sofyan', cognome: 'Amrabat', ruolo: 'Centrocampista', ovr: 85, eta: 28, valore: 30 },
  { nome: 'Arthur', cognome: 'Melo', ruolo: 'Centrocampista', ovr: 83, eta: 28, valore: 20 },
  { nome: 'Giacomo', cognome: 'Bonaventura', ruolo: 'Centrocampista', ovr: 82, eta: 35, valore: 10 },
  { nome: 'Nicolás', cognome: 'González', ruolo: 'Attaccante', ovr: 85, eta: 26, valore: 35 },
  { nome: 'Lucas', cognome: 'Beltran', ruolo: 'Attaccante', ovr: 82, eta: 23, valore: 22 },
  { nome: 'Jonathan', cognome: 'Ikoné', ruolo: 'Attaccante', ovr: 80, eta: 26, valore: 15 },
  { nome: 'M\'Bala', cognome: 'Nzola', ruolo: 'Attaccante', ovr: 81, eta: 28, valore: 18 },
];

// ==================== COMO (180M €) ====================
const COMO_GIOCATORI: GiocatoreData[] = [
  { nome: 'Pepe', cognome: 'Reina', ruolo: 'Portiere', ovr: 78, eta: 42, valore: 5 },
  { nome: 'Alberto', cognome: 'Cerri', ruolo: 'Portiere', ovr: 72, eta: 28, valore: 4 },
  { nome: 'Raphaël', cognome: 'Varane', ruolo: 'Difensore', ovr: 85, eta: 31, valore: 30 },
  { nome: 'Federico', cognome: 'Barba', ruolo: 'Difensore', ovr: 78, eta: 31, valore: 8 },
  { nome: 'Sergi', cognome: 'Roberto', ruolo: 'Centrocampista', ovr: 83, eta: 32, valore: 25 },
  { nome: 'Nicolás', cognome: 'Paz', ruolo: 'Centrocampista', ovr: 80, eta: 20, valore: 20 },
  { nome: 'Lucas', cognome: 'Da Cunha', ruolo: 'Centrocampista', ovr: 78, eta: 23, valore: 12 },
  { nome: 'Andrea', cognome: 'Belotti', ruolo: 'Attaccante', ovr: 84, eta: 31, valore: 25 },
  { nome: 'Patrick', cognome: 'Cutrone', ruolo: 'Attaccante', ovr: 80, eta: 26, valore: 18 },
  { nome: 'Gabriel', cognome: 'Strefezza', ruolo: 'Attaccante', ovr: 78, eta: 27, valore: 15 },
];

// ==================== BOLOGNA (160M €) ====================
const BOLOGNA_GIOCATORI: GiocatoreData[] = [
  { nome: 'Łukasz', cognome: 'Skorupski', ruolo: 'Portiere', ovr: 82, eta: 33, valore: 12 },
  { nome: 'Federico', cognome: 'Ravaglia', ruolo: 'Portiere', ovr: 72, eta: 25, valore: 4 },
  { nome: 'Riccardo', cognome: 'Calafiori', ruolo: 'Difensore', ovr: 82, eta: 22, valore: 22 },
  { nome: 'Jhon', cognome: 'Lucumí', ruolo: 'Difensore', ovr: 81, eta: 26, valore: 18 },
  { nome: 'Lorenzo', cognome: 'De Silvestri', ruolo: 'Difensore', ovr: 78, eta: 36, valore: 5 },
  { nome: 'Lewis', cognome: 'Ferguson', ruolo: 'Centrocampista', ovr: 84, eta: 25, valore: 28 },
  { nome: 'Michel', cognome: 'Aebischer', ruolo: 'Centrocampista', ovr: 82, eta: 27, valore: 15 },
  { nome: 'Giovanni', cognome: 'Fabbian', ruolo: 'Centrocampista', ovr: 78, eta: 21, valore: 15 },
  { nome: 'Joshua', cognome: 'Zirkzee', ruolo: 'Attaccante', ovr: 84, eta: 23, valore: 40 },
  { nome: 'Riccardo', cognome: 'Orsolini', ruolo: 'Attaccante', ovr: 83, eta: 27, valore: 20 },
  { nome: 'Dan', cognome: 'Ndoye', ruolo: 'Attaccante', ovr: 80, eta: 23, valore: 15 },
];

// ==================== TORINO (130M €) ====================
const TORINO_GIOCATORI: GiocatoreData[] = [
  { nome: 'Vanja', cognome: 'Milinković-Savić', ruolo: 'Portiere', ovr: 84, eta: 27, valore: 20 },
  { nome: 'Mihai', cognome: 'Popa', ruolo: 'Portiere', ovr: 72, eta: 24, valore: 4 },
  { nome: 'Alessandro', cognome: 'Buongiorno', ruolo: 'Difensore', ovr: 84, eta: 25, valore: 28 },
  { nome: 'Koffi', cognome: 'Djidji', ruolo: 'Difensore', ovr: 78, eta: 32, valore: 8 },
  { nome: 'Raoul', cognome: 'Bellanova', ruolo: 'Difensore', ovr: 80, eta: 24, valore: 15 },
  { nome: 'Samuele', cognome: 'Ricci', ruolo: 'Centrocampista', ovr: 82, eta: 23, valore: 20 },
  { nome: 'Karol', cognome: 'Linetty', ruolo: 'Centrocampista', ovr: 80, eta: 29, valore: 12 },
  { nome: 'Ivan', cognome: 'Ilić', ruolo: 'Centrocampista', ovr: 81, eta: 23, valore: 18 },
  { nome: 'Duván', cognome: 'Zapata', ruolo: 'Attaccante', ovr: 84, eta: 33, valore: 15 },
  { nome: 'Antonio', cognome: 'Sanabria', ruolo: 'Attaccante', ovr: 80, eta: 28, valore: 12 },
  { nome: 'Nemanja', cognome: 'Radonjić', ruolo: 'Attaccante', ovr: 78, eta: 28, valore: 10 },
];

// ==================== GENOA (110M €) ====================
const GENOA_GIOCATORI: GiocatoreData[] = [
  { nome: 'Josep', cognome: 'Martínez', ruolo: 'Portiere', ovr: 82, eta: 27, valore: 15 },
  { nome: 'Daniele', cognome: 'Sommario', ruolo: 'Portiere', ovr: 72, eta: 27, valore: 3 },
  { nome: 'Johan', cognome: 'Vásquez', ruolo: 'Difensore', ovr: 80, eta: 26, valore: 12 },
  { nome: 'Radu', cognome: 'Drăgușin', ruolo: 'Difensore', ovr: 83, eta: 22, valore: 25 },
  { nome: 'Emil', cognome: 'Bohinen', ruolo: 'Centrocampista', ovr: 78, eta: 25, valore: 10 },
  { nome: 'Morten', cognome: 'Thorsby', ruolo: 'Centrocampista', ovr: 80, eta: 28, valore: 12 },
  { nome: 'Milan', cognome: 'Badelj', ruolo: 'Centrocampista', ovr: 78, eta: 35, valore: 5 },
  { nome: 'Albert', cognome: 'Gudmundsson', ruolo: 'Attaccante', ovr: 82, eta: 26, valore: 20 },
  { nome: 'Mats', cognome: 'Møller Dæhli', ruolo: 'Attaccante', ovr: 76, eta: 29, valore: 8 },
  { nome: 'Kelvin', cognome: 'Yeboah', ruolo: 'Attaccante', ovr: 78, eta: 24, valore: 12 },
];

// ==================== CAGLIARI (90M €) ====================
const CAGLIARI_GIOCATORI: GiocatoreData[] = [
  { nome: 'Simone', cognome: 'Scuffet', ruolo: 'Portiere', ovr: 80, eta: 28, valore: 10 },
  { nome: 'Alberto', cognome: 'Dossena', ruolo: 'Difensore', ovr: 78, eta: 26, valore: 8 },
  { nome: 'Mateusz', cognome: 'Wieteska', ruolo: 'Difensore', ovr: 76, eta: 27, valore: 6 },
  { nome: 'Adam', cognome: 'Obert', ruolo: 'Difensore', ovr: 74, eta: 22, valore: 5 },
  { nome: 'Nicolas', cognome: 'Viola', ruolo: 'Centrocampista', ovr: 78, eta: 35, valore: 4 },
  { nome: 'Alessandro', cognome: 'Deiola', ruolo: 'Centrocampista', ovr: 76, eta: 29, valore: 6 },
  { nome: 'Gianluca', cognome: 'Gaetano', ruolo: 'Attaccante', ovr: 80, eta: 24, valore: 15 },
  { nome: 'Eldor', cognome: 'Shomurodov', ruolo: 'Attaccante', ovr: 78, eta: 29, valore: 10 },
  { nome: 'Zito', cognome: 'Luvumbo', ruolo: 'Attaccante', ovr: 76, eta: 22, valore: 8 },
];

// ==================== UDINESE (95M €) ====================
const UDINESE_GIOCATORI: GiocatoreData[] = [
  { nome: 'Marco', cognome: 'Silvestri', ruolo: 'Portiere', ovr: 80, eta: 33, valore: 8 },
  { nome: 'Nehuén', cognome: 'Pérez', ruolo: 'Difensore', ovr: 82, eta: 24, valore: 18 },
  { nome: 'Jaka', cognome: 'Bijol', ruolo: 'Difensore', ovr: 80, eta: 25, valore: 12 },
  { nome: 'Lazar', cognome: 'Samardžić', ruolo: 'Centrocampista', ovr: 82, eta: 22, valore: 20 },
  { nome: 'Sandi', cognome: 'Lovrić', ruolo: 'Centrocampista', ovr: 78, eta: 26, valore: 10 },
  { nome: 'Gerard', cognome: 'Deulofeu', ruolo: 'Attaccante', ovr: 82, eta: 30, valore: 15 },
  { nome: 'Isaac', cognome: 'Success', ruolo: 'Attaccante', ovr: 78, eta: 28, valore: 8 },
  { nome: 'Lorenzo', cognome: 'Lucca', ruolo: 'Attaccante', ovr: 76, eta: 23, valore: 10 },
];

// ==================== LECCE (80M €) ====================
const LECCE_GIOCATORI: GiocatoreData[] = [
  { nome: 'Wladimiro', cognome: 'Falcone', ruolo: 'Portiere', ovr: 80, eta: 29, valore: 10 },
  { nome: 'Federico', cognome: 'Baschirotto', ruolo: 'Difensore', ovr: 78, eta: 27, valore: 8 },
  { nome: 'Marin', cognome: 'Pongračić', ruolo: 'Difensore', ovr: 76, eta: 27, valore: 6 },
  { nome: 'Youssef', cognome: 'Maleb', ruolo: 'Centrocampista', ovr: 76, eta: 25, valore: 6 },
  { nome: 'Alexis', cognome: 'Blas', ruolo: 'Attaccante', ovr: 80, eta: 27, valore: 15 },
  { nome: 'Nikola', cognome: 'Krstović', ruolo: 'Attaccante', ovr: 78, eta: 24, valore: 12 },
  { nome: 'Lameck', cognome: 'Banda', ruolo: 'Attaccante', ovr: 76, eta: 23, valore: 8 },
];

// ==================== MONZA (90M €) ====================
const MONZA_GIOCATORI: GiocatoreData[] = [
  { nome: 'Michele', cognome: 'Di Gregorio', ruolo: 'Portiere', ovr: 82, eta: 27, valore: 15 },
  { nome: 'Armando', cognome: 'Izzo', ruolo: 'Difensore', ovr: 80, eta: 32, valore: 8 },
  { nome: 'Pablo', cognome: 'Marí', ruolo: 'Difensore', ovr: 78, eta: 31, valore: 10 },
  { nome: 'Matteo', cognome: 'Pessina', ruolo: 'Centrocampista', ovr: 82, eta: 27, valore: 18 },
  { nome: 'Daniel', cognome: 'Maldini', ruolo: 'Attaccante', ovr: 78, eta: 23, valore: 12 },
  { nome: 'Andrea', cognome: 'Colpani', ruolo: 'Attaccante', ovr: 80, eta: 25, valore: 15 },
  { nome: 'Milan', cognome: 'Đurić', ruolo: 'Attaccante', ovr: 76, eta: 34, valore: 5 },
];

// ==================== EMPOLI (70M €) ====================
const EMPOLI_GIOCATORI: GiocatoreData[] = [
  { nome: 'Elia', cognome: 'Caprile', ruolo: 'Portiere', ovr: 78, eta: 23, valore: 10 },
  { nome: 'Ardian', cognome: 'Ismajli', ruolo: 'Difensore', ovr: 76, eta: 28, valore: 6 },
  { nome: 'Sebastiano', cognome: 'Luperto', ruolo: 'Difensore', ovr: 74, eta: 28, valore: 5 },
  { nome: 'Szymon', cognome: 'Żurkowski', ruolo: 'Centrocampista', ovr: 78, eta: 27, valore: 8 },
  { nome: 'Razvan', cognome: 'Marin', ruolo: 'Centrocampista', ovr: 80, eta: 28, valore: 10 },
  { nome: 'Emmanuel', cognome: 'Gyasi', ruolo: 'Attaccante', ovr: 76, eta: 30, valore: 6 },
  { nome: 'Mattia', cognome: 'Destro', ruolo: 'Attaccante', ovr: 76, eta: 33, valore: 5 },
];

// ==================== VENEZIA (75M €) ====================
const VENEZIA_GIOCATORI: GiocatoreData[] = [
  { nome: 'Jesse', cognome: 'Joronen', ruolo: 'Portiere', ovr: 78, eta: 31, valore: 8 },
  { nome: 'Jay', cognome: 'Idzes', ruolo: 'Difensore', ovr: 74, eta: 24, valore: 5 },
  { nome: 'Tanner', cognome: 'Tessmann', ruolo: 'Centrocampista', ovr: 76, eta: 23, valore: 8 },
  { nome: 'Gianluca', cognome: 'Busio', ruolo: 'Centrocampista', ovr: 74, eta: 22, valore: 6 },
  { nome: 'Nicholas', cognome: 'Pierini', ruolo: 'Attaccante', ovr: 76, eta: 26, valore: 8 },
  { nome: 'Dennis', cognome: 'Johnsen', ruolo: 'Attaccante', ovr: 74, eta: 26, valore: 6 },
  { nome: 'Joel', cognome: 'Pohjanpalo', ruolo: 'Attaccante', ovr: 78, eta: 30, valore: 10 },
];

// ==================== FROSINONE (65M €) ====================
const FROSINONE_GIOCATORI: GiocatoreData[] = [
  { nome: 'Stefano', cognome: 'Turati', ruolo: 'Portiere', ovr: 76, eta: 23, valore: 8 },
  { nome: 'Ilario', cognome: 'Monterisi', ruolo: 'Difensore', ovr: 74, eta: 22, valore: 5 },
  { nome: 'Luca', cognome: 'Mazzitelli', ruolo: 'Centrocampista', ovr: 76, eta: 29, valore: 6 },
  { nome: 'Francesco', cognome: 'Gelli', ruolo: 'Centrocampista', ovr: 74, eta: 28, valore: 5 },
  { nome: 'Walid', cognome: 'Cheddira', ruolo: 'Attaccante', ovr: 78, eta: 26, valore: 10 },
  { nome: 'Marco', cognome: 'Brescianini', ruolo: 'Attaccante', ovr: 74, eta: 24, valore: 6 },
];

// ==================== CATANZARO (55M €) ====================
const CATANZARO_GIOCATORI: GiocatoreData[] = [
  { nome: 'Andrea', cognome: 'Fulignati', ruolo: 'Portiere', ovr: 74, eta: 30, valore: 4 },
  { nome: 'Matteo', cognome: 'Pietrantonio', ruolo: 'Difensore', ovr: 72, eta: 26, valore: 3 },
  { nome: 'Dimitrios', cognome: 'Sounas', ruolo: 'Centrocampista', ovr: 74, eta: 30, valore: 4 },
  { nome: 'Luca', cognome: 'Verna', ruolo: 'Centrocampista', ovr: 72, eta: 31, valore: 3 },
  { nome: 'Pietro', cognome: 'Iemmello', ruolo: 'Attaccante', ovr: 76, eta: 32, valore: 5 },
  { nome: 'Tommaso', cognome: 'Biasci', ruolo: 'Attaccante', ovr: 72, eta: 29, valore: 3 },
];

// ============================================================
// MAPPA GIOCATORI PER SQUADRA
// ============================================================

const GIOCATORI_MAPPA: { [key: number]: GiocatoreData[] } = {
  1: INTER_GIOCATORI,
  2: MILAN_GIOCATORI,
  3: JUVENTUS_GIOCATORI,
  4: ROMA_GIOCATORI,
  5: NAPOLI_GIOCATORI,
  6: ATALANTA_GIOCATORI,
  7: LAZIO_GIOCATORI,
  8: FIORENTINA_GIOCATORI,
  9: COMO_GIOCATORI,
  10: BOLOGNA_GIOCATORI,
  11: TORINO_GIOCATORI,
  12: GENOA_GIOCATORI,
  13: CAGLIARI_GIOCATORI,
  14: UDINESE_GIOCATORI,
  15: LECCE_GIOCATORI,
  16: MONZA_GIOCATORI,
  17: EMPOLI_GIOCATORI,
  18: VENEZIA_GIOCATORI,
  19: FROSINONE_GIOCATORI,
  20: CATANZARO_GIOCATORI,
};

// ============================================================
// GENERATORE GIOCATORI
// ============================================================

export function generaGiocatori(): Giocatore[] {
  const giocatori: Giocatore[] = [];
  let id = 1;

  for (const squadra of SQUADRE) {
    const lista = GIOCATORI_MAPPA[squadra.id] || [];
    for (const data of lista) {
      giocatori.push({
        id: id++,
        nome: data.nome,
        cognome: data.cognome,
        ruolo: data.ruolo,
        ovr: data.ovr,
        eta: data.eta,
        valore: data.valore,
        squadra_id: squadra.id,
        gol: 0,
        assist: 0,
        minuti: 0,
        tiro: Math.round(data.ovr * (0.5 + Math.random() * 0.5)),
        difesa: Math.round(data.ovr * (0.4 + Math.random() * 0.6)),
        velocita: Math.round(data.ovr * (0.5 + Math.random() * 0.5)),
        fisico: Math.round(data.ovr * (0.4 + Math.random() * 0.6)),
        tecnica: Math.round(data.ovr * (0.5 + Math.random() * 0.5)),
        intelligenza: Math.round(data.ovr * (0.4 + Math.random() * 0.6)),
      });
    }
  }

  return giocatori;
}

// ============================================================
// VERDETTI STAGIONE 2025/26
// ============================================================

export const VERDETTI_STAGIONE = {
  scudetto: 'Inter',
  championsLeague: ['Inter', 'Napoli', 'Roma', 'Como'],
  europaLeague: ['Milan', 'Juventus'],
  conferenceLeague: ['Atalanta'],
  promosse: ['Venezia', 'Frosinone', 'Monza'],
  retrocesse: ['Hellas Verona', 'Pisa'],
  capocannoniere: {
    nome: 'Lautaro Martínez',
    gol: 24,
    squadra: 'Inter'
  },
  assistman: {
    nome: 'Khvicha Kvaratskhelia',
    assist: 14,
    squadra: 'Napoli'
  }
};

// ============================================================
// TRASFERIMENTI ESTATE 2025
// ============================================================

export const TRASFERIMENTI_ESTATE = [
  { giocatore: 'Donyell Malen', da: 'Aston Villa', a: 'Roma', costo: 27 },
  { giocatore: 'Robinio Vaz', da: 'Marsiglia', a: 'Roma', costo: 25 },
  { giocatore: 'Giacomo Raspadori', da: 'Atletico Madrid', a: 'Atalanta', costo: 23 },
  { giocatore: 'Kenneth Taylor', da: 'Ajax', a: 'Lazio', costo: 16.85 },
  { giocatore: 'Petar Ratkov', da: 'Salisburgo', a: 'Lazio', costo: 15 },
  { giocatore: 'Alphadjo Cissé', da: 'Verona', a: 'Milan', costo: 9.5 },
  { giocatore: 'Manuel Akanji', da: 'Manchester City', a: 'Inter', costo: 40 },
  { giocatore: 'John Stones', da: 'Manchester City', a: 'Inter', costo: 45 },
  { giocatore: 'Luka Modric', da: 'Real Madrid', a: 'Milan', costo: 20 },
  { giocatore: 'Christopher Nkunku', da: 'Chelsea', a: 'Milan', costo: 45 },
  { giocatore: 'Niclas Fullkrug', da: 'West Ham', a: 'Milan', costo: 25 },
  { giocatore: 'Randal Kolo Muani', da: 'PSG', a: 'Juventus', costo: 50 },
  { giocatore: 'Joshua Zirkzee', da: 'Manchester United', a: 'Juventus', costo: 40 },
  { giocatore: 'Raphaël Varane', da: 'Manchester United', a: 'Como', costo: 30 },
];