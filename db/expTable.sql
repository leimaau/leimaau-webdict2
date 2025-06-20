set echo off
set trimspool on
set feedback off
set wrap off
set linesize 20000
set pagesize 20000
set newpage none
set heading off
set term off


spool E:\LocalRepository\github\leimaau-webdict2\db\tab_jyutping_ipa.txt
select distinct jyutping from v_nb_zingjam_all where jyutping not in(select jyutping from tab_jyutping_ipa);

spool E:\LocalRepository\github\leimaau-webdict2\db\tab_jyutping_ipa_bw.txt
select distinct jyutping from v_nb_zingjam_bw_all where jyutping not in(select jyutping from tab_jyutping_ipa_bw);


spool E:\LocalRepository\github\leimaau-webdict2\db\tab_1008_d.txt
select tab_id||'$'||word||'$'||niu||'$'||yunbu||'$'||she||'$'||hu||'$'||deng||'$'||tone||'$'||chong||'$'||fanqie||'$'||flag||'$'||expl||'$'||ipa||'$'||jp||'$'||bwipa||'$'||bwjp from v_gy_dong order by tab_id;

spool E:\LocalRepository\github\leimaau-webdict2\db\tab_1039.txt
select tab_id||'$'||word||'$'||niu||'$'||yunbu||'$'||she||'$'||hu||'$'||deng||'$'||tone||'$'||fanqie||'$'||expl||'$'||ipa||'$'||jp||'$'||bwipa||'$'||bwjp from v_jy_dong order by tab_id;

spool E:\LocalRepository\github\leimaau-webdict2\db\tab_1941.txt
select tab_id||'$'||word||'$'||jyutping||'$'||ipa||'$'||page||'$'||expl||'$'||firstflag from tab_1941 order by tab_id;

spool E:\LocalRepository\github\leimaau-webdict2\db\tab_1937jz_proverb.txt
select tab_id||'$'||trad||'$'||null||'$'||sour||'$'||expl||'$'||note from tab_1937jz_proverb order by tab_id;

spool E:\LocalRepository\github\leimaau-webdict2\db\tab_1937kk_proverb.txt
select tab_id||'$'||trad||'$'||null||'$'||sour||'$'||expl||'$'||note from tab_1937kk_proverb order by tab_id;

--spool E:\LocalRepository\github\leimaau-webdict2\db\tab_1838.txt
--select tab_id||'$'||word||'$'||expl||'$'||final_part||'$'||first_old||'$'||final_old||'$'||tone||'$'||jyutping||'$'||ipa||'$'||volume||'$'||page||'$'||first_type||'$'||fanqie from v_1782fy order by tab_id;

--spool E:\LocalRepository\github\leimaau-webdict2\db\tab_1856.txt
--select tab_id||'$'||word||'$'||word_comp||'$'||word_note||'$'||page||'$'||old_jp||'$'||old_jp_type||'$'||old_jp_note||'$'||expl||'$'||ipa||'$'||jyutping from v_1856yh order by tab_id;

spool E:\LocalRepository\github\leimaau-webdict2\db\tab_2020_proverb.txt
select tab_id||'$'||trad||'$'||null||'$'||sour||'$'||expl||'$'||note from tab_2020_proverb order by tab_id;

spool E:\LocalRepository\github\leimaau-webdict2\db\tab_1994.txt
select tab_id||'$'||trad||'$'||simp||'$'||ipa_s||'$'||ipa_t||'$'||jyutping||'$'||replace(sour,'1994年謝建猷《南寧白話同音字彙》','')||'$'||expl||'$'||note from v_nbdict_1994 order by tab_id;

spool E:\LocalRepository\github\leimaau-webdict2\db\tab_1997.txt
select tab_id||'$'||trad||'$'||simp||'$'||ipa_s||'$'||ipa_t||'$'||jyutping||'$'||replace(sour,'1997年楊煥典《南寧話音檔》','')||'$'||expl||'$'||note from v_nbdict_1997 order by tab_id;

spool E:\LocalRepository\github\leimaau-webdict2\db\tab_1998.txt
select tab_id||'$'||trad||'$'||simp||'$'||ipa_s||'$'||ipa_t||'$'||jyutping||'$'||replace(sour,'1998年楊煥典主編《廣西通誌·漢語方言誌》','')||'$'||expl||'$'||note from v_nbdict_1998 order by tab_id;

