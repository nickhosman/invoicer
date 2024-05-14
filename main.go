package main

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/lib/pq"
)

/**/

func main() {
	connStr := "postgres://postgres:secret@localhost:5432/gopgtest?sslmode=disable"

	db, err := sql.Open("postgres", connStr)

	if err != nil {
		log.Fatal(err)
	}

	defer db.Close()

	if err = db.Ping(); err != nil {
		log.Fatal(err)
	}

	createInvoiceTable(db)

	pk := insertInvoice(db, Invoice{Total: 100.0})

	fmt.Printf("ID = %d\n", pk)
}

func createInvoiceTable(db *sql.DB) {
	query := `CREATE TABLE IF NOT EXISTS invoice (
		id SERIAL PRIMARY KEY,
		total DECIMAL(15, 2),
		created_at TIMESTAMP DEFAULT NOW(),
		updated_at TIMESTAMP
	)`

	_, err := db.Exec(query)

	if err != nil {
		log.Fatal(err)
	}
}

type Invoice struct {
	ID        int
	Total     float64
	CreatedAt string
	UpdatedAt string
}

func insertInvoice(db *sql.DB, invoice Invoice) int {
	query := `INSERT INTO invoice (total) VALUES ($1) RETURNING id`

	var pk int
	err := db.QueryRow(query, invoice.Total).Scan(&pk)

	if err != nil {
		log.Fatal(err)
	}

	return pk
}
