import {openDb} from './db.mjs'

const setup = async () => {
    const db = await openDb()

    await db.exec(`
      CREATE TABLE sessions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,  
        guid VARCHAR,
        session_id VARCHAR  
      );
    `)

    await db.close()
}

setup()
    .catch(err => {
        console.error(err.message)
    })