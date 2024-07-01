import sqlite3 from 'sqlite3'
import {open} from 'sqlite'

export const openDb = () => {
    return open({
        filename: './sessions.db',
        driver: sqlite3.Database
    })
}