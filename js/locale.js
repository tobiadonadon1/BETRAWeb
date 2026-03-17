/**
 * Betra i18n & currency locale system
 * Languages: British English, American English, Italiano, Français
 * Currency: GBP (£), USD ($), EUR (€)
 */
(function() {
  const STORAGE_KEY = 'betra-locale';

  const CURRENCY = {
    'en-GB': '£',
    'en-US': '$',
    'it': '€',
    'fr': '€'
  };

  // TODO: translate - Italian and French need full translations
  const T = {
    'en-GB': {
      nav: { product: 'Product', howItWorks: 'How it Works', pricing: 'Pricing', team: 'Team', getStarted: 'Get Started Free' },
      hero: { badge: 'TRACK · ANALYZE · IMPROVE', h1a: 'Your bets.', h1b: 'Your data.', h1c: 'Your edge.', sub: "Betra is the analytics platform that turns your betting history into actionable insight — one unified dashboard for every sportsbook you use.", startTracking: 'Start Tracking Free', seeHow: 'See How It Works' },
      modal: { title: 'Get early access', sub: "Join Betra. We'll notify you when we launch.", nameLabel: 'Name & Surname', namePlaceholder: 'John Smith', emailLabel: 'Email', emailPlaceholder: 'john@example.com', submit: 'Get Early Access', successTitle: "You're on the list", successSub: "We'll be in touch soon.", close: 'Close', sending: 'Sending…' },
      philosophy: { label: 'The Philosophy', title1: 'Most people bet on instinct.', title2: 'The best bet on data.', quote: '"What gets measured gets managed. The difference between a losing bettor and a consistent one isn\'t luck — it\'s information. Betra gives everyone access to the same data edge the professionals use."', cite: 'Betra founding principle', precision: 'Precision Tracking', precisionDesc: 'Every ticket logged with full context. Odds, stake, sportsbook, market — no data left behind.', pattern: 'Pattern Recognition', patternDesc: 'Discover which sports, leagues, and bet types you genuinely profit from — and eliminate the leaks.', continuous: 'Continuous Improvement', continuousDesc: 'Track ROI over time. See your edge clearly, adapt your strategy, and improve every month.', unified: 'Unified Portfolio', unifiedDesc: 'Bet365, DraftKings, Snai, FanDuel — all your sportsbooks in one clean analytics hub.' },
      product: { label: 'The Product', title1: 'Professional-grade analytics.', title2: 'Zero complexity.', ocr: 'OCR Bet Scanning', ocrDesc: 'Snap a screenshot of any bet slip. Betra reads it automatically — odds, stake, legs, everything.', dashboard: 'Full Analytics Dashboard', dashboardDesc: 'ROI broken down by sport, league, bet type, and sportsbook. Know exactly where you win.', live: 'Live Match Monitoring', liveDesc: "Real-time scores for every active ticket. See if you're winning or losing — in the moment.", bankroll: 'Bankroll Management', bankrollDesc: 'Set a starting bankroll. Watch it evolve as bets settle — with full curve history.', multileg: 'Multi-Leg Bet Tracking', multilegDesc: 'Visual progress bars for accumulators. Legs won, legs pending, legs remaining — at a glance.', perfOverview: 'Performance Overview', last30: 'Last 30 days', netPnl: 'Net P&L', winRate: 'Win Rate', pnlTrend: 'P&L Trend', activeGames: 'Active Games', win: 'Win' },
      hiw: { label: 'How It Works', title: 'Four steps. Zero friction.', sub: "No sportsbook integration needed. No credentials. Just log your bets and let Betra do the rest.", step1: 'Place Your Bet', step1Desc: 'Bet on any sportsbook as you normally would. Betra never touches your accounts.', step2: 'Scan or Enter', step2Desc: 'Upload a screenshot of your slip. OCR auto-fills every detail in seconds.', step3: 'Track Live', step3Desc: 'Follow active tickets with live scores and instant notifications when bets settle.', step4: 'Analyze & Improve', step4Desc: 'Explore your full analytics dashboard. Find patterns. Refine your strategy.' },
      pricing: { label: 'Pricing', title: "Start free. Scale when you're ready.", sub: 'Every tier delivers standalone value. Pay only for the depth you need.', free: 'Free', pro: 'Pro', elite: 'Elite', perMo: '/mo', freeDesc: 'Start tracking with no commitment. See your P&L from day one.', proDesc: 'The full analytics layer. For those serious about improving their strategy.', eliteDesc: 'Full power for high-volume, data-driven users who track every detail.', mostPopular: 'Most Popular', getStarted: 'Get Started', startPro: 'Start Pro', goElite: 'Go Elite', manualEntry: 'Manual bet entry', basicPnl: 'Basic P&L + win rate', history30: '30-day history', liveScore: 'Live score monitoring', ocrScan: 'OCR scanning', analyticsDash: 'Analytics dashboard', everythingFree: 'Everything in Free', ocrScreenshot: 'OCR screenshot scanning', unlimitedHistory: 'Unlimited history', analyticsSport: 'Analytics by sport & league', multiSportsbook: 'Multi-sportsbook comparison', advancedNotif: 'Advanced notifications', everythingPro: 'Everything in Pro', bankrollMgmt: 'Bankroll management', streakPattern: 'Streak & pattern analysis', dataExport: 'Data export — CSV & PDF', customTags: 'Custom tags & categories', earlyAccess: 'Early access + priority support' },
      team: { label: 'The Team', title: 'From spreadsheets to strategy.', sub: 'Betra started as a personal problem — tracking performance across multiple sportsbooks was painful. We built the tool we wished existed.' },
      cta: { title1: 'Ready to take control', title2: 'of your betting data?', sub: 'Join Betra. Track smarter, analyze deeper, improve continuously.', btn: 'Start Tracking for Free' },
      footer: { copyright: '© 2026 Betra. All rights reserved.', privacy: 'Privacy', terms: 'Terms', contact: 'Contact' },
      app: { trackAnalyze: 'Track. Analyze. Win.', netPnl: 'NET P&L', winRate: 'WIN RATE', pnlTrend30: 'P&L TREND · 30D', activeGames: 'ACTIVE GAMES' }
    },
    'en-US': {
      nav: { product: 'Product', howItWorks: 'How It Works', pricing: 'Pricing', team: 'Team', getStarted: 'Get Started Free' },
      hero: { badge: 'TRACK · ANALYZE · IMPROVE', h1a: 'Your bets.', h1b: 'Your data.', h1c: 'Your edge.', sub: "Betra is the analytics platform that turns your betting history into actionable insight — one unified dashboard for every sportsbook you use.", startTracking: 'Start Tracking Free', seeHow: 'See How It Works' },
      modal: { title: 'Get early access', sub: "Join Betra. We'll notify you when we launch.", nameLabel: 'Name & Surname', namePlaceholder: 'John Smith', emailLabel: 'Email', emailPlaceholder: 'john@example.com', submit: 'Get Early Access', successTitle: "You're on the list", successSub: "We'll be in touch soon.", close: 'Close', sending: 'Sending…' },
      philosophy: { label: 'The Philosophy', title1: 'Most people bet on instinct.', title2: 'The best bet on data.', quote: '"What gets measured gets managed. The difference between a losing bettor and a consistent one isn\'t luck — it\'s information. Betra gives everyone access to the same data edge the professionals use."', cite: 'Betra founding principle', precision: 'Precision Tracking', precisionDesc: 'Every ticket logged with full context. Odds, stake, sportsbook, market — no data left behind.', pattern: 'Pattern Recognition', patternDesc: 'Discover which sports, leagues, and bet types you genuinely profit from — and eliminate the leaks.', continuous: 'Continuous Improvement', continuousDesc: 'Track ROI over time. See your edge clearly, adapt your strategy, and improve every month.', unified: 'Unified Portfolio', unifiedDesc: 'Bet365, DraftKings, Snai, FanDuel — all your sportsbooks in one clean analytics hub.' },
      product: { label: 'The Product', title1: 'Professional-grade analytics.', title2: 'Zero complexity.', ocr: 'OCR Bet Scanning', ocrDesc: 'Snap a screenshot of any bet slip. Betra reads it automatically — odds, stake, legs, everything.', dashboard: 'Full Analytics Dashboard', dashboardDesc: 'ROI broken down by sport, league, bet type, and sportsbook. Know exactly where you win.', live: 'Live Match Monitoring', liveDesc: "Real-time scores for every active ticket. See if you're winning or losing — in the moment.", bankroll: 'Bankroll Management', bankrollDesc: 'Set a starting bankroll. Watch it evolve as bets settle — with full curve history.', multileg: 'Multi-Leg Bet Tracking', multilegDesc: 'Visual progress bars for accumulators. Legs won, legs pending, legs remaining — at a glance.', perfOverview: 'Performance Overview', last30: 'Last 30 days', netPnl: 'Net P&L', winRate: 'Win Rate', pnlTrend: 'P&L Trend', activeGames: 'Active Games', win: 'Win' },
      hiw: { label: 'How It Works', title: 'Four steps. Zero friction.', sub: "No sportsbook integration needed. No credentials. Just log your bets and let Betra do the rest.", step1: 'Place Your Bet', step1Desc: 'Bet on any sportsbook as you normally would. Betra never touches your accounts.', step2: 'Scan or Enter', step2Desc: 'Upload a screenshot of your slip. OCR auto-fills every detail in seconds.', step3: 'Track Live', step3Desc: 'Follow active tickets with live scores and instant notifications when bets settle.', step4: 'Analyze & Improve', step4Desc: 'Explore your full analytics dashboard. Find patterns. Refine your strategy.' },
      pricing: { label: 'Pricing', title: "Start free. Scale when you're ready.", sub: 'Every tier delivers standalone value. Pay only for the depth you need.', free: 'Free', pro: 'Pro', elite: 'Elite', perMo: '/mo', freeDesc: 'Start tracking with no commitment. See your P&L from day one.', proDesc: 'The full analytics layer. For those serious about improving their strategy.', eliteDesc: 'Full power for high-volume, data-driven users who track every detail.', mostPopular: 'Most Popular', getStarted: 'Get Started', startPro: 'Start Pro', goElite: 'Go Elite', manualEntry: 'Manual bet entry', basicPnl: 'Basic P&L + win rate', history30: '30-day history', liveScore: 'Live score monitoring', ocrScan: 'OCR scanning', analyticsDash: 'Analytics dashboard', everythingFree: 'Everything in Free', ocrScreenshot: 'OCR screenshot scanning', unlimitedHistory: 'Unlimited history', analyticsSport: 'Analytics by sport & league', multiSportsbook: 'Multi-sportsbook comparison', advancedNotif: 'Advanced notifications', everythingPro: 'Everything in Pro', bankrollMgmt: 'Bankroll management', streakPattern: 'Streak & pattern analysis', dataExport: 'Data export — CSV & PDF', customTags: 'Custom tags & categories', earlyAccess: 'Early access + priority support' },
      team: { label: 'The Team', title: 'From spreadsheets to strategy.', sub: 'Betra started as a personal problem — tracking performance across multiple sportsbooks was painful. We built the tool we wished existed.' },
      cta: { title1: 'Ready to take control', title2: 'of your betting data?', sub: 'Join Betra. Track smarter, analyze deeper, improve continuously.', btn: 'Start Tracking for Free' },
      footer: { copyright: '© 2026 Betra. All rights reserved.', privacy: 'Privacy', terms: 'Terms', contact: 'Contact' },
      app: { trackAnalyze: 'Track. Analyze. Win.', netPnl: 'NET P&L', winRate: 'WIN RATE', pnlTrend30: 'P&L TREND · 30D', activeGames: 'ACTIVE GAMES' }
    },
    // TODO: translate - Italian translations needed
    'it': {
      nav: { product: 'Prodotto', howItWorks: 'Come funziona', pricing: 'Prezzi', team: 'Team', getStarted: 'Inizia gratis' },
      hero: { badge: 'TRACCIA · ANALIZZA · MIGLIORA', h1a: 'Le tue scommesse.', h1b: 'I tuoi dati.', h1c: 'Il tuo vantaggio.', sub: "Betra è la piattaforma di analytics che trasforma la tua cronologia di scommesse in insight azionabili — una dashboard unificata per ogni bookmaker.", startTracking: 'Inizia a tracciare gratis', seeHow: 'Scopri come funziona' },
      modal: { title: 'Accedi in anteprima', sub: "Unisciti a Betra. Ti avviseremo al lancio.", nameLabel: 'Nome e cognome', namePlaceholder: 'Mario Rossi', emailLabel: 'Email', emailPlaceholder: 'mario@esempio.it', submit: 'Richiedi accesso', successTitle: "Sei in lista", successSub: "Ti contatteremo presto.", close: 'Chiudi', sending: 'Invio…' },
      philosophy: { label: 'La filosofia', title1: 'La maggior parte scommette d\'istinto.', title2: 'I migliori scommettono sui dati.', quote: '"Ciò che viene misurato viene gestito. La differenza tra uno scommettitore perdente e uno costante non è fortuna — è informazione. Betra dà a tutti accesso allo stesso vantaggio dati dei professionisti."', cite: 'Principio fondante Betra', precision: 'Tracciamento preciso', precisionDesc: 'Ogni biglietto registrato con contesto completo. Quote, puntata, bookmaker, mercato — nessun dato lasciato indietro.', pattern: 'Riconoscimento pattern', patternDesc: 'Scopri da quali sport, leghe e tipi di scommessa guadagni davvero — ed elimina le perdite.', continuous: 'Miglioramento continuo', continuousDesc: 'Traccia il ROI nel tempo. Vedi chiaramente il tuo vantaggio, adatta la strategia e migliora ogni mese.', unified: 'Portafoglio unificato', unifiedDesc: 'Bet365, DraftKings, Snai, FanDuel — tutti i tuoi bookmaker in un unico hub analytics.' },
      product: { label: 'Il prodotto', title1: 'Analytics di livello professionale.', title2: 'Zero complessità.', ocr: 'Scansione OCR scommesse', ocrDesc: 'Scatta uno screenshot di qualsiasi schedina. Betra la legge automaticamente — quote, puntata, legs, tutto.', dashboard: 'Dashboard analytics completa', dashboardDesc: 'ROI suddiviso per sport, lega, tipo di scommessa e bookmaker. Sai esattamente dove vinci.', live: 'Monitoraggio partite live', liveDesc: "Punteggi in tempo reale per ogni biglietto attivo. Vedi se stai vincendo o perdendo — sul momento.", bankroll: 'Gestione bankroll', bankrollDesc: 'Imposta un bankroll iniziale. Guardalo evolversi con le scommesse — con cronologia completa.', multileg: 'Tracciamento scommesse multi-leg', multilegDesc: 'Barre di progresso per accumulatori. Legs vinte, in attesa, rimanenti — a colpo d\'occhio.', perfOverview: 'Panoramica performance', last30: 'Ultimi 30 giorni', netPnl: 'P&L netto', winRate: 'Win rate', pnlTrend: 'Trend P&L', activeGames: 'Partite attive', win: 'Vincita' },
      hiw: { label: 'Come funziona', title: 'Quattro passi. Zero attrito.', sub: "Nessuna integrazione bookmaker. Nessuna credenziale. Registra le scommesse e lascia fare a Betra.", step1: 'Piazza la scommessa', step1Desc: 'Scommetti su qualsiasi bookmaker come sempre. Betra non tocca mai i tuoi account.', step2: 'Scansiona o inserisci', step2Desc: 'Carica uno screenshot della schedina. L\'OCR compila ogni dettaglio in secondi.', step3: 'Traccia live', step3Desc: 'Segui i biglietti attivi con punteggi live e notifiche istantanee quando le scommesse si chiudono.', step4: 'Analizza e migliora', step4Desc: 'Esplora la dashboard analytics completa. Trova pattern. Affina la strategia.' },
      pricing: { label: 'Prezzi', title: "Inizia gratis. Scala quando sei pronto.", sub: 'Ogni tier offre valore autonomo. Paga solo per la profondità che ti serve.', free: 'Gratis', pro: 'Pro', elite: 'Elite', perMo: '/mese', freeDesc: 'Inizia a tracciare senza impegno. Vedi il tuo P&L dal primo giorno.', proDesc: 'Il layer analytics completo. Per chi è serio nel migliorare la strategia.', eliteDesc: 'Potenza completa per utenti ad alto volume che tracciano ogni dettaglio.', mostPopular: 'Più popolare', getStarted: 'Inizia', startPro: 'Avvia Pro', goElite: 'Vai Elite', manualEntry: 'Inserimento manuale', basicPnl: 'P&L base + win rate', history30: 'Cronologia 30 giorni', liveScore: 'Monitoraggio punteggi live', ocrScan: 'Scansione OCR', analyticsDash: 'Dashboard analytics', everythingFree: 'Tutto in Gratis', ocrScreenshot: 'Scansione screenshot OCR', unlimitedHistory: 'Cronologia illimitata', analyticsSport: 'Analytics per sport e lega', multiSportsbook: 'Confronto multi-bookmaker', advancedNotif: 'Notifiche avanzate', everythingPro: 'Tutto in Pro', bankrollMgmt: 'Gestione bankroll', streakPattern: 'Analisi streak e pattern', dataExport: 'Esportazione dati — CSV e PDF', customTags: 'Tag e categorie personalizzate', earlyAccess: 'Accesso anticipato + supporto prioritario' },
      team: { label: 'Il team', title: 'Da fogli di calcolo a strategia.', sub: 'Betra è nato da un problema personale — tracciare le performance su più bookmaker era doloroso. Abbiamo costruito lo strumento che avremmo voluto avere.' },
      cta: { title1: 'Pronto a prendere il controllo', title2: 'dei tuoi dati di scommesse?', sub: 'Unisciti a Betra. Traccia meglio, analizza più a fondo, migliora continuamente.', btn: 'Inizia a tracciare gratis' },
      footer: { copyright: '© 2026 Betra. Tutti i diritti riservati.', privacy: 'Privacy', terms: 'Termini', contact: 'Contatti' },
      app: { trackAnalyze: 'Traccia. Analizza. Vinci.', netPnl: 'P&L NETTO', winRate: 'WIN RATE', pnlTrend30: 'TREND P&L · 30G', activeGames: 'PARTITE ATTIVE' }
    },
    // TODO: translate - French translations needed
    'fr': {
      nav: { product: 'Produit', howItWorks: 'Comment ça marche', pricing: 'Tarifs', team: 'Équipe', getStarted: 'Commencer gratuitement' },
      hero: { badge: 'SUIVRE · ANALYSER · AMÉLIORER', h1a: 'Vos paris.', h1b: 'Vos données.', h1c: 'Votre avantage.', sub: "Betra est la plateforme d'analytics qui transforme votre historique de paris en insights actionnables — un tableau de bord unifié pour chaque bookmaker.", startTracking: 'Commencer le suivi gratuit', seeHow: 'Voir comment ça marche' },
      modal: { title: 'Accès anticipé', sub: "Rejoignez Betra. Nous vous préviendrons au lancement.", nameLabel: 'Nom et prénom', namePlaceholder: 'Jean Dupont', emailLabel: 'Email', emailPlaceholder: 'jean@exemple.fr', submit: 'Obtenir l\'accès', successTitle: "Vous êtes sur la liste", successSub: "Nous vous contacterons bientôt.", close: 'Fermer', sending: 'Envoi…' },
      philosophy: { label: 'La philosophie', title1: 'La plupart parient à l\'instinct.', title2: 'Les meilleurs parient sur les données.', quote: '"Ce qui est mesuré est géré. La différence entre un parieur perdant et un parieur régulier n\'est pas la chance — c\'est l\'information. Betra donne à tous accès au même avantage données que les professionnels."', cite: 'Principe fondateur Betra', precision: 'Suivi de précision', precisionDesc: 'Chaque ticket enregistré avec contexte complet. Cotes, mise, bookmaker, marché — aucune donnée laissée de côté.', pattern: 'Reconnaissance des patterns', patternDesc: 'Découvrez quels sports, ligues et types de paris vous rapportent vraiment — et éliminez les fuites.', continuous: 'Amélioration continue', continuousDesc: 'Suivez le ROI dans le temps. Voyez clairement votre avantage, adaptez votre stratégie et améliorez chaque mois.', unified: 'Portefeuille unifié', unifiedDesc: 'Bet365, DraftKings, Snai, FanDuel — tous vos bookmakers dans un hub analytics unique.' },
      product: { label: 'Le produit', title1: 'Analytics de niveau professionnel.', title2: 'Zéro complexité.', ocr: 'Scan OCR des paris', ocrDesc: 'Prenez une capture d\'écran de n\'importe quel ticket. Betra le lit automatiquement — cotes, mise, legs, tout.', dashboard: 'Tableau de bord analytics complet', dashboardDesc: 'ROI détaillé par sport, ligue, type de pari et bookmaker. Sachez exactement où vous gagnez.', live: 'Suivi des matchs en direct', liveDesc: "Scores en temps réel pour chaque ticket actif. Voyez si vous gagnez ou perdez — sur le moment.", bankroll: 'Gestion du bankroll', bankrollDesc: 'Définissez un bankroll initial. Regardez-le évoluer avec les paris — avec historique complet.', multileg: 'Suivi des paris multi-leg', multilegDesc: 'Barres de progression pour les combinés. Legs gagnées, en attente, restantes — en un coup d\'œil.', perfOverview: 'Aperçu des performances', last30: '30 derniers jours', netPnl: 'P&L net', winRate: 'Taux de victoire', pnlTrend: 'Tendance P&L', activeGames: 'Matchs actifs', win: 'Gain' },
      hiw: { label: 'Comment ça marche', title: 'Quatre étapes. Zéro friction.', sub: "Aucune intégration bookmaker. Aucun identifiant. Enregistrez vos paris et laissez Betra faire le reste.", step1: 'Placez votre pari', step1Desc: 'Pariez sur n\'importe quel bookmaker comme d\'habitude. Betra ne touche jamais à vos comptes.', step2: 'Scannez ou saisissez', step2Desc: 'Téléchargez une capture d\'écran de votre ticket. L\'OCR remplit chaque détail en secondes.', step3: 'Suivez en direct', step3Desc: 'Suivez les tickets actifs avec scores live et notifications instantanées quand les paris se soldent.', step4: 'Analysez et améliorez', step4Desc: 'Explorez votre tableau de bord analytics complet. Trouvez des patterns. Affinez votre stratégie.' },
      pricing: { label: 'Tarifs', title: "Commencez gratuit. Passez à l'échelle quand vous êtes prêt.", sub: 'Chaque niveau offre une valeur autonome. Payez uniquement pour la profondeur dont vous avez besoin.', free: 'Gratuit', pro: 'Pro', elite: 'Elite', perMo: '/mois', freeDesc: 'Commencez le suivi sans engagement. Voyez votre P&L dès le premier jour.', proDesc: 'La couche analytics complète. Pour ceux qui sont sérieux dans l\'amélioration de leur stratégie.', eliteDesc: 'Pleine puissance pour les utilisateurs à fort volume qui suivent chaque détail.', mostPopular: 'Le plus populaire', getStarted: 'Commencer', startPro: 'Démarrer Pro', goElite: 'Passer Elite', manualEntry: 'Saisie manuelle', basicPnl: 'P&L de base + taux de victoire', history30: 'Historique 30 jours', liveScore: 'Suivi des scores live', ocrScan: 'Scan OCR', analyticsDash: 'Tableau de bord analytics', everythingFree: 'Tout en Gratuit', ocrScreenshot: 'Scan de capture OCR', unlimitedHistory: 'Historique illimité', analyticsSport: 'Analytics par sport et ligue', multiSportsbook: 'Comparaison multi-bookmakers', advancedNotif: 'Notifications avancées', everythingPro: 'Tout en Pro', bankrollMgmt: 'Gestion du bankroll', streakPattern: 'Analyse des séries et patterns', dataExport: 'Export des données — CSV et PDF', customTags: 'Tags et catégories personnalisés', earlyAccess: 'Accès anticipé + support prioritaire' },
      team: { label: 'L\'équipe', title: 'Des feuilles de calcul à la stratégie.', sub: 'Betra est né d\'un problème personnel — suivre les performances sur plusieurs bookmakers était pénible. Nous avons construit l\'outil que nous aurions voulu avoir.' },
      cta: { title1: 'Prêt à prendre le contrôle', title2: 'de vos données de paris ?', sub: 'Rejoignez Betra. Suivez plus intelligemment, analysez plus en profondeur, améliorez continuellement.', btn: 'Commencer le suivi gratuit' },
      footer: { copyright: '© 2026 Betra. Tous droits réservés.', privacy: 'Confidentialité', terms: 'Conditions', contact: 'Contact' },
      app: { trackAnalyze: 'Suivre. Analyser. Gagner.', netPnl: 'P&L NET', winRate: 'TAUX VICTOIRE', pnlTrend30: 'TENDANCE P&L · 30J', activeGames: 'MATCHS ACTIFS' }
    }
  };

  function getLocale() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && T[saved]) return saved;
    return 'en-GB';
  }

  function setLocale(locale) {
    if (!T[locale]) return;
    localStorage.setItem(STORAGE_KEY, locale);
    applyLocale(locale);
  }

  function getT(locale, key) {
    const parts = key.split('.');
    let obj = T[locale] || T['en-GB'];
    for (const p of parts) {
      obj = obj?.[p];
      if (obj === undefined) obj = (T['en-GB'] || {})[parts[0]]?.[parts[1]];
    }
    return obj ?? key;
  }

  function applyLocale(locale) {
    const t = (k) => getT(locale, k);
    const sym = CURRENCY[locale] || '€';

    document.documentElement.lang = locale.startsWith('en') ? 'en' : locale;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = t(key);
      if (el.getAttribute('aria-label')) {
        el.setAttribute('aria-label', val);
      } else if (el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA') {
        el.textContent = val;
      }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
    });

    document.querySelectorAll('.t-currency').forEach(el => { el.textContent = sym; });
    document.querySelectorAll('[data-currency-symbol]').forEach(el => { el.textContent = sym; });

    document.querySelectorAll('[data-price-format]').forEach(el => {
      const fmt = el.getAttribute('data-price-format');
      const stake = el.getAttribute('data-price-stake') || '';
      const win = el.getAttribute('data-price-win') || '';
      const odds = el.getAttribute('data-price-odds') || '';
      const amount = el.getAttribute('data-price-amount') || '';
      const winLabel = t('product.win');
      el.textContent = fmt
        .replace(/\{sym\}/g, sym)
        .replace('{stake}', stake)
        .replace('{win}', win)
        .replace('{odds}', odds)
        .replace('{amount}', amount)
        .replace('{winLabel}', winLabel);
    });

    document.querySelectorAll('[data-price-simple]').forEach(el => {
      const val = el.getAttribute('data-price-value');
      const prefix = el.getAttribute('data-price-prefix') || '';
      el.textContent = prefix + sym + val;
    });

    const flagEl = document.getElementById('lang-flag');
    const trigger = document.getElementById('lang-trigger');
    const dropdown = document.getElementById('lang-dropdown');
    if (flagEl) {
      const opt = document.querySelector(`.lang-option[data-locale="${locale}"]`);
      flagEl.textContent = opt ? opt.dataset.flag : '🇬🇧';
    }
    if (trigger) trigger.setAttribute('aria-expanded', 'false');
    if (dropdown) {
      dropdown.classList.remove('open');
      dropdown.setAttribute('aria-hidden', 'true');
    }
    document.querySelectorAll('.lang-option').forEach(el => {
      el.classList.toggle('active', el.dataset.locale === locale);
    });
  }

  function init() {
    const locale = getLocale();
    const trigger = document.getElementById('lang-trigger');
    const dropdown = document.getElementById('lang-dropdown');

    if (trigger && dropdown) {
      trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = dropdown.classList.toggle('open');
        trigger.setAttribute('aria-expanded', isOpen);
        dropdown.setAttribute('aria-hidden', !isOpen);
      });

      document.querySelectorAll('.lang-option').forEach(opt => {
        opt.addEventListener('click', (e) => {
          e.stopPropagation();
          setLocale(opt.dataset.locale);
          dropdown.classList.remove('open');
          trigger.setAttribute('aria-expanded', 'false');
          dropdown.setAttribute('aria-hidden', 'true');
        });
      });

      dropdown.addEventListener('click', (e) => e.stopPropagation());
      document.addEventListener('click', () => {
        dropdown.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
        dropdown.setAttribute('aria-hidden', 'true');
      });
    }

    applyLocale(locale);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.BetraLocale = { setLocale, getLocale, getCurrency: () => CURRENCY[getLocale()], t: (key) => getT(getLocale(), key) };
})();
