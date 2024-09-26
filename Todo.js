import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';


const TodoScreen = () => {
  const [todos, setTodos] = useState({});
  const [input, setInput] = useState('');
  const [nextId, setNextId] = useState(1);
  const [editingId, setEditingId] = useState(null);

  const addTodo = () => {
    console.log('Input for new todo:', input);

    if (input.trim()) {
      const id = nextId;
      setTodos({ ...todos, [id]: input });
      setNextId(nextId + 1); // Increment the ID for the next todo
      setInput('');
    }
  };

  const deleteTodo = (id) => {
    const newTodos = { ...todos };
    delete newTodos[id];
    setTodos(newTodos);
  };

  const updateTodo = () => {
    // if (editingId) {
      setTodos({ ...todos, [editingId]: input });
      setEditingId(null);
      setInput('');
    // }
  };

  const editTodo = (id) => {
    setEditingId(id);
    setInput(todos[id]);
  };
  

  const renderItem = ({ item, index }) => {
    const id = Object.keys(todos)[index];

    return (
      <View style={styles.todoContainer}>
        <Text style={styles.todo}>{item}</Text>

        <TouchableOpacity
          onPress={() => deleteTodo(id)}
          style={styles.deleteButton}>
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
 
        <TouchableOpacity
          onPress={() => editTodo(id)}
          style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>Hello User</Text>
          <Text style={styles.smallText}>What are you going to do?</Text>
          <TextInput
            style={styles.input}
            placeholder="Add To-Do"
            keyboardType="default"
            value={input}
            onChangeText={setInput}
          />

          <View style={styles.addButtonContainer}>
            <Button
              title={editingId ? 'Update' : 'Add'}
              onPress={editingId ? updateTodo : addTodo}
            />
          </View>
        </View>
        <View style={styles.body}>
          <FlatList
            keyExtractor={(item, index) => Object.keys(todos)[index]}
            data={Object.values(todos)}
            renderItem={renderItem}
            ListEmptyComponent={<Text style={styles.smallBottomText}>No To-Do yet. Add your first Todo above.</Text>}
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
  smallBottomText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#545050',
    marginTop: 10,
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
  todo: {
    padding: 10,
    fontSize: 16,
    // borderBottomWidth: 1,
    // borderBottomColor: '#ccc',
  },
  addButtonContainer: {
    marginLeft: 10,
  },
  body: {
    flex: 1,
    backgroundColor: 'white',
  },
  todoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  deleteButton: {
    backgroundColor: '#ff4d4d',
    padding: 5,
    borderRadius: 5,
    width: 50, 
    height: 30,
    alignItems:'center',
    justifyContent:'center'
  },
  deleteButtonText: {
    color: '#fff',
  },
  editButton: {
    backgroundColor: 'blue',
    padding: 5,
    marginLeft: 10,
    borderRadius: 5,
    width: 50, 
    height: 30,
    alignItems:'center',
    justifyContent:'center'
  },

  editButtonText: {
    color: 'white',
  },
});

export default TodoScreen;