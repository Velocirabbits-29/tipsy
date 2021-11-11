-- // psql -d postgres://ikdvjxln:e4L33pn0X5g52n5ULGN2zkVmSHHoZ05l@rajje.db.elephantsql.com/ikdvjxln -f create-users.sql
DROP TABLE users;

CREATE TABLE users (
   username VARCHAR NOT NULL UNIQUE,
   password VARCHAR NOT NULL,
   firstName VARCHAR NOT NULL,
   lastName VARCHAR NOT NULL,
   email VARCHAR NOT NULL
);

INSERT INTO users (username, password, firstName, lastName, email) VALUES ('dmflury','passwordOne','Dana','Flury','dmflury@gmail.com');
INSERT INTO users (username, password, firstName, lastName, email) VALUES ('rhowton','passwordTwo','Robert','Howton','rhowton@gmail.com');
INSERT INTO users (username, password, firstName, lastName, email) VALUES ('sakhmedov','passwordThree','Sardor','Akhmedov','sakhmedov@gmail.com');
INSERT INTO users (username, password, firstName, lastName, email) VALUES ('mchin','passwordFour','Michael','Chin','mchin@gmail.com');
-- INSERT INTO users (username, password, firstName, lastName, email) VALUES ('mdolan','passwordFive','Mark','Dolan','mdolan@gmail.com');
-- INSERT INTO users (username, password, firstName, lastName, email) VALUES ('jnagy','passwordSix','Joe','Nagy','jnagy@gmail.com');
-- INSERT INTO users (username, password, firstName, lastName, email) VALUES ('jmaguire','passwordSeven','James','Maguire','jmaguire@gmail.com');
-- INSERT INTO users (username, password, firstName, lastName, email) VALUES ('cjansen','passwordEight','Cecily','Jansen','cjansen@gmail.com');
-- INSERT INTO users (username, password, firstName, lastName, email) VALUES ('afalvello','passwordNine','Anna','Falvello','afalvello@gmail.com');
-- INSERT INTO users (username, password, firstName, lastName, email) VALUES ('ypaturu','passwordTen','Yogi','Paturu','ypaturu@gmail.com');
-- INSERT INTO users (username, password, firstName, lastName, email) VALUES ('yliu','passwordEleven','Ying','Liu','yliu@gmail.com');
-- INSERT INTO users (username, password, firstName, lastName, email) VALUES ('jjordan','passwordTwelve','Josh','Jordan','jjordan@gmail.com');
-- INSERT INTO users (username, password, firstName, lastName, email) VALUES ('abarbazan','passwordThirteen','Alex','Barbazan','abarbazan@gmail.com');
-- INSERT INTO users (username, password, firstName, lastName, email) VALUES ('ahager','passwordFourteen','Alex','Hager','ahager@gmail.com');
-- INSERT INTO users (username, password, firstName, lastName, email) VALUES ('tsukhoverskyi','passwordFifteen','Taras','Sukhoverskyi','tsukhoverskyi@gmail.com');
-- INSERT INTO users (username, password, firstName, lastName, email) VALUES ('aberri','passwordSixteen','Adam','Berri','aberri@gmail.com');
-- INSERT INTO users (username, password, firstName, lastName, email) VALUES ('ccai','passwordSeventeen','Chang','Cai','ccai@gmail.com');
-- INSERT INTO users (username, password, firstName, lastName, email) VALUES ('bbugarcic','passwordEighteen','Baron','Bugarcic','bbugarcic@gmail.com');
-- INSERT INTO users (username, password, firstName, lastName, email) VALUES ('arichardson','passwordNineteen','Alan','Richardson','arichardson@gmail.com');
-- INSERT INTO users (username, password, firstName, lastName, email) VALUES ('anguyen','passwordTwenty','Andrew','Nguyen','anguyen@gmail.com');
-- INSERT INTO users (username, password, firstName, lastName, email) VALUES ('cgillis','passwordTwentyOne','Connor','Gillis','cgillis@gmail.com');
-- INSERT INTO users (username, password, firstName, lastName, email) VALUES ('ekwon','passwordTwentyTwo','Eddy','Kwon','ekwon@gmail.com');
-- INSERT INTO users (username, password, firstName, lastName, email) VALUES ('gyun','passwordTwentyThree','Grace','Yun','gyun@gmail.com');
-- INSERT INTO users (username, password, firstName, lastName, email) VALUES ('hjo','passwordTwentyFour','Han','Jo','hjo@gmail.com');
-- INSERT INTO users (username, password, firstName, lastName, email) VALUES ('jchau','passwordTwentyFive','Jennifer','Chau','jchau@gmail.com');
-- INSERT INTO users (username, password, firstName, lastName, email) VALUES ('jlin','passwordTwentySix','John','Lin','jlin@gmail.com');
-- INSERT INTO users (username, password, firstName, lastName, email) VALUES ('jbryan','passwordTwentySeven','Johnny','Bryan','jbryan@gmail.com');
-- INSERT INTO users (username, password, firstName, lastName, email) VALUES ('mhoang','passwordTwentyEight','Michael','Hoang','mhoang@gmail.com');
-- INSERT INTO users (username, password, firstName, lastName, email) VALUES ('oeldridge','passwordTwentyNine','Owen','Eldridge','oeldridge@gmail.com');
-- INSERT INTO users (username, password, firstName, lastName, email) VALUES ('pconstant','passwordThirty','Pat','Constant','pconstant@gmail.com');
-- INSERT INTO users (username, password, firstName, lastName, email) VALUES ('tpeterson','passwordThirtyOne','Terence','Peterson','tpeterson@gmail.com');
-- INSERT INTO users (username, password, firstName, lastName, email) VALUES ('spowers','passwordThirtyTwo','Sara','Powers','spowers@gmail.com');
-- INSERT INTO users (username, password, firstName, lastName, email) VALUES ('aaragon','passwordThirtyThree','Alana','Aragon','aaragon@gmail.com');
-- INSERT INTO users (username, password, firstName, lastName, email) VALUES ('ahordiienko','passwordThirtyFour','Alex','Hordiienko','ahordiienko@gmail.com');
-- INSERT INTO users (username, password, firstName, lastName, email) VALUES ('esahraoui','passwordThirtyFive','Esma','Sahraoui','esahraoui@gmail.com');
-- INSERT INTO users (username, password, firstName, lastName, email) VALUES ('jmaltese','passwordThirtySix','John','Maltese','jmaltese@gmail.com');
-- INSERT INTO users (username, password, firstName, lastName, email) VALUES ('jhou','passwordThirtySeven','Junie','Hou','jhou@gmail.com');
-- INSERT INTO users (username, password, firstName, lastName, email) VALUES ('lllano','passwordThirtyEight','Laura','Llano','lllano@gmail.com');
-- INSERT INTO users (username, password, firstName, lastName, email) VALUES ('mliu','passwordThirtyNine','Mark','Liu','mliu@gmail.com');
-- INSERT INTO users (username, password, firstName, lastName, email) VALUES ('mcolley','passwordForty','Michael','Colley','mcolley@gmail.com');
-- INSERT INTO users (username, password, firstName, lastName, email) VALUES ('rmcdaniel','passwordFortyOne','Ryan','McDaniel','rmcdaniel@gmail.com');
-- INSERT INTO users (username, password, firstName, lastName, email) VALUES ('wmarsh','passwordFortyTwo','Walker','Marsh','wmarsh@gmail.com');







