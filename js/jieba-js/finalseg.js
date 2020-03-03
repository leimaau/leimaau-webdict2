
define(["finalseg/prob_emit", "finalseg/prob_start", "finalseg/prob_trans"], function (prob_emit, prob_start, prob_trans) {
    var MIN_FLOAT = -3.14e100;
	var re_han = /([\u4E00-\u9FA5a-zA-Z0-9+#&\._]+)/,
        re_skip = /(\r\n|\s)/;
    var PrevStatus = {
        'B': ['E','S'],
        'M': ['M','B'],
        'S': ['S','E'],
        'E': ['B','M']
    };

    function viterbi(obs, states, start_p, trans_p, emit_p){
        var V = [{}];
        var path = {};
        for(var i_y in states){
            var y = states[i_y];
            var this_val = emit_p[y][obs[0]];
            var em_p = (this_val === undefined || this_val === null) ? MIN_FLOAT : this_val;
            V[0][y] = start_p[y] + em_p;
            path[y] = [y];
        }
		var newpath = null;
        for(var t=1; t<obs.length; t++){
            V.push({});
			newpath = {};
			var prob = MIN_FLOAT-1, state = "";
            for(var i_y in states){
                var y=states[i_y];
                var this_val = emit_p[y][obs[t]];
                var em_p = (this_val === undefined || this_val === null) ? MIN_FLOAT : this_val;
                for(var i_y0 in PrevStatus[y]){
					var y0 = PrevStatus[y][i_y0];
					this_val = trans_p[y0][y];
					var t_p = (this_val === undefined || this_val === null) ? MIN_FLOAT : this_val;
					if(V[t-1][y0] + t_p + em_p > prob){
						prob = V[t-1][y0] + t_p + em_p;
						state = y0;
					}
                }
                V[t][y] =prob;
                var dp_path = (path[state] === undefined || path[state] === null) ? [] : path[state];
                var tmp_path = dp_path.concat(); tmp_path.push(y);
                newpath[y] = tmp_path.concat();
            }
            path = newpath;
        }
		
		var prob = MIN_FLOAT-1, state = "", best_state = "", max_S = 1e9;
        var tmp_targ = ['E','S'];
        for(var i_y in tmp_targ){
            var y = tmp_targ[i_y];
            if(V[obs.length - 1][y] >= prob){
                state = y;
				
				// verify path
				var temp_path = path[state];
				var cnt_B = 0, cnt_E = 0, cnt_S = 0;
				for(var t in temp_path){
					if(temp_path[t] == 'B')
						cnt_B += 1;
					else if(temp_path[t] == 'E')
						cnt_E += 1;
					else if(temp_path[t] == 'S')
						cnt_S += 1;
				}
				if(cnt_B != cnt_E || cnt_S > max_S){
					continue;
				}
				else{
					best_state = state;
					max_S = cnt_S;
					prob = V[obs.length - 1][y];
				}
            }
        }
        //console.log(V); //debug
        //console.log(path); //debug
               
        //console.log("prob: "+prob); //debug
        //console.log("state: "+state); //debug
        //console.log("path of state: "+path[state]); //debug
        return {
            'prob': prob,
            'path': path[best_state]
        };
    }

    function __cut(sentence) {
        // console.log("cut sentence: " + sentence); //debug
        var SP = prob_start.start_P;
        var EP = prob_emit.emit_P;
        var TP = prob_trans.trans_P;
        var v = viterbi(sentence, ['B', 'M', 'E', 'S'], SP, TP, EP);
        var prob = v['prob'];
        var pos_list = v['path'];
        var outputv = [];
        var begin = 0, next = 0;
        for(var i in sentence){
            var pos = pos_list[i];
            if(pos=='B'){
                begin = parseInt(i);
            }
            else if (pos=='E'){
				var tmp_outputv = "";
                for(var t=begin; t<parseInt(i)+1; t++)
					tmp_outputv += sentence[t];
				outputv.push(tmp_outputv);
                next = parseInt(i)+1;
            }
            else if(pos=='S'){
                outputv.push(sentence[i]);
                next = parseInt(i)+1;
            }
        }
        if (next < sentence.length) {
            for (var t = next; t < sentence.length; t++)
                outputv.push(sentence[t]);
        }

        return outputv;
    }
    
    return {
        cut: function(sentence) {
            var yieldValues = [];
            var blocks = sentence.split(re_han);
            for (blk in blocks) {
                if (blocks[blk] == undefined || blocks[blk] == null) continue;

                if (blocks[blk].match(re_han)) {
                    var output = __cut(blocks[blk]);
                    for (word in output) {
                        yieldValues.push(output[word]);
                    }
                }
                else {
                    var tmp = blocks[blk].split(re_skip);
                    for (x in tmp) {
                        if (tmp[x] != "") {
                            yieldValues.push(tmp[x]);
                        }
                    }
                }
            }
            return yieldValues;
        }
    };
});
