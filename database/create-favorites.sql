-- // psql -d postgres://ikdvjxln:e4L33pn0X5g52n5ULGN2zkVmSHHoZ05l@rajje.db.elephantsql.com/ikdvjxln -f create-favorites.sql
DROP TABLE IF EXISTS favorites;

CREATE TABLE favorites (
   faveid SERIAL UNIQUE PRIMARY KEY,
   iddrink INT NOT NULL,
   username VARCHAR NOT NULL,
   CONSTRAINT fk_iddrink FOREIGN KEY(iddrink) REFERENCES cocktails(iddrink),
   CONSTRAINT fk_username FOREIGN KEY(username) REFERENCES users(username)
);

INSERT INTO favorites (iddrink, username) VALUES (11000, 'dmflury');
INSERT INTO favorites (iddrink, username) VALUES (11001, 'dmflury');
INSERT INTO favorites (iddrink, username) VALUES (11002, 'sakhmedov');
INSERT INTO favorites (iddrink, username) VALUES (11003, 'sakhmedov');
INSERT INTO favorites (iddrink, username) VALUES (11004, 'rhowton');
INSERT INTO favorites (iddrink, username) VALUES (11005, 'rhowton');
INSERT INTO favorites (iddrink, username) VALUES (11006, 'mchin');
INSERT INTO favorites (iddrink, username) VALUES (11007, 'mchin');