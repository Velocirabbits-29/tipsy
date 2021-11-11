-- // terminal command:
-- psql -d postgres://ikdvjxln:e4L33pn0X5g52n5ULGN2zkVmSHHoZ05l@rajje.db.elephantsql.com/ikdvjxln -f add-column-cocktails.sql


-- ALTER TABLE Cocktails ADD COLUMN idCreator VARCHAR; 
-- ALTER TABLE Cocktails ADD CONSTRAINT fk_idCreator FOREIGN KEY(idCreator) REFERENCES users(username);
UPDATE Cocktails SET idCreator=NULL; 
