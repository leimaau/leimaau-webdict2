.separator "$"

delete from tab_1039;
delete from tab_xiandaihanyu_phrase;

.import tab_1039.txt tab_1039
.import v_xiandaihanyu_phrase.txt tab_xiandaihanyu_phrase

vacuum;