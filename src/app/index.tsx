import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
  Image,
} from "react-native";

import {
  Feather,
  FontAwesome,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";

const PRIMARY = "#8ED80E";

const Index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F4F4F4" />

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/logo-nobg.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Heading */}
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Sign In</Text>

        <Text style={styles.subHeading}>
          Let's experience the joy of telecare AI.
        </Text>
      </View>

      {/* Form */}
      <View style={styles.formContainer}>
        {/* Email */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email Address</Text>

          <View style={[styles.inputContainer, styles.activeInput]}>
            <Feather name="mail" size={20} color="#666" />

            <TextInput
              placeholder="elementary221b@gmail.com"
              placeholderTextColor="#666"
              style={styles.input}
              keyboardType="email-address"
            />
          </View>
        </View>

        {/* Password */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>

          <View style={styles.inputContainer}>
            <Feather name="lock" size={20} color="#666" />

            <TextInput
              placeholder="Enter your password..."
              placeholderTextColor="#999"
              secureTextEntry
              style={styles.input}
            />

            <Ionicons
              name="eye-off-outline"
              size={20}
              color="#BEBEBE"
            />
          </View>
        </View>

        {/* Sign In Button */}
        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInText}>Sign In</Text>

          <Feather name="arrow-right" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Social Buttons */}
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="facebook" size={24} color="#222" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <AntDesign name="google" size={22} color="#222" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <AntDesign name="instagram" size={24} color="#222" />
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Don't have an account?{" "}
          <Text style={styles.highlight}>Sign Up.</Text>
        </Text>

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>
            Forgot your password?
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
    paddingHorizontal: 24,
    justifyContent: "center",
  },

  logoContainer: {
    alignItems: "center",
    marginBottom: 15,
    marginTop:30
  },

  logo: {
    width: 50,
    height: 50,
  },

  headingContainer: {
    alignItems: "center",
    marginBottom: 38,
  },

  heading: {
    fontSize: 40,
    fontWeight: "900",
    color: "#222222",
    marginBottom: 10,
    letterSpacing: 0.5,
  },

  subHeading: {
    fontSize: 15,
    color: "#8A8A8A",
    textAlign: "center",
    lineHeight: 22,
  },

  formContainer: {
    width: "100%",
  },

  inputGroup: {
    marginBottom: 22,
  },

  label: {
    fontSize: 15,
    fontWeight: "700",
    color: "#333333",
    marginBottom: 12,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingHorizontal: 18,
    height: 60,
  },

  activeInput: {
    borderWidth: 2,
    borderColor: "#B7EA5D",
    shadowColor: "#8ED80E",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },

  input: {
    flex: 1,
    marginLeft: 12,
    fontSize: 15,
    color: "#222222",
  },

  signInButton: {
    height: 60,
    backgroundColor: PRIMARY,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
  },

  signInText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
    marginRight: 10,
  },

  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 42,
  },

  socialButton: {
    width: 55,
    height: 55,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
  },

  footer: {
    alignItems: "center",
    marginTop: 34,
  },

  footerText: {
    fontSize: 14,
    color: "#666666",
    marginBottom: 12,
  },

  highlight: {
    color: PRIMARY,
    fontWeight: "700",
  },

  forgotPassword: {
    fontSize: 14,
    color: PRIMARY,
    fontWeight: "700",
  },
});