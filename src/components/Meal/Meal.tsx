import { useState } from 'react';
import styles from './Meal.module.scss';
import Button from '../Button/Button.tsx';

export default function Meal() {
    const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
    const [food, setFood] = useState([]);
    const [showMeal, setShowMeal] = useState(false);
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [measures, setMeasures] = useState<string[]>([]);

    const fetchFood = async () => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            const fetchedIngredients = [];
            const fetchedMeasures = [];
            const meal = data.meals[0];
            for (let i = 1; i <= 20; i++) {
                const ingredient = meal[`strIngredient${i}`];
                const measure = meal[`strMeasure${i}`];
                if (ingredient && measure) {
                    fetchedIngredients.push(ingredient);
                    fetchedMeasures.push(measure);
                }
            }
            //console.log(data);
            setFood(data.meals);
            setIngredients(fetchedIngredients);
            setMeasures(fetchedMeasures);
            setShowMeal(true);
        } catch (error) {
            console.log(error);
        }
    };

    const handleButtonClick = () => {
        fetchFood();
    };

    return (
        <>
            <Button onClick={handleButtonClick} />
            {showMeal && (
                <section className={styles['meal-container']}>
                    {food.map((meal) => {
                        const { idMeal, strMeal, strInstructions, strMealThumb } = meal;
                        return (
                            <div key={idMeal} className={styles.meal}>
                                <h2 className={styles['meal-title']}>{strMeal}</h2>
                                <p className={styles['meal-instructions']}>{strInstructions}</p>
                                {ingredients.length > 0 && (
                                    <>
                                        <section>
                                            <div className={styles['div_bottom']}>
                                                <img className={styles['img']} src={strMealThumb} alt={strMeal} />
                                                <div>
                                                <h3 className={styles['meal-subtitle']}>Ingredients:</h3>
                                                <ul className={styles['ingredients-list']}>
                                                    {ingredients.map((ingredient, index) => (
                                                        <li key={index} className={styles['ingredients-item']}>
                                                            {ingredient} - {measures[index]}
                                                        </li>
                                                    ))}
                                                </ul>
                                                </div>
                                            </div>
                                        </section>
                                    </>
                                )}
                            </div>
                        );
                    })}
                </section>
            )}
        </>
    );
}
