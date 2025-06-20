.separator "$"

delete from tab_1937jz_proverb;
delete from tab_1937kk_proverb;
delete from tab_2020_proverb;
delete from tab_1994;
delete from tab_1997;
delete from tab_1998;
delete from tab_1998_bw;
delete from tab_2000_bw;
--delete from tab_2000_zb_wj;
--delete from tab_2000_zb_bjlu;
--delete from tab_2000_zb_ms;
delete from tab_2003;
delete from tab_2007;
delete from tab_200706;
--delete from tab_2007_zb_dg;
--delete from tab_2007_zb_wj;
--delete from tab_2007_zb_sz;
delete from tab_2008;
delete from tab_2009;
delete from tab_2009_bw;
delete from tab_200906;
delete from tab_201703_bw;
delete from tab_201705_bw;
delete from tab_201806;
delete from tab_2018;
delete from tab_2018_bw;
--delete from tab_2019_zb_b_wj;
--delete from tab_2020_grammar;
--delete from tab_2020_bw_grammar;
delete from tab_2021;
delete from tab_2021_bw;

--詞彙
delete from tab_1997_phrase;
delete from tab_1998_phrase;
delete from tab_2007_phrase;
delete from tab_2008_phrase;
delete from tab_2020_phrase;
--delete from tab_2020_bw_phrase;
delete from tab_2021_phrase;
delete from tab_2021_bw_phrase;


delete from tab_2021_grammar;
--delete from tab_2022;
--delete from tab_2022_bw;



.import tab_1937jz_proverb.txt tab_1937jz_proverb
.import tab_1937kk_proverb.txt tab_1937kk_proverb
.import tab_2020_proverb.txt tab_2020_proverb
.import tab_1994.txt tab_1994
.import tab_1997.txt tab_1997
.import tab_1998.txt tab_1998
.import tab_1998_bw.txt tab_1998_bw
.import tab_2000_bw.txt tab_2000_bw
--.import tab_2000_zb_wj.txt tab_2000_zb_wj
--.import tab_2000_zb_bjlu.txt tab_2000_zb_bjlu
--.import tab_2000_zb_ms.txt tab_2000_zb_ms
.import tab_2003.txt tab_2003
.import tab_2007.txt tab_2007
.import tab_200706.txt tab_200706
--.import tab_2007_zb_dg.txt tab_2007_zb_dg
--.import tab_2007_zb_wj.txt tab_2007_zb_wj
--.import tab_2007_zb_sz.txt tab_2007_zb_sz
.import tab_2008.txt tab_2008
.import tab_2009.txt tab_2009
.import tab_2009_bw.txt tab_2009_bw
.import tab_200906.txt tab_200906
.import tab_201703_bw.txt tab_201703_bw
.import tab_201705_bw.txt tab_201705_bw
.import tab_201806.txt tab_201806
.import tab_2018.txt tab_2018
.import tab_2018_bw.txt tab_2018_bw
--.import tab_2019_zb_b_wj.txt tab_2019_zb_b_wj
--.import tab_2020_grammar.txt tab_2020_grammar
--.import tab_2020_bw_grammar.txt tab_2020_bw_grammar
.import tab_2021.txt tab_2021
.import tab_2021_bw.txt tab_2021_bw

--詞彙
.import tab_1997_phrase.txt tab_1997_phrase
.import tab_1998_phrase.txt tab_1998_phrase
.import tab_2007_phrase.txt tab_2007_phrase
.import tab_2008_phrase.txt tab_2008_phrase
.import tab_2020_phrase.txt tab_2020_phrase
--.import tab_2020_bw_phrase.txt tab_2020_bw_phrase
.import tab_2021_phrase.txt tab_2021_phrase
.import tab_2021_bw_phrase.txt tab_2021_bw_phrase


.import tab_2021_grammar.txt tab_2021_grammar
--.import tab_2022.txt tab_2022
--.import tab_2022_bw.txt tab_2022_bw

vacuum;