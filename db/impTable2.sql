.separator "$"

delete from tab_1937jz_proverb;
delete from tab_1937kk_proverb;
delete from tab_2008_proverb;
delete from tab_2015_proverb;
delete from tab_2020_proverb;
delete from tab_2021_proverb;
delete from tab_1008_d;
delete from tab_1838;
delete from tab_1856;
delete from tab_1941;
--delete from tab_bookjp;

.import tab_1937jz_proverb.txt tab_1937jz_proverb
.import tab_1937kk_proverb.txt tab_1937kk_proverb
.import tab_2008_proverb.txt tab_2008_proverb
.import tab_2015_proverb.txt tab_2015_proverb
.import tab_2020_proverb.txt tab_2020_proverb
.import tab_2021_proverb.txt tab_2021_proverb
.import tab_1008_d.txt tab_1008_d
.import tab_1838.txt tab_1838
.import tab_1856.txt tab_1856
.import tab_1941.txt tab_1941
--.import tab_bookjp.txt tab_bookjp

vacuum;