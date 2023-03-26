
//// ini code push notification
// import React, {useState} from 'react';
// import { 
//   TextInput, 
//   StyleSheet, 
//   Text, 
//   View, 
//   TouchableOpacity, 
//   Alert,
//   ScrollView
// } from 'react-native';
// import NotifService from './NotifService';

// const App = () =>{
//   const [ registerToken, setRegisterToken] = useState('');
//   const [fcmRegistered, setFcmRegistered ] = useState(false);

//     const onRegister = (token) =>{
//       setRegisterToken(token.token)
//       setFcmRegistered(true)
//     }

//     const onNotif = (notif) =>{
//       Alert.alert(notif.title, notif.message)
//     }

//     const notif = new NotifService(onRegister, onNotif);
    
//     const handlePerm = (perms) =>{
//       Alert.alert('Permissions', JSON.stringify(perms))
//     }

//     return (
//       <View style={styles.container}>

//         <Text style={styles.title}>
//           Example app react-native-push-notification update dari HP
//         </Text>
//         <View style={styles.spacer}></View>
//       <ScrollView>

//          <TextInput
//               style={styles.textField}
//               value={registerToken}
//               placeholder="Register token"
//               multiline
//               numberOfLines={10}
//               textAlignVertical="top"
//         />
//         <View style={styles.spacer}></View>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => {
//            notif.localNotif('ini pesan singkat');
//           //  notif.localNotif();
//           }}>
//           <Text>Local Notification (now)</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => {
//            notif.localNotif('sample.mp3');
//           }}>
//           <Text>Local Notification with sound (now)</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => {
//            notif.scheduleNotif();
//           }}>
//           <Text>Schedule Notification in 30s</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => {
//            notif.scheduleNotif('sample.mp3');
//           }}>
//           <Text>Schedule Notification with sound in 30s</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => {
//            notif.cancelNotif();
//           }}>
//           <Text>Cancel last notification (if any)</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => {
//            notif.cancelAll();
//           }}>
//           <Text>Cancel all notifications</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => {
//            notif.checkPermission(handlePerm());
//           }}>
//           <Text>Check Permission</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => {
//            notif.requestPermissions();
//           }}>
//           <Text>Request Permissions</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => {
//            notif.abandonPermissions();
//           }}>
//           <Text>Abandon Permissions</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => {
//            notif.getScheduledLocalNotifications(notifs => console.log(notifs));
//           }}>
//           <Text>Console.Log Scheduled Local Notifications</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => {
//            notif.getDeliveredNotifications(notifs => console.log(notifs));
//           }}>
//           <Text>Console.Log Delivered Notifications</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => {
//            notif.createOrUpdateChannel();
//           }}>
//           <Text>Create or update a channel</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => {
//            notif.popInitialNotification();
//           }}>
//           <Text>popInitialNotification</Text>
//         </TouchableOpacity>

//         <View style={styles.spacer}></View>

//         {fcmRegistered && <Text>FCM Configured !</Text>}
//         </ScrollView>

//         <View style={styles.spacer}></View>
//       </View>
//     );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   button: {
//     borderWidth: 1,
//     borderColor: '#000000',
//     margin: 5,
//     padding: 5,
//     width: '70%',
//     backgroundColor: '#DDDDDD',
//     borderRadius: 5,
//   },
//   textField: {
//     borderWidth: 1,
//     borderColor: '#AAAAAA',
//     margin: 5,
//     padding: 5,
//     width: 300, 
//     height: 200
//   },
//   spacer: {
//     height: 10,
//   },
//   title: {
//     fontWeight: 'bold',
//     fontSize: 20,
//     textAlign: 'center',
//   },
// });

// export default App


//// ini code register
// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
// import auth from '@react-native-firebase/auth';
// import NotifService from './NotifService';

// const Register = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const [ registerToken, setRegisterToken] = useState('');
//   const [fcmRegistered, setFcmRegistered ] = useState(false);

//     const onRegister = (token) =>{
//       setRegisterToken(token.token)
//       setFcmRegistered(true)
//     }

//     const onNotif = (notif) =>{
//       Alert.alert(notif.title, notif.message)
//     }

//     const notif = new NotifService(onRegister, onNotif);
    
//     const handlePerm = (perms) =>{
//       Alert.alert('Permissions', JSON.stringify(perms))
//     }

//   const register = () => {
//     auth()
//       .createUserWithEmailAndPassword(email, password)
//       .then(() => {
//         notif.localNotif();
//         console.log('User account created successfully');
//       })
//       .catch(error => {
//         console.log('Error creating user account: ', error);
//       });
//   };
//   return (
//     <View style={styles.container}>
//       <Image
//         style={styles.logo}
//         source={{ uri: 'https://example.com/logo.png' }}
//       />
//       <Text style={styles.heading}>Register</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         onChangeText={setEmail}
//         value={email}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         onChangeText={setPassword}
//         value={password}
//         secureTextEntry
//       />
//       <TouchableOpacity style={styles.button} onPress={register}>
//         <Text style={styles.buttonText}>Register</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//   },
//   logo: {
//     width: 100,
//     height: 100,
//     marginBottom: 30,
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 30,
//   },
//   input: {
//     width: '80%',
//     height: 40,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: '#4CAF50',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });

// export default Register;




//// ini code login
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import auth from '@react-native-firebase/auth';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User signed in successfully');
      })
      .catch(error => {
        console.log('Error signing in: ', error);
      });
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{ uri: 'https://example.com/logo.png' }}
      />
      <Text style={styles.heading}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default LoginScreen;
