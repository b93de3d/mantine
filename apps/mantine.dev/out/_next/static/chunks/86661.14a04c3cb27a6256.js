"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[86661],{86661:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});let r=[Object.freeze(JSON.parse('{"displayName":"PL/SQL","fileTypes":["sql","ddl","dml","pkh","pks","pkb","pck","pls","plb"],"foldingStartMarker":"(?i)^\\\\s*(begin|if|loop)\\\\b","foldingStopMarker":"(?i)^\\\\s*(end)\\\\b","name":"plsql","patterns":[{"begin":"/\\\\*","end":"\\\\*/","name":"comment.block.oracle"},{"match":"--.*$","name":"comment.line.double-dash.oracle"},{"match":"(?i)(?:^\\\\s*)rem(?:\\\\s+.*$)","name":"comment.line.sqlplus.oracle"},{"match":"(?i)(?:^\\\\s*)prompt(?:\\\\s+.*$)","name":"comment.line.sqlplus-prompt.oracle"},{"captures":{"1":{"name":"keyword.other.oracle"},"2":{"name":"keyword.other.oracle"}},"match":"(?i)^\\\\s*(create)(\\\\s+or\\\\s+replace)?\\\\s+","name":"meta.create.oracle"},{"captures":{"1":{"name":"keyword.other.oracle"},"2":{"name":"keyword.other.oracle"},"3":{"name":"entity.name.type.oracle"}},"match":"(?i)\\\\b(package)(\\\\s+body)?\\\\s+(\\\\S+)","name":"meta.package.oracle"},{"captures":{"1":{"name":"keyword.other.oracle"},"2":{"name":"entity.name.type.oracle"}},"match":"(?i)\\\\b(type)\\\\s+\\"([^\\"]+)\\"","name":"meta.type.oracle"},{"captures":{"1":{"name":"keyword.other.oracle"},"2":{"name":"entity.name.function.oracle"}},"match":"(?i)^\\\\s*(function|procedure)\\\\s+\\"?([-a-z0-9_]+)\\"?","name":"meta.procedure.oracle"},{"match":"[!<>:]?=|<>|<|>|\\\\+|(?<!\\\\.)\\\\*|-|(?<!^)/|\\\\|\\\\|","name":"keyword.operator.oracle"},{"match":"(?i)\\\\b(true|false|null|is\\\\s+(not\\\\s+)?null)\\\\b","name":"constant.language.oracle"},{"match":"\\\\b\\\\d+(\\\\.\\\\d+)?\\\\b","name":"constant.numeric.oracle"},{"match":"(?i)\\\\b(if|elsif|else|end\\\\s+if|loop|end\\\\s+loop|for|while|case|end\\\\s+case|continue|return|goto)\\\\b","name":"keyword.control.oracle"},{"match":"(?i)\\\\b(or|and|not|like)\\\\b","name":"keyword.other.oracle"},{"match":"(?i)\\\\b(%(isopen|found|notfound|rowcount)|commit|rollback|sqlerrm)\\\\b","name":"support.function.oracle"},{"match":"(?i)\\\\b(sql|sqlcode)\\\\b","name":"variable.language.oracle"},{"match":"(?i)\\\\b(ascii|asciistr|chr|compose|concat|convert|decompose|dump|initcap|instr|instrb|instrc|instr2|instr4|unistr|length|lengthb|lengthc|length2|length4|lower|lpad|ltrim|nchr|replace|rpad|rtrim|soundex|substr|translate|trim|upper|vsize)\\\\b","name":"support.function.builtin.char.oracle"},{"match":"(?i)\\\\b(add_months|current_date|current_timestamp|dbtimezone|last_day|localtimestamp|months_between|new_time|next_day|round|sessiontimezone|sysdate|tz_offset|systimestamp)\\\\b","name":"support.function.builtin.date.oracle"},{"match":"(?i)\\\\b(avg|count|sum|max|min|median|corr|corr_\\\\w+|covar_(pop|samp)|cume_dist|dense_rank|first|group_id|grouping|grouping_id|last|percentile_cont|percentile_disc|percent_rank|rank|regr_\\\\w+|row_number|stats_binomial_test|stats_crosstab|stats_f_test|stats_ks_test|stats_mode|stats_mw_test|stats_one_way_anova|stats_t_test_\\\\w+|stats_wsr_test|stddev|stddev_pop|stddev_samp|var_pop|var_samp|variance)\\\\b","name":"support.function.builtin.aggregate.oracle"},{"match":"(?i)\\\\b(bfilename|cardinality|coalesce|decode|empty_(blob|clob)|lag|lead|listagg|lnnvl|nanvl|nullif|nvl|nvl2|sys_(context|guid|typeid|connect_by_path|extract_utc)|uid|(current\\\\s+)?user|userenv|cardinality|(bulk\\\\s+)?collect|powermultiset(_by_cardinality)?|ora_hash|standard_hash|execute\\\\s+immediate|alter\\\\s+session)\\\\b","name":"support.function.builtin.advanced.oracle"},{"match":"(?i)\\\\b(bin_to_num|cast|chartorowid|from_tz|hextoraw|numtodsinterval|numtoyminterval|rawtohex|rawtonhex|to_char|to_clob|to_date|to_dsinterval|to_lob|to_multi_byte|to_nclob|to_number|to_single_byte|to_timestamp|to_timestamp_tz|to_yminterval|scn_to_timestamp|timestamp_to_scn|rowidtochar|rowidtonchar|to_binary_double|to_binary_float|to_blob|to_nchar|con_dbid_to_id|con_guid_to_id|con_name_to_id|con_uid_to_id)\\\\b","name":"support.function.builtin.convert.oracle"},{"match":"(?i)\\\\b(abs|acos|asin|atan|atan2|bit_(and|or|xor)|ceil|cos|cosh|exp|extract|floor|greatest|least|ln|log|mod|power|remainder|round|sign|sin|sinh|sqrt|tan|tanh|trunc)\\\\b","name":"support.function.builtin.math.oracle"},{"match":"(?i)\\\\b(\\\\.(count|delete|exists|extend|first|last|limit|next|prior|trim|reverse))\\\\b","name":"support.function.builtin.collection.oracle"},{"match":"(?i)\\\\b(cluster_details|cluster_distance|cluster_id|cluster_probability|cluster_set|feature_details|feature_id|feature_set|feature_value|prediction|prediction_bounds|prediction_cost|prediction_details|prediction_probability|prediction_set)\\\\b","name":"support.function.builtin.data_mining.oracle"},{"match":"(?i)\\\\b(appendchildxml|deletexml|depth|extract|existsnode|extractvalue|insertchildxml|insertxmlbefore|xmlcast|xmldiff|xmlelement|xmlexists|xmlisvalid|insertchildxmlafter|insertchildxmlbefore|path|sys_dburigen|sys_xmlagg|sys_xmlgen|updatexml|xmlagg|xmlcdata|xmlcolattval|xmlcomment|xmlconcat|xmlforest|xmlparse|xmlpi|xmlquery|xmlroot|xmlsequence|xmlserialize|xmltable|xmltransform)\\\\b","name":"support.function.builtin.xml.oracle"},{"match":"(?i)\\\\b(pragma\\\\s+(autonomous_transaction|serially_reusable|restrict_references|exception_init|inline))\\\\b","name":"keyword.other.pragma.oracle"},{"match":"(?i)\\\\b(p(i|o|io)_[-a-z0-9_]+)\\\\b","name":"variable.parameter.oracle"},{"match":"(?i)\\\\b(l_[-a-z0-9_]+)\\\\b","name":"variable.other.oracle"},{"match":"(?i):\\\\b(new|old)\\\\b","name":"variable.trigger.oracle"},{"match":"(?i)\\\\b(connect\\\\s+by\\\\s+(nocycle\\\\s+)?(prior|level)|connect_by_(root|icycle)|level|start\\\\s+with)\\\\b","name":"keyword.hierarchical.sql.oracle"},{"match":"(?i)\\\\b(language|name|java|c)\\\\b","name":"keyword.wrapper.oracle"},{"match":"(?i)\\\\b(end|then|deterministic|exception|when|declare|begin|in|out|nocopy|is|as|exit|open|fetch|into|close|subtype|type|rowtype|default|exclusive|mode|lock|record|index\\\\s+by|result_cache|constant|comment|\\\\.(nextval|currval))\\\\b","name":"keyword.other.oracle"},{"match":"(?i)\\\\b(grant|revoke|alter|drop|force|add|check|constraint|primary\\\\s+key|foreign\\\\s+key|references|unique(\\\\s+index)?|column|sequence|increment\\\\s+by|cache|(materialized\\\\s+)?view|trigger|storage|tablespace|pct(free|used)|(init|max)trans|logging)\\\\b","name":"keyword.other.ddl.oracle"},{"match":"(?i)\\\\b(with|select|from|where|order\\\\s+(siblings\\\\s+)?by|group\\\\s+by|rollup|cube|((left|right|cross|natural)\\\\s+(outer\\\\s+)?)?join|on|asc|desc|update|set|insert|into|values|delete|distinct|union|minus|intersect|having|limit|table|between|like|of|row|(range|rows)\\\\s+between|nulls\\\\s+first|nulls\\\\s+last|before|after|all|any|exists|rownum|cursor|returning|over|partition\\\\s+by|merge|using|matched|pivot|unpivot)\\\\b","name":"keyword.other.sql.oracle"},{"match":"(?i)\\\\b(define|whenever\\\\s+sqlerror|exec|timing\\\\s+start|timing\\\\s+stop)\\\\b","name":"keyword.other.sqlplus.oracle"},{"match":"(?i)\\\\b(access_into_null|case_not_found|collection_is_null|cursor_already_open|dup_val_on_index|invalid_cursor|invalid_number|login_denied|no_data_found|not_logged_on|program_error|rowtype_mismatch|self_is_null|storage_error|subscript_beyond_count|subscript_outside_limit|sys_invalid_rowid|timeout_on_resource|too_many_rows|value_error|zero_divide|others)\\\\b","name":"support.type.exception.oracle"},{"captures":{"3":{"name":"support.class.oracle"}},"match":"(?i)\\\\b((dbms|utl|owa|apex)_\\\\w+\\\\.(\\\\w+))\\\\b","name":"support.function.oracle"},{"captures":{"3":{"name":"support.class.oracle"}},"match":"(?i)\\\\b((htf|htp)\\\\.(\\\\w+))\\\\b","name":"support.function.oracle"},{"captures":{"3":{"name":"support.class.user-defined.oracle"}},"match":"(?i)\\\\b((\\\\w+_pkg|pkg_\\\\w+)\\\\.(\\\\w+))\\\\b","name":"support.function.user-defined.oracle"},{"match":"(?i)\\\\b(raise|raise_application_error)\\\\b","name":"support.function.oracle"},{"begin":"\'","end":"\'","name":"string.quoted.single.oracle"},{"begin":"\\"","end":"\\"","name":"string.quoted.double.oracle"},{"match":"(?i)\\\\b(char|varchar|varchar2|nchar|nvarchar2|boolean|date|timestamp(\\\\s+with(\\\\s+local)?\\\\s+time\\\\s+zone)?|interval\\\\s*day(\\\\(\\\\d*\\\\))?\\\\s*to\\\\s*month|interval\\\\s*year(\\\\(\\\\d*\\\\))?\\\\s*to\\\\s*second(\\\\(\\\\d*\\\\))?|xmltype|blob|clob|nclob|bfile|long|long\\\\s+raw|raw|number|integer|decimal|smallint|float|binary_(float|double|integer)|pls_(float|double|integer)|rowid|urowid|vararray|natural|naturaln|positive|positiven|signtype|simple_(float|double|integer))\\\\b","name":"storage.type.oracle"}],"scopeName":"source.plsql.oracle"}'))]}}]);