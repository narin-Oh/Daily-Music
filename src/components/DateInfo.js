import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DateInfo = ({ dateInfo, onEmojiPress }) => (
  <View style={styles.infoContainer}>
    <Text style={styles.dateText}>선택한 날짜: {dateInfo.date}</Text>
    <View style={styles.infoBox}>
      <Text style={styles.infoLabel}>제목</Text>
      <Text style={styles.infoContent}>{dateInfo.title}</Text>
    </View>
    <View style={styles.infoBox}>
      <Text style={styles.infoLabel}>사용한 키워드</Text>
      <Text style={styles.infoContent}>{dateInfo.keywords}</Text>
    </View>
    <View style={styles.infoBox}>
      <Text style={styles.infoLabel}>추천곡</Text>
      <Text style={styles.infoContent}>{dateInfo.song}</Text>
    </View>
    <TouchableOpacity style={styles.emojiButton} onPress={onEmojiPress}>
      <Text style={styles.emojiText}>이모티콘 추가</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  infoContainer: {
    marginTop: 10,
    padding: 15,
    backgroundColor: '#ffe6f2',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#e74c3c',
  },
  infoBox: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  infoLabel: {
    fontSize: 14,
    color: '#555',
  },
  infoContent: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#333',
  },
  emojiButton: {
    marginTop: 15,
    backgroundColor: '#e74c3c',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  emojiText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default DateInfo;
