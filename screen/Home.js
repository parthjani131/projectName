import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  Modal,
  Switch,
  ScrollView,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const Home = props => {
  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [mandatoryCookies, setMandatoryCookies] = useState(true);
  const [optionalCookies, setOptionalCookies] = useState(false);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/image1.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text style={styles.loginButtonText}>Giriş Yap</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => {
            navigation.navigate('Signup');
          }}>
          <Text style={styles.registerButtonText}>Kayıt Ol</Text>
        </TouchableOpacity>

        <View style={styles.checkboxContainer}>
          <Pressable
            onPress={() => setIsPrivacyChecked(!isPrivacyChecked)}
            style={{marginRight: 10}}>
            <MaterialIcon
              name={
                isPrivacyChecked ? 'checkbox-marked' : 'checkbox-blank-outline'
              }
              size={24}
              color={'#66AE7B'}
            />
          </Pressable>
          <Text style={styles.label}>
            Supafo’nun e-posta adresimi ve adımı gizlilik politikasına uygun
            şekilde saklamasına izin veriyorum.
          </Text>
        </View>

        <View style={styles.checkboxContainer}>
          <Pressable
            onPress={() => setIsTermsChecked(!isTermsChecked)}
            style={{marginRight: 10}}>
            <MaterialIcon
              name={
                isTermsChecked ? 'checkbox-marked' : 'checkbox-blank-outline'
              }
              size={24}
              color={'#66AE7B'}
            />
          </Pressable>
          <Text style={styles.label}>
            <Pressable onPress={() => setModalVisible(true)}>
              <Text style={styles.link}>Şartlar & Koşullar</Text>
            </Pressable>{' '}
            ve{' '}
            <Pressable onPress={() => setModalVisible(true)}>
              <Text style={styles.link}>Gizlilik Politikasını</Text>
            </Pressable>{' '}
            kabul ediyorum.
          </Text>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
              {/* Header */}
              <View style={styles.header}>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Text style={styles.closeButton}>✕</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.divider} />

              <View style={styles.section}>
                <View style={styles.switchRow}>
                  <View>
                    <Text style={styles.sectionHeader}>
                    Zorunlu Çerezler
                    </Text>
                    <Text style={styles.sectionTitle}>Teknik olarak gerekli ve istatistiksel veriler</Text>
                  </View>
                  <View>
                    <Switch
                      value={mandatoryCookies}
                      onValueChange={setMandatoryCookies}
                      style={styles.switch}
                    />
                  </View>
                </View>
                <Text style={styles.sectionText}>
                Uygulamamızın düzgün çalışması için teknik olarak gerekli verileri topluyoruz. Bu veriler, uygulamaya göz atabilmeniz ve özelliklerini kullanabilmeniz için gereklidir. Ayrıca uygulama trafiğini, kullanıcı davranışını ve kullanım kalıplarını toplu düzeyde analiz etmemize ve anlamamıza olanak tanıyan istatistiksel verileri de topluyoruz. Uygulamadan elde edilen istatistiksel veriler toplanır ve uygulamamızın performansını ve kullanıcı deneyimini geliştirmek için kullanılır.
                </Text>
                <TouchableOpacity>
                  <Text style={styles.readMore}>Devamını Oku {'>'}</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.section}>
                <View style={styles.switchRow}>
                  <View>
                    <Text style={styles.sectionHeader}>
                      İsteğe Bağlı Çerezler
                    </Text>
                    <Text style={styles.sectionTitle}>Pazarlama</Text>
                  </View>
                  <View>
                    <Switch
                      value={optionalCookies}
                      onValueChange={setOptionalCookies}
                      style={styles.switch}
                    />
                  </View>
                </View>
                <Text style={styles.sectionText}>
                Kişisel verilerinizi, size ilgi alanlarınıza uygun kişiselleştirilmiş reklamlar ve içerik gösterebilmek amacıyla pazarlama amacıyla kullanırız. Bu verileri aynı zamanda gıda israfını en aza indirme vizyonumuza katılmak isteyebilecek benzer ilgi alanlarına sahip potansiyel kullanıcıları belirlemek için de kullanırız. Bu bilgileri profil oluşturma ve reklam amacıyla da kullanabilecek üçüncü taraf reklam ortaklarımızla paylaşıyoruz. Pazarlama çerezlerini kabul ederek kişisel verilerinizin profil oluşturma ve pazarlama amacıyla kullanılmasına izin vermiş olursunuz...
                </Text>
                <TouchableOpacity>
                  <Text style={styles.readMore}>Devamını Oku {'>'}</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.loginButton} onPress={() => setModalVisible(false)}>
                  <Text style={styles.buttonText}>Hepsine İzin Ver</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.loginButton}
                  onPress={() => setModalVisible(false)}>
                  <Text style={styles.buttonText}>Seçime İzin Ver</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  logoContainer: {
    flex: 2,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logo: {
    width: 190,
    height: 251,
  },
  buttonContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  loginButton: {
    backgroundColor: '#66AE7B',
    height: 40,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Inter',
  },
  registerButton: {
    borderColor: '#66AE7B',
    borderWidth: 1,
    height: 40,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  registerButtonText: {
    color: '#66AE7B',
    fontSize: 14,
    fontFamily: 'Inter',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    marginRight: 8,
  },
  label: {
    flex: 1,
    fontSize: 14,
    color: 'black',
    fontFamily: 'Inter',
  },
  link: {
    color: '#66AE7B',
    textDecorationLine: 'underline',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    maxHeight: '80%',
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  closeButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#66AE7B',
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#DADADA',
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  sectionText: {
    fontSize: 12,
    color: '#00000080',
  },
  readMore: {
    color: '#66AE7B',
    fontSize: 12,
    marginTop: 5,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  switch: {
    alignSelf: 'flex-end',
    transform: [{scaleX: 0.7}, {scaleY: 0.7}],
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Home;
