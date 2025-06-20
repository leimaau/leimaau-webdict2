.separator "$"

delete from tab_1008_d;
delete from tab_1838;
delete from tab_1856;
delete from tab_1941;
--delete from tab_bookjp;

.import tab_1008_d.txt tab_1008_d
.import tab_1838.txt tab_1838
.import tab_1856.txt tab_1856
.import tab_1941.txt tab_1941
--.import tab_bookjp.txt tab_bookjp

vacuum;