import sql from 'better-sqlite3'
const db = sql('meals.db')

export const getMeals = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate network delay
    throw new Error('Database error') // Simulate database error
    return db.prepare('SELECT * FROM meals').all()
}