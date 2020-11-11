import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import MealItem from '../components/MealItem';
import { CATEGORIES, MEALS } from '../data/dummy-data';

const CategoryMealsScreen = props => {

    const renderMealItem = itemData => {
        return <MealItem 
                    title={itemData.item.title}
                    duration={itemData.item.duration}
                    complexity={itemData.item.complexity}
                    affordability={itemData.item.affordability} 
                    image={itemData.item.imageUrl}
                    onSelectMeal={() => {}} 
                />;
    }

    const catId = props.navigation.getParam('categoryId');
    const displayMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    return (
        <View style={styles.screen}>
           <FlatList 
                data={displayMeals} 
                keyExtractor={(item, index) => item.id} 
                renderItem={renderMealItem} 
                style={{ width: '100%'}}
            />
        </View>
    );
};

CategoryMealsScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealsScreen;