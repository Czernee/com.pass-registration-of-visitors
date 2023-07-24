create TABLE client(
    id SERIAL PRIMARY KEY,
    fullName VARCHAR(100),
    passport VARCHAR(100),
    phone VARCHAR(100),
    room VARCHAR(10),
    arrival DATE,
    departure DATE
);