import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FIREBASE_AUTH } from 'firebaseConfig';
import { orderBy } from 'lodash';
import { useEffect, useMemo, useState } from 'react';
import { useSignOut } from 'react-firebase-hooks/auth';
import { Alert, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useActionSheet } from '@expo/react-native-action-sheet';
import Settings from '@/views/screens/teacher/Settings/Settings';
import Student from './components/Student';
import UnApprovedTasksContainer from './components/UnApprovedTaskContainer';

import { MAIN_ORANGE } from '@/Colors';
import useUser from '@/commonHooks/useUser';
import spacing from '@/commonStyles/Spacing';
import typography from '@/commonStyles/Typography';
import BravoriButton from '@/components/common/BravoriButton';
import ComponentWithBackground from '@/components/common/ComponentWithBackground';
import Icon from '@/components/common/Icon';
import WelcomeHeader from '@/components/common/WelcomeHeader';
import useStudentsWithTasks from '@/db/useStudentsWithTasks';
import i18n from '@/translations/i18n';
import { PageParams } from '@/views/navigation';
import { deleteAccount, updateProfilePic } from '@/components/common/WelcomeHeader/db';
import ImageUploader, { OnImagesType } from '@/components/common/ImageUploader'; 
import { uploadAndReportProgress } from '@/utils/files'; 
import track from '@/utils/analytics';

type StudentListProps = {
  navigation: NativeStackNavigationProp<PageParams, 'StudentList'>;
};

const StudentList = ({ navigation }: StudentListProps) => {
  const [signOut] = useSignOut(FIREBASE_AUTH);
  const { bravoriUser, firebaseUser, loading } = useUser();
  const { setTeacherId, studentsWithTasks, loading: studentsLoading } = useStudentsWithTasks();
  
  const [showImageUploader, setShowImageUploader] = useState(false); 
  const [uploading, setUploading] = useState(false); 

  useEffect(() => {
    setTeacherId(firebaseUser?.uid);
  }, [firebaseUser]);

  const onLogout = async () => {
    const success = await signOut();
    if (success) {
      Alert.alert(i18n.t('components.navigationError.signOutAlert'));
      navigation.navigate('Login');
    }
  };

  const studentsAlphabetical = useMemo(() => {
    return orderBy(studentsWithTasks, (student) => student.studentDoc.data().name);
  }, [studentsWithTasks]);

  const onImages = async (assets) => {
    setShowImageUploader(false);
    if (!assets[0]?.uri) return;

    const { uris, errors } = await uploadAndReportProgress(
      [assets[0].uri],
      `/profiles/${firebaseUser.uid}`,
      console.log
    );
    const fullPath = uris[0];
    onComplete(fullPath);
  };

  const onComplete = async (uri: string) => {
    if (!firebaseUser.uid) return;
    try {
      await updateProfilePic(firebaseUser.uid, uri);
    } catch (error) {
      console.error("Failed to update profile picture:", error);
    }
  };

  if (!firebaseUser) return <Text>{i18n.t('general.Loading')}</Text>;

  return (
    <ComponentWithBackground
      type="topbottom"
      scroll
      fullScreenLoading={loading || studentsLoading || uploading || !firebaseUser || !bravoriUser}>
      <View style={[styles.container]}>
        <WelcomeHeader
          onLogout={onLogout}
          style={[spacing.mt1, spacing.mb2]}
          user={bravoriUser}
          firebaseUser={firebaseUser}
        />
        <View style={[styles.actionRow, spacing.mb2]}>
          <Text style={[typography.h3, typography.left]}>
            {i18n.t('teacher.StudentList.YourStudents')}
          </Text>
          <TouchableOpacity
            onPress={() => navigation.push('AddStudent')}
            style={[styles.addStudentButton]}>
            <Icon name="IconAddWhite" width="100%" height="100%" />
          </TouchableOpacity>
          <Settings 
            firebaseUser={firebaseUser} 
            onLogout={onLogout} 
            onUploadProfilePicture={() => setShowImageUploader(true)} 
          />
        </View>
        {studentsAlphabetical.length > 0 ? (
          <View style={styles.studentWrapper}>
            {studentsAlphabetical.map((s, i) => (
              <Student
                key={i}
                profileURI={s.studentDoc.data().profilePhoto}
                name={s.studentDoc.data().name}
                tasks={s.tasks.map((t) => t.data())}
              />
            ))}
          </View>
        ) : (
          <View style={[styles.noStudentsContainer, spacing.mt2]}>
            <View style={[spacing.pa1, styles.noStudentsBox]}>
              <Text style={[typography.h4]}>{i18n.t('teacher.StudentList.NoStudents')}</Text>
            </View>
          </View>
        )}
        <View style={styles.logoutRow}>
          <BravoriButton style={[spacing.mt2]} onPress={onLogout}>
            {i18n.t('general.Logout')}
          </BravoriButton>
        </View>
        <ImageUploader
          onHide={() => setShowImageUploader(false)}
          title={i18n.t('components.UploadProfilePic.uploadProfilePicture')}
          multiSelect={false}
          onImages={onImages}
          visible={showImageUploader}
        />
      </View>
    </ComponentWithBackground>
  );
};

const styles = StyleSheet.create({
  addStudentButton: {
    backgroundColor: MAIN_ORANGE,
    width: 30,
    height: 30,
    borderRadius: 100,
  },
  settingsButton: {
    backgroundColor: MAIN_ORANGE,
    width: 30,
    height: 30,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addButton: {
    height: 30,
    width: 30,
  },
  noStudentsContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  noStudentsBox: {
    borderRadius: 5,
    backgroundColor: 'white',
  },
  logoutRow: {
    justifyContent: 'center',
  },
  studentWrapper: {
    flex: 1,
  },
});

export default StudentList;
