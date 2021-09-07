DROP TABLE IF EXISTS schedules;

CREATE TABLE IF NOT EXISTS schedules (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    username VARCHAR(255) NOT NULL,
    day INT NOT NULL,
    start_at TIME NOT NULL,
    end_at TIME NOT NULL
);