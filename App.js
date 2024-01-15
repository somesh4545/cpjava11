import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import CodePush from 'react-native-code-push';

let CodePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
  mandatoryInstallMode: CodePush.InstallMode.IMMEDIATE,
  updateDialog: {
    appendReleaseDescription: true,
    title: 'a new update is available!',
  },
};

const Seperator = () => {
  return (
    <View
      style={{
        height: 2,
        marginVertical: 10,
        backgroundColor: '#19874B',
      }}></View>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
      </View>
      <View style={styles.footer}>
        <ScrollView style={{flex: 1}}>
          <View style={styles.card}>
            <Text style={styles.card_title}>CODEPUSH change</Text>
          </View>
          <Seperator />
          <View style={styles.card}>
            <View style={styles.c_head}>
              <Text style={styles.card_title}>Change Password</Text>
            </View>
          </View>
          <Seperator />
          <View style={styles.card}>
            <View style={styles.c_head}>
              <Text style={styles.card_title}>Help Center</Text>
            </View>
          </View>
          <Seperator />
          <View style={styles.card}>
            <View style={styles.c_head}>
              <Text style={styles.card_title}>Chat</Text>
            </View>
          </View>
          <Seperator />
          <View style={styles.card}>
            <View style={styles.c_head}>
              <Text style={styles.card_title}>Privacy in your hands </Text>
            </View>
          </View>
          <Seperator />
          <View style={styles.card}>
            <View style={styles.c_head}>
              <Text style={styles.card_title}>Customer Support </Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 15,
              color: '#19874B',
            }}>
            Sign Out
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 10,
  },
  header: {
    justifyContent: 'space-between',
    padding: 20,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#DFFFE3',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  card_s_title: {
    // opacity: 0.8,
    marginTop: 5,
    fontWeight: 'bold',
  },
  footer: {
    flex: 1,
    padding: 20,
  },
  card: {
    paddingVertical: 10,
  },
  c_head: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  card_title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  btnContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    width: '80%',
    bottom: 10,
    height: 50,
    borderRadius: 10,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#19874B',
    borderWidth: 2,
    backgroundColor: '#fff',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
});

export default CodePush(CodePushOptions)(App);
