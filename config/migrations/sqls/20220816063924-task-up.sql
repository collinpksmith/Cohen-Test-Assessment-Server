/* Replace with your SQL commands */
CREATE TABLE public."Tasks"
(
  id SERIAL PRIMARY KEY,
  description VARCHAR(255),
  due_date VARCHAR(255),
  priority VARCHAR(255),
  todo_id INTEGER
);
