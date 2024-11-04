/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const Signup = props => {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  const [number, setNumber] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kayıt Ol</Text>

      <Image
        source={require('../assets/images/image1.png')}
        style={styles.logo}
      />

      <View style={styles.inputLableContainer}>
        <Text style={styles.inputLableText}>Ad Soyad</Text>
      </View>
      <View style={styles.emailContainer}>
        <MaterialIcon
          name="account-outline"
          size={20}
          color="#00000080"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Ad Soyad"
          placeholderTextColor="#00000080"
          value={name}
          onChangeText={setName}
        />
      </View>

      <View style={styles.inputLableContainer}>
        <Text style={styles.inputLableText}>Email</Text>
      </View>
      <View style={styles.emailContainer}>
        <MaterialIcon
          name="email-outline"
          size={20}
          color="#00000080"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#00000080"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
        }}>
        <View style={{width: '25%'}}>
          <View style={styles.inputLableContainer}>
            <Text style={styles.inputLableText}>Ülke</Text>
          </View>
          <View style={styles.codeContainer}>
            <TextInput
              style={styles.codeInput}
              placeholder="+90"
              placeholderTextColor="#00000080"
              value={code}
              onChangeText={setCode}
            />
          </View>
        </View>
        <View style={{width: '70%'}}>
          <View style={styles.inputLableContainer}>
            <Text style={styles.inputLableText}>Telefon Numarası</Text>
          </View>
          <View style={styles.emailContainer}>
            <TextInput
              style={styles.input}
              placeholder="123 455 67 88"
              placeholderTextColor="#00000080"
              value={number}
              onChangeText={setNumber}
            />
          </View>
        </View>
      </View>

      <View style={styles.inputLableContainer}>
        <Text style={styles.inputLableText}>Şifre</Text>
      </View>
      <View style={styles.passwordContainer}>
        <MaterialIcon
          name="lock-outline"
          size={20}
          color="#00000080"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Şifre"
          placeholderTextColor="#00000080"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          onPress={() => {
            setShowPassword(!showPassword);
          }}>
          <MaterialIcon
            name={showPassword ? 'eye-off-outline' : 'eye-outline'}
            size={20}
            color="#00000080"
            style={styles.iconRight}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.forgotPasswordText}>
        <Text style={styles.forgotPassword}>Şifreni mi unuttun?</Text>
      </TouchableOpacity>

      <View style={styles.SignupButtonContainer}>
        <TouchableOpacity style={styles.SignupButton} onPress={() => {}}>
          <Text style={styles.SignupButtonText}>Kayıt Ol</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>VEYA</Text>
        <View style={styles.divider} />
      </View>

      <View style={styles.socialLoginContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require('../assets/images/Google.png')}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require('../assets/images/Apple.png')}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require('../assets/images/Facebook.png')}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.signupText}>
        Hesabınız var mı?{' '}
        <Text
          style={styles.signupLink}
          onPress={() => navigation.navigate('Login')}>
          Giriş Yap
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 79,
    height: 104,
    resizeMode: 'contain',
    marginVertical: 20,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Inter',
    color: 'black',
    marginBottom: 20,
    marginTop: 50,
  },
  inputLableContainer: {width: '100%', marginBottom: 10},
  inputLableText: {color: 'black', fontSize: 14, fontFamily: 'Inter'},
  emailContainer: {
    height: 36,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D0D5DD',
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 30,
    width: '100%',
  },
  codeContainer: {
    height: 36,
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D0D5DD',
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 30,
    width: '100%',
  },
  passwordContainer: {
    height: 36,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D0D5DD',
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: '100%',
  },
  icon: {
    marginRight: 10,
  },
  iconRight: {
    marginLeft: 'auto',
  },
  input: {
    flex: 1,
    height: 36,
    color: 'black',
  },
  codeInput: {
    flex: 1,
    height: 36,
    justifyContent:'center',alignItems:'center',
    color: 'black',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    color: '#66AE7B',
    marginVertical: 5,
  },
  forgotPasswordText: {
    width: '100%',
    marginBottom: 10,
  },
  SignupButtonContainer: {
    width: '100%',
    paddingBottom: 20,
  },
  SignupButton: {
    backgroundColor: '#66AE7B',
    height: 40,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  SignupButtonText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Inter',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 30,
  },
  divider: {
    height: 1,
    width: 90,
    backgroundColor: '#979797',
  },
  dividerText: {
    marginHorizontal: 10,
    color: 'gray',
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  socialButton: {
    borderColor: '#D0D5DD',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginHorizontal: 10,
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
  signupText: {
    color: 'black',
  },
  signupLink: {
    color: '#66AE7B',
    textDecorationLine: 'underline',
  },
});

export default Signup;
