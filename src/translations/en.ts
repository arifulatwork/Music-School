export default {
  components: {
    UploadProfilePic: {
      recentLoginRequired: 'Recent login required',
      recentLoginDetails:
        'For security purposes, you need to log out and log in again to complete this action',
      userProfile: 'User profile',
      uploadProfilePicture: 'Upload profile picture',
      deleteAccount: 'Delete account',
      deleteAccountConfirmation: 'Delete account?',
      deleteAccountConfirmationMessage:
        'Are you sure you want to delete your account? This option cannot be reversed.',
      'uploadSuccess': 'Profile picture uploaded successfully',
    },
    ImageUploader: {
      waitingForPermissions: 'Waiting for permissions',
      imageNote: 'Add image note',
      takePicture: 'Take a photo',
      cameraRoll: 'Pick from camera roll',
    },
    teacherNotes: {
      yourTeacherNotes: `Your teacher's notes`,
      viewMore: 'View More',
      writtenNotesFor: 'Written notes for %{taskTitle}',
    },
    navigationError: {
      signOutAlert: 'You were signed out',
      navigationErrorText: `There was a navigation error. Perhaps you're using an old user that doesn't have the right DB structure?`,
      signOut: 'Sign out',
    },
  },
  general: {
    Pause: 'Pause',
    Start: 'Start',
    Loading: 'Loading...',
    Back: 'Back',
    Next: 'next',
    Minutes: 'minutes',
    PleaseWait: 'Please wait.',
    Title: 'Title',
    Continue: 'continue',
    Complete: 'complete',
    Logout: 'Log out',
    Welcome: 'Welcome',
    Save: 'save',
    Cancel: 'cancel',
    Undo: 'Undo',
    Approve: 'approve',
    Due: 'Due',
    Edit: 'Edit',
    Notes: 'notes',
    Close: 'Close',
    Teacher: 'Teacher',
    Student: 'Student',
    feedback: {
      difficulty: 'Ease',
      fun: 'Fun',
      improvement: 'Improvement',
      difficultyLegendLeft: 'Hard',
      difficultyLegendRight: 'Easy',
      funLegendLeft: 'Not fun',
      funLegendRight: 'Very fun',
      improvementLegendLeft: 'Not much',
      improvementLegendRight: 'Very much',
    },
    archive: 'Archive',
    loadMore: 'load more',
    checkArchive: 'check archive',
    language: 'Language',
    today: 'Today',
    tomorrow: 'Tomorrow',
    yesterday: 'Yesterday',
  },
  weekdaysLong: {
    Mon: 'Monday',
    Tue: 'Tuesday',
    Wed: 'Wednesday',
    Thu: 'Thursday',
    Fri: 'Friday',
    Sat: 'Saturday',
    Sun: 'Sunday',
  },
  weekdays: {
    Mo: 'Mo',
    Tu: 'Tu',
    We: 'We',
    Th: 'Th',
    Fr: 'Fr',
    Sa: 'Sa',
    Su: 'Su',
  },
  months: {
    january: 'January',
    february: 'February',
    march: 'March',
    april: 'April',
    may: 'May',
    june: 'June',
    july: 'July',
    august: 'August',
    september: 'September',
    october: 'October',
    november: 'November',
    december: 'December',
  },
  student: {
    Practice: {
      thankYouForFeedback: 'Thank you for your feedback',
      practiceCompleted: 'You successfully completed the practice session!',
      howWasIt: 'How was it?',
      difficultyTitle: 'How easy was it?',
      funTitle: 'Did you enjoy it?',
      improvementTitle: 'How much have you improved?',
      submitToGain: 'submit to gain',
      endPractice: 'End Practice',
      goodJob: `Good job! You've completed the required time.`,
      practiceAtLeast: 'Practice at least',
      minutesToComplete: 'minutes to complete session',
      allDoneHere: 'All done here!',
    },
    StickerGain: {
      title: 'Nice One!',
      completedStickerMsg: 'You completed the sticker.',
      incompleteStickerMsg: 'You got a piece of a sticker.',
      youCanViewSticker: 'You can now view the sticker in your Rewards-section.',
      completeMore: 'Complete %{sessionsToGo} more sessions to earn the full sticker.',
    },
    TaskDetails: {
      Completed: 'Completed',
      Approved: 'Approved',
      minutesCompleted: 'minutes completed',
      notStarted: 'Not started',
      practiceSessions: 'practice sessions',
      Until: 'Until',
      practiceNow: 'Practice Now',
      goBackText: 'Back to Tasks',
    },
    TaskView: {
      deadline: 'To be done until',
      Practice: 'practice',
      noTasks: `You don't have any tasks at this time.`,
      waitForTeacher: 'Wait for your teacher to assign you new tasks.',
      logoutAlert: 'You have been logged out',
    },
  },
  teacher: {
    AddStudent: {
      AddStudent: `You need to your student's email address to add them. The student can see their added tasks
      as soon as they have registered.`,
      ErrorMessage: 'Please enter a valid username of 4 characters or more',
      StudentLessonSchedule: 'Student lesson schedule',
      SelectLessonDay: 'Select the weekday on which you meet for your regular lesson:',
      StartingDate: 'Set your starting date:',
      SelectLessonDuration: 'Select lesson duration',
      SelectLessonTime: 'Select lesson time',
      AddNewStudent: 'Add a new student',
      Username: 'Username',
      createStudentError: `Couldn't create student. Please try again.`,
      studentAlreadyAssociatedError: 'Student is already associated with you',
      studentAdded: 'Student added',
      Student: 'Student',
      Added: 'Added!',
    },
    AddTask: {
      UploadingTask: 'Uploading Task...',
      AddMusicDetails: 'Add music details',
      ErrorMessage: 'Please specify a title',
      Placeholder: 'Part to practice',
      PlaceholderLong: 'Specify part to practice, like bars, pages etc',
      AddNotes: 'Add notes',
      WrittenNotes: 'Written notes',
      WriteSomeNotes: 'Write some notes for your students',
      ImageNotes: 'Image notes',
      SetDeadline: 'Set deadline',
      SetPracticeTime: 'Set practice time',
      AmountOfSessions: 'Amount of sessions',
      MinutesPerSession: 'Minutes per session',
      NewTask: 'New task',
    },
    StudentList: {
      NoTasksDue: 'No tasks due',
      NextTasksDue: 'Next tasks due',
      SeeTasks: 'see tasks',
      TasksForLesson: 'Tasks for next lesson',
      NextLesson: 'Next lesson',
      YourStudents: 'Your students',
      NoStudents: 'No students yet. Start adding your first students by tapping the + icon above.',
      SelectAvatar: 'Select Avatar',
      NextStudent: 'Next Student',
      youHaveUnapprovedTasks1: 'You have ',
      youHaveUnapprovedTasks2: 'unapproved tasks.',
      tapHereToApprove: 'Tap here to approve!',
    },
    TaskDetails: {
      SelectDate: 'Select date',
      Difficulty: 'Difficulty',
      notEasy: 'Not easy',
      veryEasy: 'Very easy',
      Fun: 'Fun',
      notAtAll: 'Not at all',
      veryMuch: 'Very much',
      Improvement: 'Improvement',
      noFeedbackYet: `Your student hasn't given feedback`,
      goBackText: 'Save and return',
      taskNotFound: 'Task not found',
      sessionDoesntExist: 'Session does not exist',
      sessionNotApproved: 'Session is not approved',
      sessionAlreadyApproved: 'Session is already approved',
      errorsEncounterd: 'Errors encountered',
      imageUploadError: `images couldn't be uploaded`,
      imageRemoved: 'Image removed',
      deleteTask: 'Delete task',
      deleteTaskConfirmation: 'Are you sure you want to delete the task?',
      delete: 'Delete',
      cancel: 'Cancel',
    },
    TeacherTaskView: {
      Tasks: `'s tasks`,
      goBackText: 'Back to Student list',
      studentHasNoTask: 'Student has no tasks yet.',
      toBeDone: 'To be done until',
      openForDetails: 'open for details',
    },
    ApproveTasks: {
      amountUnApproved:
        'There are %{unApprovedSessionCount} unapproved sessions from %{unApprovedStudentCount} student(s)',
      approveAll: 'approve all',
      completed: 'Completed:',
      approve: 'approve',
    },
  },
  welcome: {
    Name: 'Name',
    nameError: 'Please enter a proper name',
    teacherError: 'Please enter a proper school or teacher name',
    schoolTeacher: 'School or teacher',
    IamA: 'I am a',
    iAgree: 'I agree to the ',
    privacyPolicy: 'Privacy Policy',
    Password: 'Password',
    charactersError: 'Please use at least 8 characters with both upper- and lowercase and a number',
    enterPassword: 'Re-enter password',
    mustMatchError: 'Passwords must match',
    Register: 'register',
    enterEmail: 'Please enter your email address',
    resetLink: 'You will be sent a password reset link',
    Submit: 'Submit',
    Email: 'Email',
    validEmail: 'Use a valid email address',
    checkEmail: 'Please check your email.',
    emailDoesntArrive: `If the email doesn't arrive, check that you've entered it correctly and registered with that
    address before.`,
    welcomeHeader: 'Welcome!',
    loginToContinue: 'Login to continue your exciting music journey!',
    usernameAndEmail: 'Username or email',
    Login: 'Login',
    forgotPassword: 'Forgot password?',
    newHere: 'New here?',
    startYourJourney: 'Start your journey by registering.',
    Registration: 'Registration',
    uniqueNameAlert: 'Please use a unique username with more than 3 characters',
    emailAddress: 'Email address',
    emailResetError: 'email-reset-unavailable',
    registerWelcomeText: 'Thank you for registering. Welcome to Bravori!',
    encounteredError: 'Encountered an error. Please try again in a while.',
    resetLinkAlert: 'Reset link sent!',
  },
  rewards: {
    instruments: {
      cello: 'Cello',
      doubleBass: 'Double bass',
      drums: 'Drums',
      frenchHorn: 'French Horn',
      guitar: 'Guitar',
      maracas: 'Maracas',
      oboe: 'Oboe',
      piano: 'Piano',
      saxophone: 'Saxophone',
      timpani: 'Timpani',
      trumpet: 'Trumpet',
      viola: 'Viola',
      violin: 'Violin',
    },
    rewardsPageTitle: 'Rewards',
    rewardsPageExplainer:
      'Here you can see all the rewards you have collected. Keep practicing to collect them all!',
  },
};
