set echo off
set trimspool on
set feedback off
set wrap off
set linesize 20000
set pagesize 20000
set newpage none
set heading off
set term off

spool E:\LocalRepository\github\leimaau-webdict2\js\jieba-js\v_nb_zingjam_all_json.txt
select * from v_nb_zingjam_all_json;

spool E:\LocalRepository\github\leimaau-webdict2\js\jieba-js\v_nb_zingjam_bw_all_json.txt
select * from v_nb_zingjam_bw_all_json;

spool E:\LocalRepository\github\leimaau-webdict2\js\jieba-js\v_segdictplus_array.txt
select * from v_segdictplus_array;

spool off

exit;