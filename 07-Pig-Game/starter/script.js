'use strict';

//Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

//initializinbg reset function
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();
/*
let scores, currentScore, activePlayer, playing;

//initializinbg reset function
const init = function () {
  const scores = [0, 0];
  let currentScore = 0;
  let activePlayer = 0;
  let playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
*/

/*
//Starting conditions
const scoresZero = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
};
scoresZero();
const hideDice = function () {
  diceEl.classList.add('hidden');
};
*/

/*
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
//state variable of game is playing or not
let playing = true;
*/

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Rolling the dice

btnRoll.addEventListener('click', function () {
  if (playing) {
    console.log(3);
    // 1. Generating random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    // 2. display dice.
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //3. check for rolled 1: if true, switch to next player, if false, add dice roll to the current score
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to the next player
      switchPlayer();
      /*
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
    */
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1. add a current score to the score of the active player
    scores[activePlayer] += currentScore;
    //scores[1] = scores [1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2. check that score is >= 100 - if yes the player wins and finish the game.
    if (scores[activePlayer] >= 100) {
      //finish the game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //3. if not - switch to the next player.
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
//1. if not playing remove winner and activate the first player

/*
  if (!playing) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--winner');
    document;

    player0El.classList.add('player--active');
  }

  //2. hide the dice
  hideDice();
  //3. scores 0
  scoresZero();
  //4. current scores 0
  document.getElementById(`current--${activePlayer}`).textContent = 0;
});
*/

// const genes = [
//   'ABCA3',
//   'ABCB11',
//   'ABCC8',
//   'ABCD1',
//   'ABCD4',
//   'ACAD9',
//   'ACADM',
//   'ACADS',
//   'ACADSB',
//   'ACADVL',
//   'ACAT1',
//   'ACOX1',
//   'ACSF3',
//   'ADA',
//   'ADAMTS2',
//   'ADGRG1',
//   'ADK',
//   'AFF2',
//   'AGA',
//   'AGL',
//   'AGPS',
//   'AGXT',
//   'AHCY',
//   'AHI1',
//   'AIPL1',
//   'AIRE',
//   'ALDH3A2',
//   'ALDH4A1',
//   'ALDOB',
//   'ALG6',
//   'ALMS1',
//   'ALPL',
//   'AMT',
//   'ANO10',
//   'AP1S2',
//   'AQP2',
//   'ARG1',
//   'ARL13B',
//   'ARSA',
//   'ARSB',
//   'ARSE',
//   'ARX',
//   'ASL',
//   'ASNS',
//   'ASPA',
//   'ASS1',
//   'ATM',
//   'ATP6V1B1',
//   'ATP7A',
//   'ATP7B',
//   'ATRX',
//   'BBS1',
//   'BBS10',
//   'BBS12',
//   'BBS2',
//   'BCHE',
//   'BCKDHA',
//   'BCKDHB',
//   'BCS1L',
//   'BLM',
//   'BRWD3',
//   'BSND',
//   'BTD',
//   'CAPN3',
//   'CASQ2',
//   'CBS',
//   'CC2D2A',
//   'CCDC103',
//   'CCDC151',
//   'CCDC39',
//   'CCDC88C',
//   'CD40LG',
//   'CDH23',
//   'CEP290',
//   'CERKL',
//   'CFTR',
//   'CHM',
//   'CHRNE',
//   'CHRNG',
//   'CHST6',
//   'CIITA',
//   'CLCN1',
//   'CLN3',
//   'CLN5',
//   'CLN6',
//   'CLN8',
//   'CLRN1',
//   'CNGA1',
//   'CNGB1',
//   'CNGB3',
//   'COL27A1',
//   'COL4A3',
//   'COL4A4',
//   'COL4A5',
//   'COL7A1',
//   'CPS1',
//   'CPT1A',
//   'CPT2',
//   'CRADD',
//   'CRB1',
//   'CRYL1',
//   'CTNS',
//   'CTSK',
//   'CUL4B',
//   'CYBA',
//   'CYBB',
//   'CYP11A1',
//   'CYP11B1',
//   'CYP11B2',
//   'CYP17A1',
//   'CYP19A1',
//   'CYP1B1',
//   'CYP21A2',
//   'CYP27A1',
//   'CYP27B1',
//   'DBT',
//   'DCLRE1C',
//   'DCX',
//   'DDX11',
//   'DHCR7',
//   'DHDDS',
//   'DLD',
//   'DLG3',
//   'DMD',
//   'DNAH5',
//   'DNAI1',
//   'DNAI2',
//   'DNAL1',
//   'DPYD',
//   'DUOX2',
//   'DUOXA2',
//   'DYNC2H1',
//   'DYSF',
// ];

// for (const gene of genes) {
//   console.log(gene);
// }

const mottiGenes = [
  'ABCA3',
  'ABCB11',
  'ABCC8',
  'ABCD1',
  'ABCD4',
  'ACAD9',
  'ACADM',
  'ACADS',
  'ACADSB',
  'ACADVL',
  'ACAT1',
  'ACOX1',
  'ACSF3',
  'ADA',
  'ADAMTS2',
  'ADGRG1',
  'ADK',
  'AFF2',
  'AGA',
  'AGL',
  'AGPS',
  'AGXT',
  'AHCY',
  'AHI1',
  'AIPL1',
  'AIRE',
  'ALDH3A2',
  'ALDH4A1',
  'ALDOB',
  'ALG6',
  'ALMS1',
  'ALPL',
  'AMT',
  'ANO10',
  'AP1S2',
  'AQP2',
  'ARG1',
  'ARL13B',
  'ARSA',
  'ARSB',
  'ARSE',
  'ARX',
  'ASL',
  'ASNS',
  'ASPA',
  'ASS1',
  'ATM',
  'ATP6V1B1',
  'ATP7A',
  'ATP7B',
  'ATRX',
  'BBS1',
  'BBS10',
  'BBS12',
  'BBS2',
  'BCHE',
  'BCKDHA',
  'BCKDHB',
  'BCS1L',
  'BLM',
  'BRWD3',
  'BSND',
  'BTD',
  'CAPN3',
  'CASQ2',
  'CBS',
  'CC2D2A',
  'CCDC103',
  'CCDC151',
  'CCDC39',
  'CCDC88C',
  'CD40LG',
  'CDH23',
  'CEP290',
  'CERKL',
  'CFTR',
  'CHM',
  'CHRNE',
  'CHRNG',
  'CHST6',
  'CIITA',
  'CLCN1',
  'CLN3',
  'CLN5',
  'CLN6',
  'CLN8',
  'CLRN1',
  'CNGA1',
  'CNGB1',
  'CNGB3',
  'COL27A1',
  'COL4A3',
  'COL4A4',
  'COL4A5',
  'COL7A1',
  'CPS1',
  'CPT1A',
  'CPT2',
  'CRADD',
  'CRB1',
  'CRYL1',
  'CTNS',
  'CTSK',
  'CUL4B',
  'CYBA',
  'CYBB',
  'CYP11A1',
  'CYP11B1',
  'CYP11B2',
  'CYP17A1',
  'CYP19A1',
  'CYP1B1',
  'CYP21A2',
  'CYP27A1',
  'CYP27B1',
  'DBT',
  'DCLRE1C',
  'DCX',
  'DDX11',
  'DHCR7',
  'DHDDS',
  'DLD',
  'DLG3',
  'DMD',
  'DNAH5',
  'DNAI1',
  'DNAI2',
  'DNAL1',
  'DPYD',
  'DUOX2',
  'DUOXA2',
  'DYNC2H1',
  'DYSF',
  'EDA',
  'EIF2AK3',
  'EIF2B5',
  'ELP1',
  'EMD',
  'ERCC2',
  'ERCC6',
  'ERCC8',
  'ESCO2',
  'ETFA',
  'ETFB',
  'ETFDH',
  'ETHE1',
  'EVC',
  'EVC2',
  'EXOSC3',
  'EYS',
  'F11',
  'F5',
  'F8',
  'F9',
  'FAH',
  'FAM161A',
  'FANCA',
  'FANCC',
  'FANCG',
  'FGD1',
  'FH',
  'FKRP',
  'FKTN',
  'FMO3',
  'FMR1',
  'FTCD',
  'FTSJ1',
  'FXN',
  'G6PC',
  'G6PD',
  'GAA',
  'GALC',
  'GALE',
  'GALK1',
  'GALNS',
  'GALT',
  'GAMT',
  'GBA',
  'GBE1',
  'GCDH',
  'GDAP1',
  'GFM1',
  'GJB1',
  'GJB2',
  'GJB6',
  'GLA',
  'GLB1',
  'GLDC',
  'GLE1',
  'GNE',
  'GNPTAB',
  'GNPTG',
  'GNRHR',
  'GNS',
  'GP1BA',
  'GP9',
  'GPR143',
  'GRHPR',
  'GRIP1',
  'GUSB',
  'HADHA',
  'HAX1',
  'HBA1',
  'HBA2',
  'HBB',
  'HEXA',
  'HEXB',
  'HGD',
  'HGSNAT',
  'HJV',
  'HLCS',
  'HMGCL',
  'HOGA1',
  'HPS1',
  'HPS3',
  'HSD17B4',
  'HSD3B2',
  'HYAL1',
  'HYLS1',
  'IDH3B',
  'IDS',
  'IDUA',
  'IL1RAPL1',
  'IL2RG',
  'IVD',
  'IYD',
  'JAK3',
  'KCNJ11',
  'KDM5C',
  'L1CAM',
  'LAMA2',
  'LAMA3',
  'LAMB3',
  'LAMC2',
  'LCA5',
  'LDLRAP1',
  'LHX3',
  'LIFR',
  'LIPA',
  'LMBRD1',
  'LOXHD1',
  'LPL',
  'LRP2',
  'LRPPRC',
  'LYST',
  'MAN2B1',
  'MCCC1',
  'MCCC2',
  'MCEE',
  'MCOLN1',
  'MCPH1',
  'MED17',
  'MEFV',
  'MESP2',
  'MFSD8',
  'MID1',
  'MKS1',
  'MLC1',
  'MMAA',
  'MMAB',
  'MMACHC',
  'MMADHC',
  'MPI',
  'MPL',
  'MPV17',
  'MTHFR',
  'MTM1',
  'MTMR2',
  'MTRR',
  'MTTP',
  'MUT',
  'MVK',
  'MYO7A',
  'NAGA',
  'NAGLU',
  'NAGS',
  'NBN',
  'NDP',
  'NDRG1',
  'NDUFAF5',
  'NDUFS6',
  'NEB',
  'NPC1',
  'NPC2',
  'NPHP1',
  'NPHS1',
  'NPHS2',
  'NR0B1',
  'NR2E3',
  'NTRK1',
  'OAT',
  'OCA2',
  'OCRL',
  'OPA3',
  'OPHN1',
  'OTC',
  'OTOF',
  'P3H1',
  'PAH',
  'PAK3',
  'PANK2',
  'PC',
  'PCBD1',
  'PCCA',
  'PCCB',
  'PCDH15',
  'PDE6A',
  'PDHA1',
  'PDHB',
  'PEX1',
  'PEX10',
  'PEX12',
  'PEX2',
  'PEX6',
  'PEX7',
  'PFKM',
  'PGK1',
  'PHF8',
  'PHGDH',
  'PKHD1',
  'PLA2G6',
  'PLOD1',
  'PLP1',
  'PMM2',
  'POLG',
  'POLR1C',
  'POMGNT1',
  'POMT1',
  'POMT2',
  'POU3F4',
  'PPT1',
  'PQBP1',
  'PRF1',
  'PROP1',
  'PRPS1',
  'PSAP',
  'PTS',
  'PUS1',
  'PYGM',
  'QDPR',
  'RAB23',
  'RAG1',
  'RAG2',
  'RAPSN',
  'RARS2',
  'RAX',
  'RDH12',
  'RMRP',
  'RNASEH2B',
  'RP2',
  'RPE65',
  'RPGR',
  'RPGRIP1L',
  'RS1',
  'RTEL1',
  'SACS',
  'SAMHD1',
  'SCO2',
  'SEPSECS',
  'SERPINA1',
  'SGCA',
  'SGCB',
  'SGCD',
  'SGCG',
  'SGSH',
  'SH3TC2',
  'SLC12A3',
  'SLC12A6',
  'SLC16A2',
  'SLC17A5',
  'SLC19A3',
  'SLC22A5',
  'SLC25A13',
  'SLC25A15',
  'SLC25A20',
  'SLC26A2',
  'SLC26A3',
  'SLC26A4',
  'SLC35A3',
  'SLC37A4',
  'SLC39A4',
  'SLC46A1',
  'SLC4A11',
  'SLC5A5',
  'SLC6A19',
  'SLC6A8',
  'SLC7A7',
  'SMARCAL1',
  'SMN1',
  'SMPD1',
  'SPG11',
  'SPG7',
  'SPINK5',
  'STAR',
  'SUMF1',
  'SURF1',
  'SYN1',
  'TAT',
  'TCIRG1',
  'TCTN2',
  'TECPR2',
  'TF',
  'TFR2',
  'TG',
  'TGM1',
  'TH',
  'THOC2',
  'TMEM216',
  'TNXB',
  'TPO',
  'TPP1',
  'TRDN',
  'TRIM32',
  'TRMU',
  'TSFM',
  'TSHB',
  'TTC37',
  'TTPA',
  'TYMP',
  'TYR',
  'UGT1A1',
  'UPF3B',
  'USH1C',
  'USH1G',
  'USH2A',
  'VPS13A',
  'VPS13B',
  'VPS45',
  'VPS53',
  'VRK1',
  'VSX2',
  'WAS',
  'WHRN',
  'WNT10A',
  'XPA',
  'XPC',
  'ZDHHC9',
  'ZFYVE26',
  'ZNF711',
];

const genes3 = [
  'matan',
  'USH1G',
  'USH2A',
  'VPS13A',
  'VPS13B',
  'VPS45',
  'VPS53',
  'VRK1',
  'VSX2',
  'WAS',
  'WHRN',
  'WNT10A',
  'XPA',
  'XPC',
  'ZDHHC9',
  'ZFYVE26',
  'ZNF711',
];
/*
//Example
const diffGene = [];

for (const gene of genes3) {
  if (mottiGenes.includes(gene)) {
  } else {
    diffGene.push(gene);
    console.log(`${gene} gene is NOT INCLUDED in the bigger list`);
  }
}

console.log(diffGene);
*/

const sheba = [
  'ABCA3',
  'ABCA4',
  'ABCC8',
  'ABCC6',
  'ACADM',
  'ACADS',
  'ACADSB',
  'ACADVL',
  'COQ4',
  'AGA',
  'AGL',
  'AGXT',
  'CD59',
  'AIPL1',
  'AIRE',
  'ALDH3A2',
  'ALDH7A1',
  'ALPL',
  'AMT',
  'ARSA',
  'ASL',
  'ASNS',
  'ASPA',
  'ATM',
  'WISP3',
  'ATP7B',
  'ATP8B1',
  'AQP2',
  'BBS1',
  'BBS10',
  'TRIM32',
  'BBS12',
  'BBS2',
  'ARL6',
  'BBS4',
  'BCKDHA',
  'BCKDHB',
  'UQCRQ',
  'BLM',
  'TMEM38B',
  'CLCN1',
  'BTD',
  'SLC4A4',
  'CASQ2',
  'CDAN1',
  'RDH12',
  'CFH',
  'CFTR',
  'GUCY2C',
  'RAPSN',
  'PIP5K1C',
  'CLCN1',
  'BSND',
  'CLN5',
  'DHDDS',
  'CLRN1',
  'CERKL',
  'CNGA3',
  'CNGB3',
  'COL11A2',
  'ADAMTS2',
  'COL4A3',
  'COL4A4',
  'COL4A5',
  'CPS1',
  'CPT1A',
  'CPT2',
  'CRB1',
  'PRCD',
  'CTNS',
  'CTSC',
  'CTSK',
  'AMN',
  'CYBA',
  'CYBB',
  'CYP11B1',
  'CYP17A1',
  'CYP27A1',
  'CYP27B1',
  'VPS37A',
  'TECPR2',
  'DBT',
  'DCAF17',
  'GJB2',
  'GJB6',
  'CDH23',
  'STRC',
  'OTOA',
  'MYO15A',
  'DFNB59',
  'LOXHD1',
  'SYNE4',
  'LOXHD1',
  'TMPRSS3',
  'SULCA2',
  'DHCR24',
  'DHCR7',
  'DGAT1',
  'DLD',
  'DMD',
  'DNAL1',
  'DNAI1',
  'DNAI2',
  'DOLK',
  'BMPER',
  'DYSF',
  'EDA',
  'PRICKLE1',
  'EPM2A',
  'ERBB3',
  'ERCC5',
  'XPC',
  'ERCC6',
  'ERCC8',
  'GLE1',
  'ESCO2',
  'ETFDH',
  'ETFA',
  'EYS',
  'F7',
  'F8',
  'F9',
  'FAH',
  'IKBKAP',
  'HSPD1',
  'FAM161A',
  'FANCA',
  'FANCC',
  'FANCG',
  'GALNT3',
  'FH',
  'FKRP',
  'G6PC',
  'GAA',
  'SLC35A3',
  'GALC',
  'SAMD9',
  'GALT',
  'GBA',
  'GBE1',
  'GCDH',
  'TBCE',
  'FTO',
  'GH1',
  'GHR',
  'GLA',
  'CYP1B1',
  'GLDC',
  'GNE',
  'GNPTG',
  'GP9',
  'NBEAL2',
  'GP1BB',
  'CC2D1A',
  'GUCY2D',
  'HEXA',
  'HEXB',
  'HFE2',
  'HGD',
  'IDUA',
  'HGSNAT',
  'HMGCL',
  'HPD',
  'HPS3',
  'HPS6',
  'HSD17B4',
  'IGHMBP2',
  'AIMP1',
  'IL10RA',
  'INSR',
  'INVS',
  'ITGA2B',
  'ITGB3',
  'ITGB4',
  'IVD',
  'LAMA3',
  'LAMB3',
  'LAMC2',
  'LCA5',
  'LIFR',
  'LIPA',
  'LMNA',
  'DDR2',
  'MED25',
  'MCCC1',
  'MCCC2',
  'MCOLN1',
  'CEP152',
  'MECP2',
  'MLC1',
  'ACSF3',
  'MMADHC',
  'MOCS1',
  'MPL',
  'MRE11',
  'MTHFR',
  'MTTP',
  'MYBPC1',
  'MYO7A',
  'NAGLU',
  'NBN',
  'NCF1',
  'NDUFA11',
  'NDUFAF5',
  'NDUFS4',
  'NDUFS6',
  'NGLY1',
  'NPC1',
  'NPC2',
  'NPHS1',
  'CYP11A1',
  'NTRK1',
  'OCA2',
  'OPA3',
  'NR2E3',
  'OTC',
  'PAH',
  'PC',
  'PCCB',
  'PCDH15',
  'NUP62',
  'PEPD',
  'PEX1',
  'PEX2',
  'PEX6',
  'PHGDH',
  'SNAP29',
  'PKHD1',
  'PLA2G6',
  'SNX10',
  'PMM2',
  'MED17',
  'DGUOK',
  'MYH2',
  'PLEKHG2',
  'TBX19',
  'FKTN',
  'CAPN3',
  'POR',
  'PYGM',
  'RAG1',
  'RAG2',
  'DCLRE1C',
  'VPS53',
  'RLBP1',
  'RMRP',
  'ROGDI',
  'RPE65',
  'RSPH9',
  'RTEL1',
  'RYR1',
  'SAMHD1',
  'SCN9A',
  'SEC23B',
  'APTX',
  'SGCA',
  'SGCG',
  'SGSH',
  'POC1A',
  'SLC12A3',
  'SLC17A5',
  'SLC19A2',
  'SLC25A20',
  'FRMD4A',
  'SLC26A4',
  'SLC34A3',
  'MPI',
  'SLC2A2',
  'SLC37A4',
  'SLC45A2',
  'SARS2',
  'SLC25A1',
  'SLC6A8',
  'SLC7A7',
  'SLC3A1',
  '2p21',
  'TRPM6',
  'SMN1',
  'SMPD1',
  'PLAA',
  'HSD17B3',
  'SUMF1',
  'SURF1',
  'TCIRG1',
  'TK2',
  'TMEM216',
  'SDHA',
  'NEB',
  'TPP1',
  'TRMU',
  'SEPSECS',
  'TTC37',
  'PDE6G',
  'TSHR',
  'POLG',
  'TYMP',
  'TYR',
  'USH1C',
  'USH2A',
  'PIGN',
  'VDR',
  'VPS13A',
  'MAN1B1',
  'VRK1',
  'WNT10A',
  'WRN',
  'PUS1',
  'ZNF469',
  'SLC22A5',
  'MMACHC',
  'PRDX1',
  'MMADHC',
  'LMBRD1',
  'MMUT',
  'TH',
  'DPYD',
  'AAAS',
  'SLC26A2',
  'COL2A1',
  'TRPV4',
  'MATN3',
  'BMPR1B',
  'AOS',
  'CYP21A2',
  'ABCD1',
  'COL4A4',
  'COL4A3',
  'ALMS1',
  'IFT74',
  'BCS1L',
  'GAMT',
  'CLN3',
  'ASS1',
  'SLC25A13',
  'UGT1A1',
  'AVP',
  'TERT',
  'F2',
  'HADHA',
  'ALDOB',
  'RHO',
  'PRPH2',
  'RDH5',
  'RLBP1',
  'PFKM',
  'GLB1',
  'GH1',
  'CBS',
  'SLC25A15',
  'PTS',
  'CYP11B2',
  'LPL',
  'ACAD9',
  'MPV17',
  'FDX2',
  'GNPTAB',
  'GNS',
  'PDCN',
  'G6PC3',
  'PEX7',
  'PNPO',
  'TULP1',
  'CFAP418',
  'SMARCAL1',
  'ADA',
  'WAS',
  'POLH',
];

// checking if motti includes the genes of Sheba

const mottiDontHaveSheba = [];
const shebaDontHaveMotti = [];
const mottiLikeSheba = [];

for (const gene of sheba) {
  if (mottiGenes.includes(gene)) {
    // console.log(gene);
  } else {
    mottiDontHaveSheba.push(gene);
    // console.log(`${gene} gene is NOT INCLUDED in the bigger list`);
  }
}

// console.log(
//   `Motti don't have ${mottiDontHaveSheba.length} GENES and Sheba has!
// `
//   // ...shebaInsideMotti
// ); //  Motti don't have and Sheba has!

///////////////////

// checking if Sheba includes the genes of motti

for (const gene of mottiGenes) {
  if (sheba.includes(gene)) {
    mottiLikeSheba.push(gene);
  } else {
    shebaDontHaveMotti.push(gene);
    // console.log(`${gene} gene is NOT INCLUDED in the bigger list`);
  }
}

console.log(
  `Motty has ${mottiGenes.length} GENES.
Sheba has ${sheba.length} GENES.

Sheba don't have ${shebaDontHaveMotti.length} GENES and Motti has!
Motti don't have ${mottiDontHaveSheba.length} GENES and Sheba has! 

they have ${mottiLikeSheba.length} GENES in COMMON!!  
`
  // ...mottiInsideSheba
); // // Motti don't have and Sheba has!

//////////////////////

const aichilov = [
  'ABCA3',
  'ABCA4',
  'ABCC8',
  'ABCC6',
  'ACADM',
  'ACADS',
  'ACADSB',
  'ACADVL',
  'COQ4',
  'AGA',
  'AGL',
  'AGXT',
  'CD59',
  'AIPL1',
  'AIRE',
  'ALDH3A2',
  'ALDH7A1',
  'ALPL',
  'AMT',
  'ARSA',
  'ASL',
  'ASNS',
  'ASPA',
  'ATM',
  'WISP3',
  'ATP7B',
  'ATP8B1',
  'AQP2',
  'BBS1',
  'BBS10',
  'TRIM32',
  'BBS12',
  'BBS2',
  'ARL6',
  'BBS4',
  'BCKDHA',
  'BCKDHB',
  'UQCRQ',
  'BLM',
  'TMEM38B',
  'CLCN1',
  'BTD',
  'SLC4A4',
  'CASQ2',
  'CDAN1',
  'RDH12',
  'CFH',
  'CFTR',
  'GUCY2C',
  'RAPSN',
  'PIP5K1C',
  'CLCN1',
  'BSND',
  'CLN5',
  'DHDDS',
  'CLRN1',
  'CERKL',
  'CNGA3',
  'CNGB3',
  'COL11A2',
  'ADAMTS2',
  'COL4A3',
  'COL4A4',
  'COL4A5',
  'CPS1',
  'CPT1A',
  'CPT2',
  'CRB1',
  'PRCD',
  'CTNS',
  'CTSC',
  'CTSK',
  'AMN',
  'CYBA',
  'CYBB',
  'CYP11B1',
  'CYP17A1',
  'CYP27A1',
  'CYP27B1',
  'VPS37A',
  'TECPR2',
  'DBT',
  'DCAF17',
  'GJB2',
  'GJB6',
  'CDH23',
  'STRC',
  'OTOA',
  'MYO15A',
  'DFNB59',
  'LOXHD1',
  'SYNE4',
  'LOXHD1',
  'TMPRSS3',
  'SULCA2',
  'DHCR24',
  'DHCR7',
  'DGAT1',
  'DLD',
  'DMD',
  'DNAL1',
  'DNAI1',
  'DNAI2',
  'DOLK',
  'BMPER',
  'DYSF',
  'EDA',
  'PRICKLE1',
  'EPM2A',
  'ERBB3',
  'ERCC5',
  'XPC',
  'ERCC6',
  'ERCC8',
  'GLE1',
  'ESCO2',
  'ETFDH',
  'ETFA',
  'EYS',
  'F7',
  'F8',
  'F9',
  'FAH',
  'IKBKAP',
  'HSPD1',
  'FAM161A',
  'FANCA',
  'FANCC',
  'FANCG',
  'GALNT3',
  'FH',
  'FKRP',
  'G6PC',
  'GAA',
  'SLC35A3',
  'GALC',
  'SAMD9',
  'GALT',
  'GBA',
  'GBE1',
  'GCDH',
  'TBCE',
  'FTO',
  'GH1',
  'GHR',
  'GLA',
  'CYP1B1',
  'GLDC',
  'GNE',
  'GNPTG',
  'GP9',
  'NBEAL2',
  'GP1BB',
  'CC2D1A',
  'GUCY2D',
  'HEXA',
  'HEXB',
  'HFE2',
  'HGD',
  'IDUA',
  'HGSNAT',
  'HMGCL',
  'HPD',
  'HPS3',
  'HPS6',
  'HSD17B4',
  'IGHMBP2',
  'AIMP1',
  'IL10RA',
  'INSR',
  'INVS',
  'ITGA2B',
  'ITGB3',
  'ITGB4',
  'IVD',
  'LAMA3',
  'LAMB3',
  'LAMC2',
  'LCA5',
  'LIFR',
  'LIPA',
  'LMNA',
  'DDR2',
  'MED25',
  'MCCC1',
  'MCCC2',
  'MCOLN1',
  'CEP152',
  'MECP2',
  'MLC1',
  'ACSF3',
  'MMADHC',
  'MOCS1',
  'MPL',
  'MRE11',
  'MTHFR',
  'MTTP',
  'MYBPC1',
  'MYO7A',
  'NAGLU',
  'NBN',
  'NCF1',
  'NDUFA11',
  'NDUFAF5',
  'NDUFS4',
  'NDUFS6',
  'NGLY1',
  'NPC1',
  'NPC2',
  'NPHS1',
  'CYP11A1',
  'NTRK1',
  'OCA2',
  'OPA3',
  'NR2E3',
  'OTC',
  'PAH',
  'PC',
  'PCCB',
  'PCDH15',
  'NUP62',
  'PEPD',
  'PEX1',
  'PEX2',
  'PEX6',
  'PHGDH',
  'SNAP29',
  'PKHD1',
  'PLA2G6',
  'SNX10',
  'PMM2',
  'MED17',
  'DGUOK',
  'MYH2',
  'PLEKHG2',
  'TBX19',
  'FKTN',
  'CAPN3',
  'POR',
  'PYGM',
  'RAG1',
  'RAG2',
  'DCLRE1C',
  'VPS53',
  'RLBP1',
  'RMRP',
  'ROGDI',
  'RPE65',
  'RSPH9',
  'RTEL1',
  'RYR1',
  'SAMHD1',
  'SCN9A',
  'SEC23B',
  'APTX',
  'SGCA',
  'SGCG',
  'SGSH',
  'POC1A',
  'SLC12A3',
  'SLC17A5',
  'SLC19A2',
  'SLC25A20',
  'FRMD4A',
  'SLC26A4',
  'SLC34A3',
  'MPI',
  'SLC2A2',
  'SLC37A4',
  'SLC45A2',
  'SARS2',
  'SLC25A1',
  'SLC6A8',
  'SLC7A7',
  'SLC3A1',
  '2p21',
  'TRPM6',
  'SMN1',
  'SMPD1',
  'PLAA',
  'HSD17B3',
  'SUMF1',
  'SURF1',
  'TCIRG1',
  'TK2',
  'TMEM216',
  'SDHA',
  'NEB',
  'TPP1',
  'TRMU',
  'SEPSECS',
  'TTC37',
  'PDE6G',
  'TSHR',
  'POLG',
  'TYMP',
  'TYR',
  'USH1C',
  'USH2A',
  'PIGN',
  'VDR',
  'VPS13A',
  'MAN1B1',
  'VRK1',
  'WNT10A',
  'WRN',
  'PUS1',
  'ZNF469',
  'EOGT',
  'ADA',
  'CYP21A2',
  'ABCD1',
  'COL4A4',
  'ALMS1',
  'PSMB8',
  'BEST1',
  'HCN4',
  'C7',
  'CCM2',
  'C21ORF59',
  'CCDC65',
  'DNAH5',
  'CEP290',
  'ASS1',
  'MMACHC',
  'LMAN1',
  'TMEM165',
  'CDH23',
  'ADAMTSL4',
  'DSG1',
  'SLC38A8',
  'FMR1',
  'RDH5',
  'PFKM',
  'GLB1',
  'GPR56',
  'BCS1L',
  'GAMT',
  'ALDOB',
  'CBS',
  'CCDC88C',
  'CYP24A1',
  'LDLR',
  'HOGA1',
  'CYP11B2',
  'VPS11',
  'C11orf73',
  'LPL',
  'HADHA',
  'CUBN',
  'MMUT',
  'MPV17',
  'GNPTAB',
  'CHRNE',
  'NPHS1',
  'CLN3',
  'RAG1, RAG2',
  'SLC25A15',
  'DCXR',
  'CECR1',
  'SLC22A5',
  'PCCA',
  'BCHE',
  'C8ORF37',
  'PEX7',
  'SLC1A4',
  'ACP5',
  'SLC26A2',
  'PTS',
  'WNT10A',
  'AAAS',
  'TH',
];

aichilov;

const mottiDontHaveAichilov = [];
const aichilovDontHaveMotti = [];
const mottiLikeAichilov = [];

for (const gene of aichilov) {
  if (mottiGenes.includes(gene)) {
  } else {
    mottiDontHaveAichilov.push(gene);
  }
}

///////////////////

// checking if aichilov includes the genes of motti

for (const gene of mottiGenes) {
  if (aichilov.includes(gene)) {
    mottiLikeAichilov.push(gene);
  } else {
    aichilovDontHaveMotti.push(gene);
    // console.log(`${gene} gene is NOT INCLUDED in the bigger list`);
  }
}

console.log(
  `Motty has ${mottiGenes.length} GENES.
aichilov has ${aichilov.length} GENES.

aichilov don't have ${aichilovDontHaveMotti.length} GENES and Motti has!
Motti don't have ${mottiDontHaveAichilov.length} GENES and aichilov has! 

they have ${mottiLikeAichilov.length} GENES in COMMON!!  
`
  // ...mottiInsideSheba
);

///////////////////////////////////////////////
// checking if aichilov includes the genes of Sheba and by versa

const shebaDontHaveAichilov = [];
const aichilovDontHaveSheba = [];
const shebaLikeAichilov = [];

for (const gene of aichilov) {
  if (sheba.includes(gene)) {
  } else {
    shebaDontHaveAichilov.push(gene);
  }
}

///////////////////

// checking if aichilov includes the genes of motti

for (const gene of sheba) {
  if (aichilov.includes(gene)) {
    shebaLikeAichilov.push(gene);
  } else {
    aichilovDontHaveSheba.push(gene);
    // console.log(`${gene} gene is NOT INCLUDED in the bigger list`);
  }
}

console.log(
  `Sheba has ${sheba.length} GENES.
Aichilov has ${aichilov.length} GENES.

Aichilov don't have ${aichilovDontHaveSheba.length} GENES and Sheba has!
Sheba don't have ${shebaDontHaveAichilov.length} GENES and aichilov has! 

they have ${shebaLikeAichilov.length} GENES in COMMON!!  
`
  // ...mottiInsideSheba
);

const a = aichilovDontHaveSheba.length;
const b = shebaDontHaveAichilov.length;
const c = sheba.length;
const d = aichilov.length;
console.log(`Sheba has ${Math.trunc(
  (a / d) * 100
)}% genes that Aichilov don't have.
Aichilov has ${Math.trunc((b / c) * 100)}% genes that Sheba don't have `);
