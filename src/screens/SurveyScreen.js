import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function SurveyScreen() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const surveyOptions = [
    'Very satisfied',
    'Satisfied',
    'Neutral',
    'Dissatisfied',
  ];

  const handleSubmit = () => {
    if (selectedOption !== null) {
      setSubmitted(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>How satisfied are you with the app?</Text>
      {surveyOptions.map((option, index) => (
        <Text
          key={index}
          style={[
            styles.option,
            selectedOption === index && styles.selectedOption,
          ]}
          onPress={() => setSelectedOption(index)}
        >
          {option}
        </Text>
      ))}
      <Button
        title="Submit"
        onPress={handleSubmit}
        disabled={selectedOption === null || submitted}
      />
      {submitted && <Text style={styles.thanks}>Thank you for your feedback!</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
     color: '#333',
  },
  question: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
     color: '#333',
  },
  option: {
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 10,
     color: '#333',
  },
  thanks: {
  fontSize:20,
  textAlign: 'center',
  padding: 20,
  borderWidth:1,
  borderColor:'#fff',
  borderRadius: 5,
  fontWeight: 'bold',
  color:'#577'},
  selectedOption: {
    backgroundColor: '#d3d3d3',
     color: '#333',
  },
});
