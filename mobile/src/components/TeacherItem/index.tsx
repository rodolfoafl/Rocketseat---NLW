import React from "react";
import { View, Image, Text, Linking } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import heartOulineIcon from "../../assets/images/icons/heart-regular.png";
import unfavoriteIcon from "../../assets/images/icons/heart-broken-solid.png";
import whatsAppIcon from "../../assets/images/icons/whatsapp.png";

import styles from "./styles";

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  const handleLinkToWhatsapp = () => {
    Linking.openURL(
      `whatsapp://send?text=Olá! Gostaria de marcar uma aula.&phone${teacher.whatsapp}`
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.avatar} source={{ uri: teacher.avatar }} />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.name}</Text>
          <Text style={styles.subject}>{teacher.subject}</Text>
        </View>
      </View>

      <Text style={styles.bio}>{teacher.bio}</Text>

      <View style={styles.footer}>
        <Text style={styles.price}>Preço/hora {"   "}</Text>
        <Text style={styles.priceValue}>R$ {teacher.cost}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <RectButton style={[styles.favoriteButton, styles.favorited]}>
          {/* <Image source={heartOulineIcon} /> */}
          <Image source={unfavoriteIcon} style={styles.favoriteButtonIcon} />
        </RectButton>

        <RectButton style={styles.contactButton} onPress={handleLinkToWhatsapp}>
          <Image source={whatsAppIcon} />
          <Text style={styles.contactButtonText}>Entrar em Contato</Text>
        </RectButton>
      </View>
    </View>
  );
};

export default TeacherItem;
