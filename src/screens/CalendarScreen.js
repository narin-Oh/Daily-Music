import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import Header from '../components/Header';
import CalendarView from '../components/CalendarView';
import DateInfo from '../components/DateInfo';
import EmojiModal from '../components/EmojiModal';

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [emojiData, setEmojiData] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);

  const emojiList = ['😊', '😎', '😴', '😂', '😍', '🥳', '🤔', '😅'];

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  const selectEmoji = (selectedEmoji) => {
    setEmojiData((prevData) => ({
      ...prevData,
      [selectedDate]: selectedEmoji,
    }));
    setIsModalVisible(false);
  };

  const getDateInfo = () => {
    const emoji = emojiData[selectedDate] || '';
    return {
      date: selectedDate,
      title: '제목 없음',
      keywords: '키워드 없음',
      song: '추천곡 없음',
      emoji,
    };
  };

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView>
        <CalendarView selectedDate={selectedDate} onDayPress={onDayPress} />

        {/* 선택된 이모티콘 강조 */}
        {selectedDate && emojiData[selectedDate] && (
          <View style={{ alignItems: 'center', marginVertical: 20 }}>
            <View style={{ height: 80, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 60 }}>
                {emojiData[selectedDate]}
              </Text>
            </View>
          </View>
        )}

        {/* 날짜 정보와 이모티콘 */}
        {selectedDate && (
          <DateInfo
            dateInfo={getDateInfo()}
            onEmojiPress={() => setIsModalVisible(true)}
          />
        )}
      </ScrollView>

      <EmojiModal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onSelect={selectEmoji}
        emojiList={emojiList}
      />
    </View>
  );
};

export default CalendarScreen;
