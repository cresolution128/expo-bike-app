// components/StoryComponent.js

import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import storyblokService from '../services/StoryblokService';

const StoryComponent = ({slug}) => {
  const [story, setStory] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    storyblokService
      .getStory(slug)
      .then(response => setStory(response.data.story))
      .catch(error => setError(error));
  }, [slug]);

  if (error) {
    return (
      <Text style={styles.error}>Failed to load story: {error.message}</Text>
    );
  }

  if (!story) {
    return <Text style={styles.loading}>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{story.name}</Text>
      <Text style={styles.content}>{story.content.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 16,
  },
  loading: {
    fontSize: 16,
    color: 'gray',
  },
  error: {
    fontSize: 16,
    color: 'red',
  },
});

export default StoryComponent;
