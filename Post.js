import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity
} from 'react-native';

const PostScreen = () => {
  const [inputTitle, setInputTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posts, setPosts] = useState([]);

  const handleAddPost = () => {
    if (inputTitle.trim() === '' || description.trim() === '') {
      alert('Please fill in both fields!');
      return;
    }

    const newPost = {
      id: Date.now().toString(),
      title: inputTitle,
      description,
    };
    setPosts((prevPosts) => [...prevPosts, newPost]);

    // Clear input fields
    setInputTitle('');
    setDescription('');
  };

  const handleDeletePost = (postId) => {
    setPosts((prevPosts) => prevPosts.filter(post => post.id !== postId));
  };

  const renderItem = ({ item }) => (
    <View style={styles.buttonContainer}>
      <View style={styles.postItem}>
        <Text style={styles.postTitle}>{item.title}</Text>
        <Text style={styles.postDescription}>{item.description}</Text>
        <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeletePost(item.id)}>
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>Hello User</Text>
          <Text style={styles.smallText}>
            Articles you may be interested in reading, or you can add one
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Title"
            keyboardType="default"
            value={inputTitle}
            onChangeText={setInputTitle}
          />
          <TextInput
            style={styles.description}
            placeholder="Description"
            keyboardType="default"
            value={description}
            onChangeText={setDescription}
          />
          <View style={styles.addButtonContainer}>
            <Button title="Add" onPress={handleAddPost} />
          </View>
        </View>
        <View style={styles.body}>
          <FlatList
            data={posts}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            ListEmptyComponent={
              <Text style={styles.emptyComponent}>
                No posts yet. Add your first blog post above.
              </Text>
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderColor: '#000',
    overflow: 'hidden',
  },
  header: {
    height: 450,
    backgroundColor: '#6d63ff',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 4,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'white',
  },
  smallText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'white',
    marginTop: 5,
  },
  input: {
    backgroundColor: 'white',
    borderColor: '#d3d3d3',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    margin: 20,
    fontSize: 16,
    color: '#333',
    width: '80%',
    height: '10%',
    marginLeft: 10,
  },
  description: {
    backgroundColor: 'white',
    borderColor: '#d3d3d3',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
    width: '80%',
    height: '10%',
    marginLeft: 10,
  },
  addButtonContainer: {
    marginLeft: 10,
    marginTop: 10,
  },
  body: {
    flex: 1,
    backgroundColor: 'white',
  },
  postItem: {
    marginBottom: 20,
    padding: 15,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  postDescription: {
    fontSize: 16,
    color: '#666',
  },
  emptyComponent:{
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#545050',
    marginTop: 10,
  },
  deleteButton:{
    position:'fixed',
    backgroundColor: '#ff4d4d',
    padding: 5,
    borderRadius: 5,
    width: 50, 
    height: 30, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButtonText:{
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer:{
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  }
});

export default PostScreen;
