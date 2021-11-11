-- // terminal command:
-- psql -d postgres://ikdvjxln:e4L33pn0X5g52n5ULGN2zkVmSHHoZ05l@rajje.db.elephantsql.com/ikdvjxln -f alter-constraints.sql



alter table cocktails alter strcategory drop not null,
alter stralcoholic drop not null,
alter strglass drop not null,
alter strinstructionsit drop not null,
alter strdrinkthumb drop not null,
alter stringredient1 drop not null,
alter stringredient2 drop not null,
alter strcreativecommonsconfirmed drop not null,
alter thumbnailfilename drop not null