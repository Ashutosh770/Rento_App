import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet } from 'react-native';

const initialMessages = [
  { id: '1', user: 'User A', text: 'Hello from User A' },
  { id: '2', user: 'User B', text: 'Hi there from User B' },
  { id: '3', user: 'User A', text: 'How are you?' },
  { id: '4', user: 'User C', text: 'Message from User C' },
];

export default function MessageScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const message = {
        id: String(messages.length + 1),
        user: 'User A', // Assuming current user sends the message
        text: newMessage.trim(),
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={[styles.messageContainer, item.user === 'User A' ? styles.userAMessage : styles.otherMessage]}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder="Type your message..."
          placeholderTextColor="#999"
        />
        <Button title="Send" onPress={handleSendMessage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  messageContainer: {
    padding: 8,
    marginBottom: 8,
    maxWidth: '80%',
    borderRadius: 8,
  },
  userAMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6', // Light green for messages from User A
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#EAEAEA', // Light gray for messages from other users
  },
  messageText: {
    fontSize: 16,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginRight: 8,
    borderRadius: 4,
    color: '#333',
  },
});