spool E:\LocalRepository\github\leimaau-webdict2\db\tab_1998_bw.txt
select tab_id||'$'||trad||'$'||simp||'$'||ipa_s||'$'||ipa_t||'$'||jyutping||'$'||replace(sour,'1998年楊煥典主編《廣西通誌·漢語方言誌》','')||'$'||expl||'$'||note from v_nbdict_1998_bw order by tab_id;

spool E:\LocalRepository\github\leimaau-webdict2\db\tab_2000_bw.txt
select tab_id||'$'||trad||'$'||simp||'$'||ipa_s||'$'||ipa_t||'$'||jyutping||'$'||replace(sour,'2000年李連進《平話音韻研究》','')||'$'||expl||'$'||note from tab_nbdict_2000_bw order by tab_id;

--spool E:\LocalRepository\github\leimaau-webdict2\db\tab_2000_zb_wj.txt
--select tab_id||'$'||trad||'$'||simp||'$'||ipa_s||'$'||ipa_t||'$'||jyutping||'$'||sour||'$'||expl||'$'||note from tab_nbdict_2000_zb_wj order by tab_id;

--spool E:\LocalRepository\github\leimaau-webdict2\db\tab_2000_zb_bjlu.txt
--select tab_id||'$'||trad||'$'||simp||'$'||ipa_s||'$'||ipa_t||'$'||jyutping||'$'||sour||'$'||expl||'$'||note from tab_nbdict_2000_zb_bjlu order by tab_id;

--spool E:\LocalRepository\github\leimaau-webdict2\db\tab_2000_zb_ms.txt
--select tab_id||'$'||trad||'$'||simp||'$'||ipa_s||'$'||ipa_t||'$'||jyutping||'$'||sour||'$'||expl||'$'||note from tab_nbdict_2000_zb_ms order by tab_id;

spool E:\LocalRepository\github\leimaau-webdict2\db\tab_2003.txt
select txt_id||'$'||trad||'$'||simp||'$'||ipa_s||'$'||ipa_t||'$'||jyutping||'$'||replace(sour,'2003年侯精一《現代漢語方言音庫(字庫)》','')||'$'||expl||'$'||note from v_nbdict_2003 order by tab_id;

spool E:\LocalRepository\github\leimaau-webdict2\db\tab_2007.txt
select tab_id||'$'||trad||'$'||simp||'$'||ipa_s||'$'||ipa_t||'$'||jyutping||'$'||replace(sour,'2007年謝建猷《廣西漢語方言研究》','')||'$'||expl||'$'||note from v_nbdict_2007 order by tab_id;

spool E:\LocalRepository\github\leimaau-webdict2\db\tab_200706.txt
select tab_id||'$'||trad||'$'||simp||'$'||ipa_s||'$'||ipa_t||'$'||jyutping||'$'||replace(sour,'2007年李彬《左江土白話研究》','')||'$'||expl||'$'||note from v_nbdict_200706 order by tab_id;

--spool E:\LocalRepository\github\leimaau-webdict2\db\tab_2007_zb_dg.txt
--select tab_id||'$'||trad||'$'||simp||'$'||ipa_s||'$'||ipa_t||'$'||jyutping||'$'||sour||'$'||expl||'$'||note from tab_nbdict_2007_zb_dg order by tab_id;

--spool E:\LocalRepository\github\leimaau-webdict2\db\tab_2007_zb_wj.txt
--select tab_id||'$'||trad||'$'||simp||'$'||ipa_s||'$'||ipa_t||'$'||jyutping||'$'||sour||'$'||expl||'$'||note from tab_nbdict_2007_zb_wj order by tab_id;

--spool E:\LocalRepository\github\leimaau-webdict2\db\tab_2007_zb_sz.txt
--select tab_id||'$'||trad||'$'||simp||'$'||ipa_s||'$'||ipa_t||'$'||jyutping||'$'||sour||'$'||expl||'$'||note from tab_nbdict_2007_zb_sz order by tab_id;

spool E:\LocalRepository\github\leimaau-webdict2\db\tab_2008.txt
select tab_id||'$'||trad||'$'||simp||'$'||ipa_s||'$'||ipa_t||'$'||jyutping||'$'||replace(sour,'2008年林亦、覃鳳餘《廣西南寧白話研究》','')||'$'||expl||'$'||note from v_nbdict_2008 order by tab_id;

