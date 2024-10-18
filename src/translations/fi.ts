export default {
  components: {
    ratingSlider: {
      notAtAll: 'Not at all',
      veryMuch: 'Very much',
    },
    UploadProfilePic: {
      recentLoginRequired: 'Viimeaikainen sisäänkirjautuminen vaaditaan',
      recentLoginDetails:
        'Suorittaaksesi toiminnon, sinun tulee kirjautua ulos ja uudestaan sisään turvallisuussyistä',
      userProfile: 'Käyttäjäprofiili',
      uploadProfilePicture: 'Vaihda profiilikuva',
      deleteAccount: 'Poista tili',
      deleteAccountConfirmation: 'Poistatko tilin?',
      deleteAccountConfirmationMessage:
        'Oletko varma, että haluat poistaa tilin? Tätä toimintoa ei voi peruuttaa.',
    },
    ImageUploader: {
      waitingForPermissions: 'Odotetaan lupaa...',
      imageNote: 'Lisää kuva',
      takePicture: 'Ota kuva',
      cameraRoll: 'Valitse kuvagalleriasta',
    },
    teacherNotes: {
      yourTeacherNotes: 'Opettajan muistiinpanot',
      viewMore: 'Lisää',
      writtenNotesFor: '%{taskTitle}n muistiinpanot',
    },
    navigationError: {
      signOutAlert: 'Sinut kirjattiin ulos.',
      navigationErrorText: `There was a navigation error. Perhaps you're using an old user that doesn't have the right DB structure?`,
      signOut: 'kirjaudu ulos',
    },
  },
  general: {
    Pause: 'Keskeytä',
    Start: 'Aloita',
    Loading: 'Lataa...',
    Back: 'Takaisin',
    Next: 'Seuraava',
    Minutes: 'minuuttia',
    PleaseWait: 'Odota',
    Title: 'Otsikko',
    Continue: 'jatka',
    Complete: 'Valmis',
    Logout: 'kirjaudu ulos',
    Welcome: 'Tervetuloa',
    Save: 'tallenna',
    Cancel: 'peru',
    Undo: 'Kumoa',
    Approve: 'hyväksy',
    Due: 'Määräaika',
    Edit: 'Muokkaa',
    Notes: 'muistiinpanot',
    Close: 'Sulje',
    Teacher: 'Opettaja',
    Student: 'Oppilas',
    feedback: {
      difficulty: 'Helppous',
      fun: 'Hauskuus',
      improvement: 'Kehitys',
      difficultyLegendLeft: 'Vaikeaa',
      difficultyLegendRight: 'Helppoa',
      funLegendLeft: 'Ei hauskaa',
      funLegendRight: 'Tosi hauskaa',
      improvementLegendLeft: 'En paljoa',
      improvementLegendRight: 'Paljon',
    },
    archive: 'Arkisto',
    loadMore: 'lataa lisää',
    checkArchive: 'tarkista arkisto',
    language: 'Kieli',
    today: 'Tänään',
    tomorrow: 'Huomenna',
    yesterday: 'Eilen',
  },
  weekdaysLong: {
    Mon: 'Maanantai',
    Tue: 'Tiistai',
    Wed: 'Keskiviikko',
    Thu: 'Torstai',
    Fri: 'Perjantai',
    Sat: 'Lauantai',
    Sun: 'Sunnuntai',
  },
  weekdays: {
    Mo: 'Ma',
    Tu: 'Ti',
    We: 'Ke',
    Th: 'To',
    Fr: 'Pe',
    Sa: 'La',
    Su: 'Su',
  },
  months: {
    january: 'Tammikuu',
    february: 'Helmikuu',
    march: 'Maaliskuu',
    april: 'Huhtikuu',
    may: 'Toukokuu',
    june: 'Kesäkuu',
    july: 'Heinäkuu',
    august: 'Elokuu',
    september: 'Syyskuu',
    october: 'Lokakuu',
    november: 'Marraskuu',
    december: 'Joulukuu',
  },
  student: {
    Practice: {
      thankYouForFeedback: 'Kiitos palautteesta!',
      practiceCompleted: 'Sait tehtävän suoritettua!',
      howWasIt: 'Millaista oli?',
      difficultyTitle: 'Kuinka helppoa oli?',
      funTitle: 'Oliko hauskaa?',
      improvementTitle: 'Kuinka paljon kehityit?',
      submitToGain: 'lähetä saadaksesi',
      endPractice: 'lopeta harjoitus',
      goodJob: `Hieno homma! Olet suorittanut vaaditun ajan.`,
      practiceAtLeast: 'Harjoittele vähintään',
      minutesToComplete: 'minuuttia suorittaaksesi tehtävän',
      allDoneHere: 'Kaikki valmista!',
    },
    StickerGain: {
      title: 'Hieno suoritus!',
      completedStickerMsg: 'Sait tarran koottua.',
      incompleteStickerMsg: 'Sait uuden palan tarrasta.',
      youCanViewSticker: 'Löydät tarran palkinnoistasi.',
      completeMore: 'Tee vielä %{sessionsToGo} harjoitusta lisää saadaksesi koko tarran.',
    },
    TaskDetails: {
      Completed: 'Suoritettu',
      Approved: 'Hyväksytty',
      minutesCompleted: 'minuuttia harjoiteltu',
      notStarted: 'Ei aloitettu',
      practiceSessions: 'harjoittelukertaa',
      Until: 'Tehtävä',
      practiceNow: 'harjoittele nyt',
      goBackText: 'Takaisin tehtäviin',
    },
    TaskView: {
      deadline: 'Tehtävä',
      Practice: 'harjoittele',
      noTasks: `Sinulla ei ole tehtäviä tällä hetkellä.`,
      waitForTeacher: 'Odota, että opettajasi antaa sinulle uusia tehtäviä.',
      logoutAlert: 'Sinut on kirjattu ulos.',
    },
  },
  teacher: {
    AddStudent: {
      AddStudent:
        'Tarvitset oppilaasi sähköpostin tai käyttäjänimen heidän lisäämiseksi. Oppilas näkee lisätyt harjoitukset heti kun hän on rekisteröitynyt.',
      ErrorMessage: 'Käyttäjänimessä pitää olla vähintään 4 kirjainta.',
      StudentLessonSchedule: 'Oppilaan tuntiaikataulu',
      SelectLessonDay: 'Valitse viikonpäivä, jolloin tapaat oppilaan säännöllisillä tunneilla:',
      StartingDate: 'Aloituspäivämäärä:',
      SelectLessonDuration: 'Tunnin pituus:',
      SelectLessonTime: 'Tunnin ajankohta:',
      AddNewStudent: 'Lisää uusi oppilas',
      Username: 'Käyttäjänimi',
      createStudentError: 'Oppilasta ei voitu lisätä. Yritä myöhemmin uudelleen.',
      studentAlreadyAssociatedError: 'Oppilas on jo lisätty',
      studentAdded: 'Oppilas lisätty',
      Student: 'Oppilas',
      Added: 'lisätty!',
    },
    AddTask: {
      UploadingTask: 'Ladataan tehtävää...',
      AddMusicDetails: 'Tehtävän yksityiskohdat',
      ErrorMessage: 'Anna otsikko',
      Placeholder: 'Harjoiteltavat osat',
      PlaceholderLong: 'Määritä mitä osia tehtävään kuuluu: sivut yms.',
      AddNotes: 'Lisää muistiinpanot',
      WrittenNotes: 'Tekstimuotoiset ohjeet',
      WriteSomeNotes: 'Lisää oppilaalle ohjeita ja muita muistiinpanoja',
      ImageNotes: 'Kuvat',
      SetDeadline: 'Aseta määräaika',
      SetPracticeTime: 'Aseta tehtävän minimiaika',
      AmountOfSessions: 'Harjoitusten määrä',
      MinutesPerSession: 'Minuuttia per sessio',
      NewTask: 'Uusi tehtävä',
    },
    StudentList: {
      NoTasksDue: 'Ei tehtäviä',
      NextTasksDue: 'Seuraavat tehtävät',
      SeeTasks: 'katso tehtävät',
      TasksForLesson: 'Seuraavan tunnin tehtävät',
      NextLesson: 'Seuraava tunti',
      YourStudents: 'Oppilaasi',
      NoStudents:
        'Oppilaita ei ole lisätty. Aloita lisäämällä ensimmäiset oppilaat painamalla + ikonia yläpuolella',
      SelectAvatar: 'Valitse profiilikuva',
      NextStudent: 'Seuraava oppilas',
      youHaveUnapprovedTasks1: 'Sinulla on ',
      youHaveUnapprovedTasks2: 'tehtävää hyväksyttävänä.',
      tapHereToApprove: 'Hyväksy painamalla tästä!',
    },
    TaskDetails: {
      SelectDate: 'Valitse päivämäärä',
      Difficulty: 'Vaikeusaste',
      notEasy: 'Ei helppo',
      veryEasy: 'Todella helppo',
      Fun: 'Hauskuus',
      notAtAll: 'Ei ollenkaan',
      veryMuch: 'Hyvin paljon',
      Improvement: 'Kehittyminen',
      noFeedbackYet: `Oppilaasi ei ole antanut palautetta`,
      goBackText: 'Tallenna ja palaa',
      taskNotFound: 'Tehtävää ei löytynyt',
      sessionDoesntExist: 'Harjoitussessiota ei ole',
      sessionNotApproved: 'Sessiota ei hyväksytty',
      sessionAlreadyApproved: 'Sessio on jo hyväksytty',
      errorsEncounterd: 'Joitakin virheitä tapahtui',
      imageUploadError: `Kuvia ei voitu ladata`,
      imageRemoved: 'Kuva poistettu',
      deleteTask: 'Poista tehtävä',
      deleteTaskConfirmation: 'Haluatko varmasti poistaa tehtävän?',
      delete: 'Poista',
      cancel: 'Kumoa',
    },
    TeacherTaskView: {
      Tasks: `n tehtävät`,
      goBackText: 'Takaisin oppilaisiin',
      studentHasNoTask: 'Oppilaalla ei ole tehtäviä',
      toBeDone: 'Määräpäivä',
      openForDetails: 'avaa',
    },
    ApproveTasks: {
      amountUnApproved:
        'Sinulla on %{unApprovedSessionCount} hyväksymätöntä tehtävää %{unApprovedStudentCount} oppilaalta',
      approveAll: 'hyväksy kaikki',
      completed: 'Suoritettu:',
      approve: 'hyväksy',
    },
  },
  welcome: {
    Name: 'Nimi',
    nameError: 'Anna kunnollinen nimi',
    teacherError: 'Anna sopiva koulun tai opettajan nimi',
    schoolTeacher: 'Koulu tai opettaja',
    IamA: 'Olen',
    iAgree: 'Hyväksyn ',
    privacyPolicy: 'tietosuojaselosteen',
    Password: 'Salasana',
    charactersError:
      'Salasanan pitää sisältää vähintään 8 merkkiä, isoja ja pieniä kirjaimia ja numeroita',
    enterPassword: 'Anna salasana uudelleen',
    mustMatchError: 'Salasanojen pitää täsmätä',
    Register: 'rekisteröidy',
    enterEmail: 'Anna sähköpostiosoitteesi',
    resetLink: 'Saat salasanan uudelleenasetuslinkin sähköpostissa',
    Submit: 'Lähetä',
    Email: 'Sähköposti',
    validEmail: 'Käytä kunnollista sähköpostiosoitetta',
    checkEmail: 'Tarkista sähköpostisi.',
    emailDoesntArrive:
      'Jos sähköposti ei tule perille, tarkasta että olet antanut oikean osoitteen ja tilisi on rekisteröity sillä osoitteella.',
    welcomeHeader: 'Tervetuloa!',
    loginToContinue: 'Kirjaudu sisään jatkaaksesi jännittävää matkaasi musiikin maailmaan!',
    usernameAndEmail: 'Käyttäjänimi tai sähköpostiosoite',
    Login: 'Kirjaudu',
    forgotPassword: 'Salasana unohtui?',
    newHere: 'Oletko uusi täällä?',
    startYourJourney: 'Aloita käyttö rekiseröitymällä',
    Registration: 'Rekisteröinti',
    uniqueNameAlert: 'Anna uniikki käyttäjänimi, jossa on vähintään 4 merkkiä',
    emailAddress: 'Sähköpostiosoite',
    emailResetError: 'email-reset-unavailable',
    registerWelcomeText: 'Kiitos rekisteröitymisestä! Tervetuloa käyttämään Bravoria!',
    encounteredError: 'Tapahtui virhe. Kokeile hetken päästä uudestaan.',
    resetLinkAlert: 'Salasanan uudelleenasetuslinkki lähetetty!',
  },
  rewards: {
    instruments: {
      cello: 'Sello',
      doubleBass: 'Kontrabasso',
      drums: 'Rummut',
      frenchHorn: 'Käyrätorvi',
      guitar: 'Kitara',
      maracas: 'Marakassit',
      oboe: 'Oboe',
      piano: 'Piano',
      saxophone: 'Saxofoni',
      timpani: 'Patarummut',
      trumpet: 'Trumpetti',
      viola: 'Alttoviulu',
      violin: 'Viulu',
    },
    rewardsPageTitle: 'Palkinnot',
    rewardsPageExplainer:
      'Täältä näet kaikki palkinnot, jotka olet kerännyt. Jatka harjoittelua kerätäksesi kaikki!',
  },
};