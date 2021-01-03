import React,{useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    TextInput,
    Button,
} from 'react-native';
import styles from './styles';


const CategoryPage = () => {
    const [categories, setCategories] = useState(["category1", "category2", "category3", "category4", "category5", "category6"]);
    const [Category, setCategory] = useState("");

    const addCategory = (newCategory) => {
        if(newCategory != "")
        {
            setCategories(oldState => [...oldState, newCategory]);
        }
    }

    return(
        <ScrollView style = {styles.container}>
            {categories.map((category,index) => (
         <TouchableOpacity
                        style = {styles.button}
                        key = {index}
                        onPress={() =>
                            alert(category)}>
                        <Image style = {styles.picture}
                        
                        source = {require('../assets/Images/Animals/koala.png')}/>
                        <Text style = {styles.text}>
                            {category}
                        </Text>
         </TouchableOpacity>


                   ))}
            <TextInput
                value = {Category}
                placeholder = "Enter new category"
                onChangeText = {text =>
                    setCategory(text)} />
            <Button title = "Submit"
                    onPress = {() => {addCategory(Category);
                    setCategory("")}}/>
        </ScrollView>
    )
        }

export default CategoryPage;