spool E:\LocalRepository\github\leimaau-webdict2\db\tab_2009.txt
select tab_id||'$'||trad||'$'||simp||'$'||ipa_s||'$'||ipa_t||'$'||jyutping||'$'||replace(sour,'2009年陳海倫、林亦《粵語平話土話方音字彙》','')||'$'||expl||'$'||note from v_nbdict_2009 order by tab_id;

spool E:\LocalRepository\github\leimaau-webdict2\db\tab_2009_bw.txt
select tab_id||'$'||trad||'$'||simp||'$'||ipa_s||'$'||ipa_t||'$'||jyutping||'$'||replace(sour,'2009年陳海倫、林亦《粵語平話土話方音字彙》','')||'$'||expl||'$'||note from v_nbdict_2009_bw order by tab_id;

spool E:\LocalRepository\github\leimaau-webdict2\db\tab_200906.txt
select tab_id||'$'||trad||'$'||simp||'$'||ipa_s||'$'||ipa_t||'$'||jyutping||'$'||replace(sour,'2009年張菁雅《桂南平話語音比較研究》','')||'$'||expl||'$'||note from v_nbdict_200906 order by tab_id;

spool E:\LocalRepository\github\leimaau-webdict2\db\tab_201703_bw.txt
select tab_id||'$'||trad||'$'||simp||'$'||ipa_s||'$'||ipa_t||'$'||jyutping||'$'||sour||'$'||expl||'$'||note from v_nbdict_201703_bw order by tab_id;

spool E:\LocalRepository\github\leimaau-webdict2\db\tab_201705_bw.txt
select tab_id||'$'||trad||'$'||simp||'$'||ipa_s||'$'||ipa_t||'$'||jyutping||'$'||replace(sour,'2017年詹伯慧、張振興《漢語方言學大詞典》','')||'$'||expl||'$'||note from v_nbdict_201705_bw order by tab_id;

spool E:\LocalRepository\github\leimaau-webdict2\db\tab_201806.txt
select tab_id||'$'||trad||'$'||simp||'$'||ipa_s||'$'||ipa_t||'$'||jyutping||'$'||sour||'$'||expl||'$'||note from tab_nbdict_201806 order by tab_id;

spool E:\LocalRepository\github\leimaau-webdict2\db\tab_2018.txt
select tab_id||'$'||trad||'$'||simp||'$'||ipa_s||'$'||ipa_t||'$'||jyutping||'$'||sour||'$'||expl||'$'||note||decode(bookjp,'1','一','2','二','3','三','4','四','5','五','x','x')||'級字' from v_nb_zingjam_all order by tab_id;

spool E:\LocalRepository\github\leimaau-webdict2\db\tab_2018_bw.txt
select tab_id||'$'||trad||'$'||simp||'$'||ipa_s||'$'||ipa_t||'$'||jyutping||'$'||sour||'$'||expl||'$'||note||decode(bookjp,'1','一','2','二','3','三','4','四','5','五','x','x')||'級字' from v_nb_zingjam_bw_all order by tab_id;

--spool E:\LocalRepository\github\leimaau-webdict2\db\tab_2019_zb_b_wj.txt
--select tab_id||'$'||trad||'$'||simp||'$'||ipa_s||'$'||ipa_t||'$'||jyutping||'$'||sour||'$'||expl||'$'||note from tab_nbdict_2019_zb_b_wj order by tab_id;

spool E:\LocalRepository\github\leimaau-webdict2\db\tab_2021.txt
select tab_id||'$'||trad||'$'||simp||'$'||ipa_s||'$'||ipa_t||'$'||jyutping||'$'||sour||'$'||expl||'$'||note from tab_nbdict_2021 order by tab_id;

spool E:\LocalRepository\github\leimaau-webdict2\db\tab_2021_bw.txt
select tab_id||'$'||trad||'$'||simp||'$'||ipa_s||'$'||ipa_t||'$'||jyutping||'$'||sour||'$'||expl||'$'||note from tab_nbdict_2021_bw order by tab_id;

--詞彙
spool E:\LocalRepository\github\leimaau-webdict2\db\tab_1997_phrase.txt
select tab_id||'$'||classifi||'$'||trad||'$'||null||'$'||null||'$'||null||'$'||jyutping||'$'||sour||'$'||expl||'$'||note from tab_nbdict_1997_phrase order by tab_id;

