/**
 * Betra i18n & currency locale system
 * Languages: British English, Español, Italiano, Français
 * Currency: GBP (£), EUR (€)
 */
(function() {
  const STORAGE_KEY = 'betra-locale';

  const CURRENCY = {
    'en-GB': '£',
    'es-ES': '€',
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
      product: { label: 'The Product', title1: 'Professional-grade analytics.', title2: 'Zero complexity.', ocr: 'OCR Bet Scanning', ocrDesc: 'Snap a screenshot of any bet slip. Betra reads it automatically — odds, stake, legs, everything.', dashboard: 'Full Analytics Dashboard', dashboardDesc: 'ROI broken down by sport, league, bet type, and sportsbook. Know exactly where you win.', live: 'Live Match Monitoring', liveDesc: "Real-time scores for every active ticket. See if you're winning or losing — in the moment.", bankroll: 'Bankroll Management', bankrollDesc: 'Set a starting bankroll. Watch it evolve as bets settle — with full curve history.', multileg: 'Multi-Leg Bet Tracking', multilegDesc: 'Visual progress bars for accumulators. Legs won, legs pending, legs remaining — at a glance.', perfOverview: 'Performance Overview', last30: 'Last 30 days', netPnl: 'Net P&L', winRate: 'Win Rate', pnlTrend: 'P&L Trend', activeGames: 'Active Games', ticketHistory: 'Ticket History', inProgress: 'IN PROGRESS', won: 'WON', lost: 'LOST', ticketFormatInProgress: '@25.4 · €10 · Win: €254', ticketFormatWon: '@17 · €5 · Win: €85', ticketFormatLost: '@1.85 · €30 · Lost: €72.15', win: 'Win' },
      hiw: { label: 'How It Works', title: 'Four steps. Zero friction.', sub: "No sportsbook integration needed. No credentials. Just log your bets and let Betra do the rest.", step1: 'Place Your Bet', step1Desc: 'Bet on any sportsbook as you normally would. Betra never touches your accounts.', step2: 'Scan or Enter', step2Desc: 'Upload a screenshot of your slip. OCR auto-fills every detail in seconds.', step3: 'Track Live', step3Desc: 'Follow active tickets with live scores and instant notifications when bets settle.', step4: 'Analyze & Improve', step4Desc: 'Explore your full analytics dashboard. Find patterns. Refine your strategy.' },
      pricing: { label: 'Pricing', title: "Start free. Scale when you're ready.", sub: 'Every tier delivers standalone value. Pay only for the depth you need.', free: 'Free', pro: 'Pro', elite: 'Elite', perMo: '/mo', freeDesc: 'Start tracking with no commitment. See your P&L from day one.', proDesc: 'The full analytics layer. For those serious about improving their strategy.', eliteDesc: 'Full power for high-volume, data-driven users who track every detail.', mostPopular: 'Most Popular', getStarted: 'Get Started', startPro: 'Start Pro', goElite: 'Go Elite', manualEntry: 'Manual bet entry', basicPnl: 'Basic P&L + win rate', history30: '30-day history', liveScore: 'Live score monitoring', ocrScan: 'OCR scanning', analyticsDash: 'Analytics dashboard', everythingFree: 'Everything in Free', ocrScreenshot: 'OCR screenshot scanning', unlimitedHistory: 'Unlimited history', analyticsSport: 'Analytics by sport & league', multiSportsbook: 'Multi-sportsbook comparison', advancedNotif: 'Advanced notifications', everythingPro: 'Everything in Pro', bankrollMgmt: 'Bankroll management', streakPattern: 'Streak & pattern analysis', dataExport: 'Data export — CSV & PDF', customTags: 'Custom tags & categories', earlyAccess: 'Early access + priority support' },
      team: { label: 'The Team', title: 'From spreadsheets to strategy.', sub: 'Betra started as a personal problem — tracking performance across multiple sportsbooks was painful. We built the tool we wished existed.' },
      cta: { title1: 'Ready to take control', title2: 'of your betting data?', sub: 'Join Betra. Track smarter, analyze deeper, improve continuously.', btn: 'Start Tracking for Free' },
      footer: { copyright: '© 2026 Betra. All rights reserved.', privacy: 'Privacy', terms: 'Terms', contact: 'Contact' },
      app: { trackAnalyze: 'Track. Analyze. Win.', netPnl: 'NET P&L', winRate: 'WIN RATE', pnlTrend30: 'P&L TREND · 30D', activeGames: 'ACTIVE GAMES' }
    },
    'es-ES': {
      nav: { product: 'Producto', howItWorks: 'Cómo funciona', pricing: 'Precios', team: 'Equipo', getStarted: 'Empezar gratis' },
      hero: { badge: 'RASTREA · ANALIZA · MEJORA', h1a: 'Tus apuestas.', h1b: 'Tus datos.', h1c: 'Tu ventaja.', sub: "Betra es la plataforma de analytics que convierte tu historial de apuestas en información útil — un panel unificado para cada casa de apuestas.", startTracking: 'Empezar a rastrear gratis', seeHow: 'Ver cómo funciona' },
      modal: { title: 'Acceso anticipado', sub: "Únete a Betra. Te avisaremos cuando lancemos.", nameLabel: 'Nombre y apellidos', namePlaceholder: 'Juan García', emailLabel: 'Email', emailPlaceholder: 'juan@ejemplo.com', submit: 'Solicitar acceso', successTitle: "Estás en la lista", successSub: "Te contactaremos pronto.", close: 'Cerrar', sending: 'Enviando…' },
      philosophy: { label: 'La filosofía', title1: 'La mayoría apuesta por instinto.', title2: 'Los mejores apuestan con datos.', quote: '"Lo que se mide se gestiona. La diferencia entre un apostador perdedor y uno ganador no es suerte — es información. Betra da a todos acceso a la misma base de datos que usan los profesionales."', cite: 'Principio fundador de Betra', precision: 'Seguimiento preciso', precisionDesc: 'Cada ticket registrado con contexto completo. Cuotas, stake, casa de apuestas, mercado — sin perder ningún dato.', pattern: 'Detección de patrones', patternDesc: 'Descubre en qué deportes, ligas y tipos de apuesta ganas de verdad — y elimina las pérdidas.', continuous: 'Mejora continua', continuousDesc: 'Rastrea el ROI en el tiempo. Ve tu ventaja con claridad, adapta tu estrategia y mejora cada mes.', unified: 'Cartera unificada', unifiedDesc: 'DraftKings, Bet365 España, FanDuel — todas tus casas de apuestas en un solo centro de análisis.' },
      product: { label: 'El producto', title1: 'Análisis de nivel profesional.', title2: '', ocr: 'Escaneo OCR de apuestas', ocrDesc: 'Haz captura de cualquier apuesta. Betra lo lee automáticamente, cuotas, simples, combinadas, todo.', dashboard: 'Panel de analytics completo', dashboardDesc: 'ROI desglosado por deporte, liga, tipo de apuesta y casa. Sabes exactamente dónde ganas.', live: 'Seguimiento de partidos en vivo', liveDesc: 'Combinadas ganadas, pendientes y restantes — de un vistazo.', bankroll: 'Gestión del bankroll', bankrollDesc: 'Define una inversión inicial. Sigue su evolución según se resuelven las apuestas — con historial completo.', multileg: 'Seguimiento de apuestas combinadas', multilegDesc: 'Barras de progreso para acumuladas. Patas ganadas, pendientes, restantes — de un vistazo.', perfOverview: 'Resumen de rendimiento', last30: 'Últimos 30 días', netPnl: 'P&L neto', winRate: 'Tasa de aciertos', pnlTrend: 'Tendencia P&L', activeGames: 'Partidos activos', ticketHistory: 'Historial de boletos', inProgress: 'EN CURSO', won: 'GANADA', lost: 'PERDIDA', ticketFormatInProgress: '@25.4 · €10 · Ganancia potencial: €254', ticketFormatWon: '@17 · €5 · Ganancia: €85', ticketFormatLost: '@1.85 · €30 · Perdido: €72.15', win: 'Ganancia' },
      hiw: { label: 'Cómo funciona', title: 'Cuatro pasos. Sin complicaciones.', sub: "Sin integración con casas de apuestas. Sin credenciales. Solo registra tus apuestas y deja que Betra haga el resto.", step1: 'Haz tu apuesta', step1Desc: 'Apuesta en cualquier casa como siempre. Betra nunca toca tus cuentas.', step2: 'Escanea o introduce', step2Desc: 'Sube una captura de tu boleto. El OCR rellena cada detalle en segundos.', step3: 'Sigue en vivo', step3Desc: 'Sigue los tickets activos con resultados en vivo y notificaciones al instante cuando se resuelven.', step4: 'Analiza y mejora', step4Desc: 'Explora tu panel de analytics completo. Encuentra patrones. Afina tu estrategia.' },
      pricing: { label: 'Precios', title: "Empieza gratis. Escala cuando quieras.", sub: 'Cada plan aporta valor por sí solo. Paga solo por la profundidad que necesitas.', free: 'Gratis', pro: 'Pro', elite: 'Elite', perMo: '/mes', freeDesc: 'Empieza a rastrear sin compromiso. Ve tu P&L desde el primer día.', proDesc: 'La capa de analytics completa. Para quien se toma en serio mejorar su estrategia.', eliteDesc: 'Máxima potencia para usuarios de alto volumen que rastrean cada detalle.', mostPopular: 'Más popular', getStarted: 'Empezar', startPro: 'Empezar Pro', goElite: 'Pasar a Elite', manualEntry: 'Entrada manual', basicPnl: 'P&L básico + tasa de aciertos', history30: 'Historial 30 días', liveScore: 'Seguimiento de cuotas en vivo', ocrScan: 'Escaneo OCR', analyticsDash: 'Panel de analytics', everythingFree: 'Todo en Gratis', ocrScreenshot: 'Escaneo por captura OCR', unlimitedHistory: 'Historial ilimitado', analyticsSport: 'Analytics por deporte y liga', multiSportsbook: 'Comparativa multi-casa', advancedNotif: 'Notificaciones avanzadas', everythingPro: 'Todo en Pro', bankrollMgmt: 'Gestión del bankroll', streakPattern: 'Análisis de rachas y patrones', dataExport: 'Exportación de datos — CSV y PDF', customTags: 'Etiquetas y categorías personalizadas', earlyAccess: 'Acceso anticipado + soporte prioritario' },
      team: { label: 'El equipo', title: 'De hojas de cálculo a estrategia.', sub: 'Betra nació de un problema personal — rastrear el rendimiento en varias casas era un dolor. Construimos la herramienta que nos hubiera gustado tener.' },
      cta: { title1: '¿Listo para tomar el control', title2: 'de tus datos de apuestas?', sub: 'Únete a Betra. Rastrea mejor, analiza más a fondo, mejora de forma continua.', btn: 'Empezar a rastrear gratis' },
      footer: { copyright: '© 2026 Betra. Todos los derechos reservados.', privacy: 'Privacidad', terms: 'Términos', contact: 'Contacto' },
      app: { trackAnalyze: 'Rastrea. Analiza. Gana.', netPnl: 'P&L NETO', winRate: 'TASA ACIERTOS', pnlTrend30: 'TENDENCIA P&L · 30D', activeGames: 'PARTIDOS ACTIVOS' }
    },
    // TODO: translate - Italian translations needed
    'it': {
      nav: { product: 'Prodotto', howItWorks: 'Come funziona', pricing: 'Prezzi', team: 'Team', getStarted: 'Inizia gratis' },
      hero: { badge: 'TRACCIA · ANALIZZA · MIGLIORA', h1a: 'Le tue scommesse.', h1b: 'I tuoi dati.', h1c: 'Il tuo vantaggio.', sub: "Betra è la piattaforma di analytics che trasforma la tua cronologia di scommesse in insight azionabili — una dashboard unificata per ogni bookmaker.", startTracking: 'Inizia a tracciare gratis', seeHow: 'Scopri come funziona' },
      modal: { title: 'Accedi in anteprima', sub: "Unisciti a Betra. Ti avviseremo al lancio.", nameLabel: 'Nome e cognome', namePlaceholder: 'Mario Rossi', emailLabel: 'Email', emailPlaceholder: 'mario@esempio.it', submit: 'Richiedi accesso', successTitle: "Sei in lista", successSub: "Ti contatteremo presto.", close: 'Chiudi', sending: 'Invio…' },
      philosophy: { label: 'La filosofia', title1: 'La maggior parte scommette d\'istinto.', title2: 'I migliori scommettono sui dati.', quote: '"Ciò che si misura si gestisce. La differenza tra chi perde e chi vince in modo costante non è la fortuna — è l\'informazione. Betra dà a tutti lo stesso edge dei professionisti."', cite: 'Principio fondatore di Betra', precision: 'Seguimento preciso', precisionDesc: 'Ogni biglietto registrato con contesto completo: quote, puntata, bookmaker, mercato.', pattern: 'Individuazione dei pattern', patternDesc: 'Scopri in quali sport, leghe e tipi di scommessa guadagni davvero — e taglia le perdite.', continuous: 'Miglioramento continuo', continuousDesc: 'Segui il ROI nel tempo. Vedi il tuo vantaggio, adatta la strategia e migliora mese dopo mese.', unified: 'Tutto in un unico posto', unifiedDesc: 'Bet365, DraftKings, Snai, FanDuel — tutti i tuoi bookmaker in un solo hub analytics.' },
      product: { label: 'Il prodotto', title1: 'Analytics di livello professionale.', title2: 'Semplice da usare.', ocr: 'Scansione OCR delle scommesse', ocrDesc: 'Scatta uno screenshot della schedina. Betra legge tutto in automatico: quote, puntata, combinata.', dashboard: 'Dashboard analytics completa', dashboardDesc: 'ROI per sport, lega, tipo di scommessa e bookmaker. Sai esattamente dove guadagni.', live: 'Seguimento partite in diretta', liveDesc: "Punteggi in tempo reale per ogni biglietto attivo. Vedi subito se stai vincendo o perdendo.", bankroll: 'Gestione del bankroll', bankrollDesc: 'Imposta il bankroll iniziale e segui l\'evoluzione con lo storico completo.', multileg: 'Seguimento scommesse multiple', multilegDesc: 'Barre di avanzamento per le combinata. Vinte, in corso, mancanti — a colpo d\'occhio.', perfOverview: 'Riepilogo performance', last30: 'Ultimi 30 giorni', netPnl: 'P&L netto', winRate: 'Percentuale vincite', pnlTrend: 'Andamento P&L', activeGames: 'Partite in corso', ticketHistory: 'Storico schedine', inProgress: 'IN CORSO', won: 'VINTA', lost: 'PERSA', ticketFormatInProgress: '@25.4 · €10 · Vincita potenziale: €254', ticketFormatWon: '@17 · €5 · Vincita: €85', ticketFormatLost: '@1.85 · €30 · Perso: €72.15', win: 'Vincita' },
      hiw: { label: 'Come funziona', title: 'In quattro mosse. Nessuna complicazione.', sub: "Nessun collegamento ai bookmaker. Nessuna credenziale. Registra le scommesse e lascia fare a Betra.", step1: 'Piazza la scommessa', step1Desc: 'Scommetti su qualsiasi bookmaker come sempre. Betra non accede mai ai tuoi account.', step2: 'Scansiona o inserisci', step2Desc: 'Carica uno screenshot della schedina. L\'OCR compila tutto in pochi secondi.', step3: 'Segui in tempo reale', step3Desc: 'Monitora i biglietti attivi con punteggi live e notifiche quando le scommesse si chiudono.', step4: 'Analizza e migliora', step4Desc: 'Esplora la dashboard analytics. Trova i pattern che funzionano. Affina la strategia.' },
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
      philosophy: { label: 'La philosophie', title1: 'La plupart parient à l\'instinct.', title2: 'Les meilleurs parient sur les données.', quote: '"Ce qui se mesure se gère. La différence entre un parieur perdant et un parieur régulier n\'est pas la chance — c\'est l\'information. Betra donne à tous le même edge que les professionnels."', cite: 'Principe fondateur de Betra', precision: 'Suivi précis', precisionDesc: 'Chaque ticket enregistré avec contexte complet : cotes, mise, bookmaker, marché.', pattern: 'Identification des patterns', patternDesc: 'Découvrez quels sports, ligues et types de paris vous rapportent vraiment — et coupez les pertes.', continuous: 'Amélioration continue', continuousDesc: 'Suivez le ROI dans le temps. Voyez votre avantage, adaptez votre stratégie et améliorez mois après mois.', unified: 'Tout au même endroit', unifiedDesc: 'Bet365, DraftKings, Snai, FanDuel — tous vos bookmakers dans un seul hub analytics.' },
      product: { label: 'Le produit', title1: 'Analytics de niveau professionnel.', title2: 'Simple à utiliser.', ocr: 'Scan OCR des paris', ocrDesc: 'Prenez une capture de n\'importe quel ticket. Betra lit tout automatiquement : cotes, mise, combiné.', dashboard: 'Tableau de bord analytics complet', dashboardDesc: 'ROI par sport, ligue, type de pari et bookmaker. Sachez exactement où vous gagnez.', live: 'Suivi des matchs en direct', liveDesc: "Cotes en temps réel pour chaque ticket actif. Voyez tout de suite si vous gagnez ou perdez.", bankroll: 'Gestion du bankroll', bankrollDesc: 'Définissez un bankroll initial et suivez son évolution avec l\'historique complet.', multileg: 'Suivi des paris combinés', multilegDesc: 'Barres de progression pour les combinés. Gagnées, en cours, restantes — en un coup d\'œil.', perfOverview: 'Résumé des performances', last30: '30 derniers jours', netPnl: 'P&L net', winRate: 'Taux de réussite', pnlTrend: 'Évolution P&L', activeGames: 'Matchs en cours', ticketHistory: 'Historique des tickets', inProgress: 'EN COURS', won: 'GAGNÉ', lost: 'PERDU', ticketFormatInProgress: '@25.4 · €10 · Gain potentiel : €254', ticketFormatWon: '@17 · €5 · Gain : €85', ticketFormatLost: '@1.85 · €30 · Perdu : €72.15', win: 'Gain' },
      hiw: { label: 'Comment ça marche', title: 'Quatre étapes. Aucune complication.', sub: "Pas de connexion aux bookmakers. Pas d'identifiants. Enregistrez vos paris et laissez Betra s'occuper du reste.", step1: 'Placez votre pari', step1Desc: 'Pariez sur n\'importe quel bookmaker comme d\'habitude. Betra n\'accède jamais à vos comptes.', step2: 'Scannez ou saisissez', step2Desc: 'Téléchargez une capture de votre ticket. L\'OCR remplit tout en quelques secondes.', step3: 'Suivez en direct', step3Desc: 'Suivez les tickets actifs avec les cotes en direct et les notifications quand les paris se soldent.', step4: 'Analysez et améliorez', step4Desc: 'Explorez votre tableau de bord analytics. Identifiez les patterns. Affinez votre stratégie.' },
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