spool E:\LocalRepository\github\leimaau-webdict2\db\tab_1998_phrase.txt
select tab_id||'$'||classifi||'$'||trad||'$'||null||'$'||null||'$'||null||'$'||jyutping||'$'||sour||'$'||expl||'$'||note from tab_nbdict_1998_phrase order by tab_id;

spool E:\LocalRepository\github\leimaau-webdict2\db\tab_2007_phrase.txt
select tab_id||'$'||classifi||'$'||trad||'$'||null||'$'||null||'$'||null||'$'||jyutping||'$'||sour||'$'||expl||'$'||note from tab_nbdict_2007_phrase order by tab_id;

spool E:\LocalRepository\github\leimaau-webdict2\db\tab_2008_phrase.txt
select tab_id||'$'||classifi||'$'||trad||'$'||null||'$'||null||'$'||null||'$'||jyutping||'$'||sour||'$'||expl||'$'||note from tab_nbdict_2008_phrase order by tab_id;

spool E:\LocalRepository\github\leimaau-webdict2\db\tab_2020_phrase.txt
select tab_id||'$'||classifi||'$'||trad||'$'||null||'$'||null||'$'||null||'$'||jyutping||'$'||sour||'$'||expl||'$'||note from tab_nb_zingjam_phrase order by tab_id;

spool E:\LocalRepository\github\leimaau-webdict2\db\tab_2021_phrase.txt
select tab_id||'$'||classifi||'$'||trad||'$'||null||'$'||null||'$'||null||'$'||jyutping||'$'||sour||'$'||expl||'$'||note from tab_nbdict_2021_phrase order by tab_id;

spool E:\LocalRepository\github\leimaau-webdict2\db\tab_2021_bw_phrase.txt
select tab_id||'$'||classifi||'$'||trad||'$'||null||'$'||null||'$'||null||'$'||jyutping||'$'||sour||'$'||expl||'$'||note from tab_nbdict_2021_bw_phrase order by tab_id;

spool E:\LocalRepository\github\leimaau-webdict2\db\v_xiandaihanyu_phrase.txt
select tab_id||'$'||trad||'$'||jyutping||'$'||jyutping2||'$'||expl from v_xiandaihanyu_phrase order by tab_id;


--spool E:\LocalRepository\github\leimaau-webdict2\db\tab_2020_bw_phrase.txt
--select tab_id||'$'||classifi||'$'||trad||'$'||simp||'$'||ipa_s||'$'||ipa_t||'$'||jyutping||'$'||sour||'$'||expl||'$'||note from tab_nbdict_2020_bw_phrase order by tab_id;

--spool E:\LocalRepository\github\leimaau-webdict2\db\tab_2020_grammar.txt
--select tab_id||'$'||classifi||'$'||trad||'$'||simp||'$'||ipa_s||'$'||ipa_t||'$'||jyutping||'$'||sour||'$'||expl||'$'||note from tab_nbdict_2020_grammar order by tab_id;

spool E:\LocalRepository\github\leimaau-webdict2\db\tab_2021_grammar.txt
select tab_id||'$'||classifi||'$'||trad||'$'||null||'$'||null||'$'||null||'$'||jyutping||'$'||sour||'$'||expl||'$'||note from tab_nbdict_2021_grammar order by tab_id;

--spool E:\LocalRepository\github\leimaau-webdict2\db\tab_2020_bw_grammar.txt
--select tab_id||'$'||classifi||'$'||trad||'$'||simp||'$'||ipa_s||'$'||ipa_t||'$'||jyutping||'$'||sour||'$'||expl||'$'||note from tab_nbdict_2020_bw_grammar order by tab_id;

--spool E:\LocalRepository\github\leimaau-webdict2\db\tab_2022.txt
--select tab_id||'$'||trad||'$'||simp||'$'||ipa_s||'$'||ipa_t||'$'||jyutping||'$'||sour||'$'||expl||'$'||note from v_nbdict_2022 order by tab_id;

--spool E:\LocalRepository\github\leimaau-webdict2\db\tab_2022_bw.txt
--select tab_id||'$'||trad||'$'||simp||'$'||ipa_s||'$'||ipa_t||'$'||jyutping||'$'||sour||'$'||expl||'$'||note from v_nbdict_2022_bw order by tab_id;

--spool E:\LocalRepository\github\leimaau-webdict2\db\tab_bookjp.txt
--select trad||'$'||simp||'$'||bookjp from v_bookjp;

spool off

exit;